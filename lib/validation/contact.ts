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
