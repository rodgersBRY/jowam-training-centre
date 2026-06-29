"use client";

import { useState } from "react";
import { quickInquirySchema } from "@/lib/validation/quick-inquiry";
import { courses } from "@/lib/data/courses";
import { sendEmail, EMAIL_TEMPLATES } from "@/lib/utils/emailjs";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";

type Status = "idle" | "loading" | "success" | "error";

export function QuickInquiryForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = quickInquirySchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      await sendEmail(EMAIL_TEMPLATES.inquiry, {
        from_name: result.data.name,
        from_phone: result.data.phone,
        from_email: result.data.email ?? "",
        course_interest: result.data.courseInterest,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-orange/10 p-6 text-center">
        <p className="font-semibold text-coffee">Thanks! We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field label="Name" required error={errors.name}>
        <Input
          type="text"
          placeholder="Your full name"
          value={data.name ?? ""}
          onChange={(e) => set("name", e.target.value)}
        />
      </Field>
      <Field label="Phone" required error={errors.phone}>
        <Input
          type="tel"
          placeholder="+254 7XX XXX XXX"
          value={data.phone ?? ""}
          onChange={(e) => set("phone", e.target.value)}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <Input
          type="email"
          placeholder="you@example.com (optional)"
          value={data.email ?? ""}
          onChange={(e) => set("email", e.target.value)}
        />
      </Field>
      <Field label="Course Interest" required error={errors.courseInterest}>
        <Select
          value={data.courseInterest ?? ""}
          onChange={(e) => set("courseInterest", e.target.value)}
          placeholder="Select a course…"
          options={courses.map((c) => ({ value: c.slug, label: c.title }))}
        />
      </Field>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full justify-center">
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
