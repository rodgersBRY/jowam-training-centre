"use client";

import { useRef, useState } from "react";
import { ContactPayload, contactSchema } from "@/lib/validation/contact";
import { track, AnalyticsEvent } from "@/lib/utils/analytics";
import { Button } from "@/components/ui/Button";
import { Field } from "../ui/InputField";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<string, string>>;

const inputCls =
  "w-full min-h-[48px] rounded-card border border-line bg-white px-3.5 text-[16px] text-roast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".");
        if (key && !errs[key]) errs[key] = issue.message;
      }
      
      setErrors(errs);
      const first = Object.keys(errs)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});

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
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              className={inputCls}
              autoComplete="name"
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
