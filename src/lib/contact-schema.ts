import { z } from "zod";

// Shared between the contact form (client) and the contact server function.
// Keep this module free of server-only imports so it can be bundled either side.
export const SERVICE_OPTIONS = [
  "Professional Cleaning",
  "Gardening & Landscaping",
  "Catering Services",
  "General Contracts & Tenders",
  "Other / Not sure yet",
] as const;

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us a little more (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
