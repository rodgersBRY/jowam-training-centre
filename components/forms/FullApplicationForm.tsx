"use client";

import { useState } from "react";
import { applySchema } from "@/lib/validation/apply";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";

type Status = "idle" | "loading" | "success" | "error";

const EDUCATION_OPTIONS = [
  { value: "kcpe", label: "Grade 8 – KCPE" },
  { value: "kcse", label: "O-Level – KCSE" },
  { value: "diploma", label: "Diploma" },
  { value: "degree", label: "Degree" },
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

      {/* Personal Details */}
      <section>
        <SectionTitle>Personal Details</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Surname" required error={errors.surname}>
            <Input
              type="text"
              placeholder="Family name"
              value={data.surname ?? ""}
              onChange={(e) => set("surname", e.target.value)}
            />
          </Field>
          <Field label="Other Names" required error={errors.otherNames}>
            <Input
              type="text"
              placeholder="First and middle names"
              value={data.otherNames ?? ""}
              onChange={(e) => set("otherNames", e.target.value)}
            />
          </Field>
          <Field label="Gender" required error={errors.gender}>
            <div className="flex gap-6 pt-1">
              {(["male", "female"] as const).map((g) => (
                <label key={g} className="flex cursor-pointer items-center gap-2 text-sm text-coffee">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={data.gender === g}
                    onChange={() => set("gender", g)}
                    className="accent-orange"
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Date of Birth" required error={errors.dateOfBirth}>
            <Input
              type="date"
              value={data.dateOfBirth ?? ""}
              onChange={(e) => set("dateOfBirth", e.target.value)}
            />
          </Field>
          <Field label="Nationality" required error={errors.nationality}>
            <Input
              type="text"
              placeholder="e.g. Kenyan"
              value={data.nationality ?? ""}
              onChange={(e) => set("nationality", e.target.value)}
            />
          </Field>
          <Field label="ID / Passport Number" required error={errors.idNumber}>
            <Input
              type="text"
              placeholder="National ID or Passport number"
              value={data.idNumber ?? ""}
              onChange={(e) => set("idNumber", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Contact Details */}
      <section>
        <SectionTitle>Contact Details</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone Number" required error={errors.phone}>
            <Input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              value={data.phone ?? ""}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
          <Field label="Email Address" required error={errors.email}>
            <Input
              type="email"
              placeholder="you@example.com"
              value={data.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle>Education Level</SectionTitle>
        <Field label="Highest qualification" required error={errors.education}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {EDUCATION_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center justify-center rounded-lg border p-3 text-center text-sm font-medium transition-colors ${
                  data.education === opt.value
                    ? "border-orange bg-orange/10 text-coffee"
                    : "border-coffee/20 bg-white text-coffee/70 hover:border-orange/50"
                }`}
              >
                <input
                  type="radio"
                  name="education"
                  value={opt.value}
                  checked={data.education === opt.value}
                  onChange={() => set("education", opt.value)}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </Field>
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

      {/* Emergency Contact */}
      <section>
        <SectionTitle>Emergency Contact</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Surname" required error={errors.emergencySurname}>
            <Input
              type="text"
              placeholder="Family name"
              value={data.emergencySurname ?? ""}
              onChange={(e) => set("emergencySurname", e.target.value)}
            />
          </Field>
          <Field label="Other Names" required error={errors.emergencyOtherNames}>
            <Input
              type="text"
              placeholder="First and middle names"
              value={data.emergencyOtherNames ?? ""}
              onChange={(e) => set("emergencyOtherNames", e.target.value)}
            />
          </Field>
          <Field label="Relation" required error={errors.emergencyRelationship}>
            <Input
              type="text"
              placeholder="e.g. Parent, Spouse, Sibling"
              value={data.emergencyRelationship ?? ""}
              onChange={(e) => set("emergencyRelationship", e.target.value)}
            />
          </Field>
          <Field label="Phone Number" required error={errors.emergencyPhone}>
            <Input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              value={data.emergencyPhone ?? ""}
              onChange={(e) => set("emergencyPhone", e.target.value)}
            />
          </Field>
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
