// Server-only: minimal typed client for the Firestore REST API (v1).
// Only the operations the site needs today; extend as needed.

import type { ContactFormValues } from "@/lib/contact-schema";
import { getAccessToken, getFirebaseConfig } from "./service-account";

export type FirestoreValue =
  | { stringValue: string }
  | { nullValue: null }
  | { timestampValue: string }
  | { booleanValue: boolean };

export type FirestoreFields = Record<string, FirestoreValue>;

export function toFields(data: ContactFormValues): FirestoreFields {
  const fields: FirestoreFields = {
    fullName: { stringValue: data.fullName },
    phone: { stringValue: data.phone },
    email: { stringValue: data.email },
    service: { stringValue: data.service },
    message: { stringValue: data.message },
    createdAt: { timestampValue: new Date().toISOString() },
    status: { stringValue: "new" },
  };
  // Optional field: only write it when there is something real (an empty
  // string would otherwise land in Firestore as a pointless value).
  const company = data.company?.trim();
  if (company) {
    fields["company"] = { stringValue: company };
  }
  return fields;
}

export async function addDocument(
  collectionId: string,
  fields: FirestoreFields,
): Promise<{ id: string; path: string }> {
  const { projectId } = getFirebaseConfig();
  const token = await getAccessToken();
  const url =
    `https://firestore.googleapis.com/v1/projects/${projectId}` +
    `/databases/(default)/documents/${collectionId}`;

  // POST to the collection endpoint with no documentId -> Firestore assigns the ID.
  const response = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Firestore write to "${collectionId}" failed (HTTP ${response.status}): ${body.slice(0, 200)}`,
    );
  }

  const document = (await response.json()) as { name?: string };
  const path = document.name;
  if (!path) {
    throw new Error(`Firestore write to "${collectionId}" returned no document name`);
  }
  const id = path.split("/").pop();
  if (!id) {
    throw new Error(`Firestore write to "${collectionId}" returned an invalid document path`);
  }
  return { id, path };
}
