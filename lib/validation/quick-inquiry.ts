import { z } from "zod";

export const quickInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address").or(z.literal("")).optional(),
  courseInterest: z.string().min(1, "Please select a course"),
});

export type QuickInquiryData = z.infer<typeof quickInquirySchema>;
