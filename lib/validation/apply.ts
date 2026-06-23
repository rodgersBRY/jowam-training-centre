import { z } from "zod";

export const applySchema = z.object({
  // Personal
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "prefer-not-to-say"], {
    error: "Please select a gender",
  }),
  idNumber: z.string().min(1, "ID or Passport number is required"),
  // Contact
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  location: z.string().min(2, "Location is required"),
  // Course
  course: z.string().min(1, "Please select a course"),
  intakeMonth: z.string().min(1, "Please select an intake month"),
  // Background
  education: z.string().min(2, "Please describe your education level"),
  experience: z.string().optional(),
  // Emergency
  emergencyName: z.string().min(2, "Emergency contact name is required"),
  emergencyPhone: z.string().min(10, "Enter a valid emergency contact phone"),
  emergencyRelationship: z.string().min(2, "Relationship is required"),
});

export type ApplyData = z.infer<typeof applySchema>;
