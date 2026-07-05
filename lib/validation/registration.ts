import { z } from "zod";
import { courses } from "@/lib/data/courses";

const courseSlugs = courses.map((c) => c.slug) as [string, ...string[]];

/** Accepts 07XXXXXXXX, 01XXXXXXXX, +2547XXXXXXXX, +2541XXXXXXXX */
const kenyanPhone = z
  .string()
  .regex(
    /^(\+?254[17]\d{8}|0[17]\d{8})$/,
    "Enter a phone number starting with 07, 01, or +254"
  );

export const registrationSchema = z.object({
  // Step 1 — Personal details
  surname: z.string().min(1, "Surname is required"),
  otherNames: z.string().min(1, "Other names are required"),
  gender: z.enum(["Male", "Female"], {
    message: "Please select your gender",
  }),
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date"),
  nationality: z.string().min(1, "Nationality is required"),
  phone: kenyanPhone,
  email: z.string().email("Enter a valid email address"),
  idNumber: z.string().min(1, "ID or passport number is required"),

  // Step 2 — Education & course
  educationLevel: z.enum(["KCPE", "KCSE", "Diploma", "Degree"], {
    message: "Please select your education level",
  }),
  courseSlug: z.enum(courseSlugs, {
    message: "Please select a course",
  }),
  format: z.enum(["in-person", "online"], {
    message: "Please choose a class format",
  }),

  // Step 3 — Emergency contact & photo
  emergencyContactNames: z
    .string()
    .min(1, "Emergency contact name is required"),
  emergencyRelationship: z.string().min(1, "Relationship is required"),
  emergencyPhone: kenyanPhone.describe("Emergency contact phone"),

  /** JPEG data URL, compressed client-side. Max ~2.7MB data URL length enforced in API route. */
  passportPhoto: z
    .string()
    .startsWith("data:image/", "Photo must be an image")
    .min(1, "Passport photo is required"),

  /** Must be true — user must tick the consent checkbox. */
  consent: z.literal(true, {
    message: "You must agree to the privacy policy to continue",
  }),

  /** ISO timestamp, set on the client just before POST. */
  clientTimestamp: z.string().optional(),
});

export type RegistrationPayload = z.infer<typeof registrationSchema>;

/** Validate a partial payload; returns errors keyed by field name. */
export function validateRegistration(data: unknown):
  | { success: true; data: RegistrationPayload }
  | { success: false; errors: Record<string, string> } {
  const result = registrationSchema.safeParse(data);
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
