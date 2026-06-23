"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation/contact";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/forms/Field";
import { Input } from "@/components/forms/Input";
import { Textarea } from "@/components/forms/Textarea";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(data);
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-orange/10 p-6 text-center">
        <p className="font-semibold text-coffee">
          Message sent! We will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field label="Name" required error={errors.name}>
        <Input
          type="text"
          placeholder="Your name"
          value={data.name ?? ""}
          onChange={(e) => set("name", e.target.value)}
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
      <Field label="Subject" required error={errors.subject}>
        <Input
          type="text"
          placeholder="What is this about?"
          value={data.subject ?? ""}
          onChange={(e) => set("subject", e.target.value)}
        />
      </Field>
      <Field label="Message" required error={errors.message}>
        <Textarea
          placeholder="Your message…"
          value={data.message ?? ""}
          onChange={(e) => set("message", e.target.value)}
        />
      </Field>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full justify-center">
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
