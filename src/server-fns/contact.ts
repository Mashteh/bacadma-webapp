import { createServerFn } from "@tanstack/react-start";

import { contactSchema } from "@/lib/contact-schema";
import { addDocument, toFields } from "@/lib/firebase/firestore";

// Runs on the server only; the client gets an RPC stub. CSRF protection for
// server functions is already installed in src/start.ts.
export const submitContactInquiry = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const { id } = await addDocument("contact_submissions", toFields(data));
    return { ok: true as const, id };
  });
