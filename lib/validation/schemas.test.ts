import { describe, it, expect } from "vitest";
import { quickInquirySchema } from "@/lib/validation/quick-inquiry";
import { contactSchema } from "@/lib/validation/contact";
import { applySchema } from "@/lib/validation/apply";

describe("quickInquirySchema", () => {
  it("accepts valid required fields (no email)", () => {
    const result = quickInquirySchema.safeParse({
      name: "Jane Doe",
      phone: "+254712345678",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(true);
  });

  it("rejects name shorter than 2 chars", () => {
    const result = quickInquirySchema.safeParse({
      name: "A",
      phone: "+254712345678",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("name");
    }
  });

  it("rejects missing phone", () => {
    const result = quickInquirySchema.safeParse({
      name: "Jane Doe",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((e) => e.path[0]);
      expect(paths).toContain("phone");
    }
  });

  it("accepts valid email when provided", () => {
    const result = quickInquirySchema.safeParse({
      name: "Jane Doe",
      phone: "+254712345678",
      email: "jane@example.com",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(true);
  });

  it("accepts empty string for optional email field", () => {
    const result = quickInquirySchema.safeParse({
      name: "Jane Doe",
      phone: "+254712345678",
      email: "",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(true);
  });

  it("rejects malformed email", () => {
    const result = quickInquirySchema.safeParse({
      name: "Jane Doe",
      phone: "+254712345678",
      email: "not-an-email",
      courseInterest: "barista-fundamentals",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("email");
    }
  });
});

describe("contactSchema", () => {
  const valid = {
    name: "Jane Doe",
    email: "jane@example.com",
    subject: "Inquiry",
    message: "I would like to know more about your courses.",
  };

  it("accepts valid data", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({ ...valid, email: "bad" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("email");
    }
  });

  it("rejects message shorter than 10 chars", () => {
    const result = contactSchema.safeParse({ ...valid, message: "Short" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("message");
    }
  });

  it("rejects short subject", () => {
    const result = contactSchema.safeParse({ ...valid, subject: "Hi" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("subject");
    }
  });
});

describe("applySchema", () => {
  const valid = {
    surname: "Doe",
    otherNames: "Jane Mary",
    gender: "female",
    dateOfBirth: "1995-06-15",
    nationality: "Kenyan",
    idNumber: "12345678",
    phone: "+254712345678",
    email: "jane@example.com",
    course: "barista-fundamentals",
    intakeMonth: "january",
    education: "diploma",
    emergencySurname: "Doe",
    emergencyOtherNames: "John",
    emergencyRelationship: "Sibling",
    emergencyPhone: "+254723456789",
  };

  it("accepts a valid full application", () => {
    expect(applySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects invalid gender value", () => {
    const result = applySchema.safeParse({ ...valid, gender: "prefer-not-to-say" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("gender");
    }
  });

  it("rejects invalid education value", () => {
    const result = applySchema.safeParse({ ...valid, education: "phd" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("education");
    }
  });

  it("accepts all valid education levels", () => {
    for (const level of ["kcpe", "kcse", "diploma", "degree"]) {
      expect(applySchema.safeParse({ ...valid, education: level }).success).toBe(true);
    }
  });

  it("rejects missing required fields", () => {
    const result = applySchema.safeParse({ surname: "Doe" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((e) => String(e.path[0]));
      expect(paths).toContain("phone");
      expect(paths).toContain("email");
      expect(paths).toContain("course");
      expect(paths).toContain("emergencySurname");
    }
  });

  it("rejects invalid email in application", () => {
    const result = applySchema.safeParse({ ...valid, email: "not-valid" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("email");
    }
  });
});
