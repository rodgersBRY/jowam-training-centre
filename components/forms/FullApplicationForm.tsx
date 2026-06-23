"use client";

import { useState } from "react";
import { applySchema } from "@/lib/validation/apply";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Textarea } from "@/components/forms/Textarea";

type Status = "idle" | "loading" | "success" | "error";

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

const INTAKE_OPTIONS = [
  { value: "january", label: "January" },
  { value: "march", label: "March" },
  { value: "may", label: "May" },
  { value: "july", label: "July" },
  { value: "september", label: "September" },
  { value: "november", label: "November" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 border-b border-coffee/10 pb-2">
      <h2 className="text-lg font-bold text-coffee">{children}</h2>
    </div>
  );
}

export function FullApplicationForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = applySchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl bg-orange/10 p-10 text-center">
        <h2 className="text-2xl font-bold text-coffee">Application Received!</h2>
        <p className="mt-3 text-coffee/70">
          Thank you for applying to Jowam Coffee Training Centre. Our admissions team will review
          your application and contact you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl space-y-10">
      {/* Personal Information */}
      <section>
        <SectionTitle>Personal Information</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field label="Full Name" required error={errors.fullName}>
              <Input
                type="text"
                placeholder="As it appears on your ID"
                value={data.fullName ?? ""}
                onChange={(e) => set("fullName", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Date of Birth" required error={errors.dateOfBirth}>
            <Input
              type="date"
              value={data.dateOfBirth ?? ""}
              onChange={(e) => set("dateOfBirth", e.target.value)}
            />
          </Field>
          <Field label="Gender" required error={errors.gender}>
            <Select
              value={data.gender ?? ""}
              onChange={(e) => set("gender", e.target.value)}
              placeholder="Select…"
              options={GENDER_OPTIONS}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="ID / Passport Number" required error={errors.idNumber}>
              <Input
                type="text"
                placeholder="National ID or Passport number"
                value={data.idNumber ?? ""}
                onChange={(e) => set("idNumber", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <SectionTitle>Contact Information</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone" required error={errors.phone}>
            <Input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              value={data.phone ?? ""}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
          <Field label="Email" required error={errors.email}>
            <Input
              type="email"
              placeholder="you@example.com"
              value={data.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Location / Town" required error={errors.location}>
              <Input
                type="text"
                placeholder="e.g. Nairobi, Mombasa, Kisumu"
                value={data.location ?? ""}
                onChange={(e) => set("location", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section>
        <SectionTitle>Course Selection</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Course" required error={errors.course}>
            <Select
              value={data.course ?? ""}
              onChange={(e) => set("course", e.target.value)}
              placeholder="Select a course…"
              options={courses.map((c) => ({ value: c.slug, label: c.title }))}
            />
          </Field>
          <Field label="Preferred Intake Month" required error={errors.intakeMonth}>
            <Select
              value={data.intakeMonth ?? ""}
              onChange={(e) => set("intakeMonth", e.target.value)}
              placeholder="Select month…"
              options={INTAKE_OPTIONS}
            />
          </Field>
        </div>
      </section>

      {/* Background */}
      <section>
        <SectionTitle>Background</SectionTitle>
        <div className="space-y-4">
          <Field label="Highest Education Level" required error={errors.education}>
            <Input
              type="text"
              placeholder="e.g. Kenya Certificate of Secondary Education, Diploma…"
              value={data.education ?? ""}
              onChange={(e) => set("education", e.target.value)}
            />
          </Field>
          <Field label="Relevant Experience (optional)" error={errors.experience}>
            <Textarea
              placeholder="Any previous coffee, hospitality, or customer service experience…"
              value={data.experience ?? ""}
              onChange={(e) => set("experience", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Emergency Contact */}
      <section>
        <SectionTitle>Emergency Contact</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Contact Name" required error={errors.emergencyName}>
            <Input
              type="text"
              placeholder="Full name"
              value={data.emergencyName ?? ""}
              onChange={(e) => set("emergencyName", e.target.value)}
            />
          </Field>
          <Field label="Contact Phone" required error={errors.emergencyPhone}>
            <Input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              value={data.emergencyPhone ?? ""}
              onChange={(e) => set("emergencyPhone", e.target.value)}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Relationship" required error={errors.emergencyRelationship}>
              <Input
                type="text"
                placeholder="e.g. Parent, Spouse, Sibling"
                value={data.emergencyRelationship ?? ""}
                onChange={(e) => set("emergencyRelationship", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </section>

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-red-600">Please fix the errors above before submitting.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full justify-center">
        {status === "loading" ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
