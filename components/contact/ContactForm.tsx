"use client";

import { useState } from "react";
import { ContactPayload, contactSchema } from "@/lib/validation/contact";
import {
  sendEmail,
  EMAIL_TEMPLATES,
  emailjsConfigured,
} from "@/lib/utils/emailjs";
import { track, AnalyticsEvent } from "@/lib/utils/analytics";
import { Button } from "@/components/ui/Button";
import { Field } from "../ui/InputField";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<
  Record<"name" | "email" | "phone" | "subject" | "message", string>
>;

const inputCls =
  "w-full min-h-[48px] rounded-card border border-line bg-white px-3.5 text-[16px] text-roast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";
const labelCls = "block text-[0.9rem] font-semibold text-brand-brown mb-1.5";

export function ContactForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    if (!emailjsConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies ContactPayload),
      });

      if (!res.ok) throw new Error("Request failed");

      track(AnalyticsEvent.contactSubmit);
      setStatus("sent");
      setData({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-line bg-white p-6 text-center">
        <p className="font-semibold text-roast">Message sent. thank you!</p>
        <p className="mt-1 text-[0.9rem] text-brand-brown">
          We&rsquo;ll reply within one business day. For a faster response,
          message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              className={inputCls}
              autoComplete="name"
              value={data.name ?? ""}
              onChange={(e) => set("name", e.target.value)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </Field>

          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              className={inputCls}
              autoComplete="email"
              value={data.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </Field>
        </div>
      </div>

      <div>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            className={inputCls}
            autoComplete="tel"
            value={data.phone ?? ""}
            onChange={(e) => set("phone", e.target.value)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
      </div>

      <div>
        <Field id="subject" label="Subject" error={errors.subject}>
          <input
            id="subject"
            name="subject"
            className={inputCls}
            value={data.subject ?? ""}
            onChange={(e) => set("subject", e.target.value)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
        </Field>
      </div>

      <div>
        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputCls} min-h-30 py-3`}
            value={data.message ?? ""}
            onChange={(e) => set("message", e.target.value)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
        </Field>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="text-[0.85rem] font-medium text-brand-orange"
        >
          Something went wrong sending your message. Please try again, or reach
          us on WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending…" : "Send my Enquiry"}
      </Button>
    </form>
  );
}
