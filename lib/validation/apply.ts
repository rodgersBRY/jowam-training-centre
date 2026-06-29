import { z } from "zod";

export const applySchema = z.object({
  // Personal
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  otherNames: z.string().min(2, "Other names must be at least 2 characters"),
  gender: z.enum(["male", "female"], { error: "Please select a gender" }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nationality: z.string().min(2, "Nationality is required"),
  idNumber: z.string().min(1, "ID or Passport number is required"),
  // Contact
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  // Course
  course: z.string().min(1, "Please select a course"),
  intakeMonth: z.string().min(1, "Please select an intake month"),
  // Education
  education: z.enum(["kcpe", "kcse", "diploma", "degree"], {
    error: "Please select your education level",
  }),
  // Emergency contact
  emergencySurname: z.string().min(2, "Emergency contact surname is required"),
  emergencyOtherNames: z
    .string()
    .min(2, "Emergency contact other names are required"),
  emergencyRelationship: z.string().min(2, "Relationship is required"),
  emergencyPhone: z.string().min(10, "Enter a valid emergency contact phone"),
});

export type ApplyData = z.infer<typeof applySchema>;
