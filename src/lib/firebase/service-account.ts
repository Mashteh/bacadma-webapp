// Server-only: authenticates Firestore REST calls with the Google service account.
//
// Why not firebase-admin? The production build targets Cloudflare Workers, where the
// Admin SDK cannot run (gRPC/Node built-ins). WebCrypto (crypto.subtle) exists in
// Bun, Node 19+, and Workers, so minting the OAuth2 token ourselves keeps the exact
// same code running in dev and prod with zero extra dependencies.
//
// Do NOT import this module from anything that ships to the client bundle.

export type FirebaseConfig = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

// Reads env lazily (per call, not at module scope): on Cloudflare Workers
// process.env is injected per-request, so module-scope reads would be empty.
export function getFirebaseConfig(): FirebaseConfig {
  const projectId = process.env["FIREBASE_PROJECT_ID"];
  const clientEmail = process.env["FIREBASE_CLIENT_EMAIL"];
  const privateKey = process.env["FIREBASE_PRIVATE_KEY"];
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase service account env vars missing (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY). " +
        "Copy .env.example to .env and fill them from Firebase console -> Project settings -> Service accounts.",
    );
  }
  return { projectId, clientEmail, privateKey };
}

// PEM (PKCS#8) -> DER bytes, Workers-safe (atob instead of Buffer).
export function pemToDer(pem: string): Uint8Array<ArrayBuffer> {
  const body = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/g, "");
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function toBase64Url(input: string): string {
  return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64ToBase64Url(input: string): string {
  return input.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// RS256-signed JWT assertion for the service account. All payload strings are
// ASCII (issuer, scopes), so btoa needs no UTF-8 handling.
export async function signJwt(cfg: FirebaseConfig): Promise<string> {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: cfg.clientEmail,
    scope: "https://www.googleapis.com/auth/datastore",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const signingInput = `${toBase64Url(JSON.stringify(header))}.${toBase64Url(JSON.stringify(payload))}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToDer(cfg.privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signingInput),
  );
  // 256-byte signature: spreading into fromCharCode is safe.
  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return `${signingInput}.${base64ToBase64Url(signatureBase64)}`;
}

type TokenCache = { token: string; expiresAt: number };

// Tokens last ~1h; refresh 5 minutes before expiry. Module-level cache is
// intentional: Workers isolates reuse module state across requests.
let tokenCache: TokenCache | undefined;

export async function getAccessToken(): Promise<string> {
  if (tokenCache && Date.now() < tokenCache.expiresAt - 5 * 60_000) {
    return tokenCache.token;
  }

  const assertion = await signJwt(getFirebaseConfig());
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }).toString(),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Firebase OAuth token request failed (HTTP ${response.status}): ${body.slice(0, 200)}`);
  }

  const data = (await response.json()) as { access_token?: string; expires_in?: number };
  if (!data.access_token) {
    throw new Error("Firebase OAuth token response missing access_token");
  }
  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  };
  return tokenCache.token;
}
