import { z } from "zod";
import { kenyanPhone } from "@/lib/validation/phone";

/** Validation for the contact "Send us a message" form. */
export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: kenyanPhone,
  subject: z.string().min(1, "Please add a subject"),
  message: z.string().min(10, "Please write at least a sentence"),
});

export type ContactPayload = z.infer<typeof contactSchema>;

/** Validate a partial payload; returns errors keyed by field name. */
export function validateContactForm(
  data: unknown,
):
  | { success: true; data: ContactPayload }
  | { success: false; errors: Record<string, string> } {
  const result = contactSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".");
    if (key && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return { success: false, errors };
}
