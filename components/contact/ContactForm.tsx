"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation/contact";
import {
  sendEmail,
  EMAIL_TEMPLATES,
  emailjsConfigured,
} from "@/lib/utils/emailjs";
import { track, AnalyticsEvent } from "@/lib/utils/analytics";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<
  Record<"name" | "email" | "phone" | "subject" | "message", string>
>;

const inputCls =
  "w-full min-h-[48px] rounded-card border border-line bg-white px-3.5 text-[16px] text-roast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";
const labelCls = "block text-[0.9rem] font-semibold text-brand-brown mb-1.5";

/**
 * General "Send us a message" contact form (name / email / subject / message),
 * adopted from the previous site. Validated with zod and delivered via the
 * EmailJS contact template.
 */
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
      await sendEmail(EMAIL_TEMPLATES.contact, {
        from_name: parsed.data.name,
        from_email: parsed.data.email,
        from_phone: parsed.data.phone,
        subject: parsed.data.subject,
        message: parsed.data.message,
      });
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
        <p className="font-semibold text-roast">
          Message sent — thank you!
        </p>
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
        <label htmlFor="name" className={labelCls}>
          Name
        </label>
        <input
          id="name"
          name="name"
          className={inputCls}
          autoComplete="name"
          value={data.name ?? ""}
          onChange={(e) => set("name", e.target.value)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-[0.85rem] font-medium text-brand-orange">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email
        </label>
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
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-[0.85rem] font-medium text-brand-orange">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>
          Phone
        </label>
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
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1.5 text-[0.85rem] font-medium text-brand-orange">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className={labelCls}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          className={inputCls}
          value={data.subject ?? ""}
          onChange={(e) => set("subject", e.target.value)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1.5 text-[0.85rem] font-medium text-brand-orange">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputCls} min-h-[120px] py-3`}
          value={data.message ?? ""}
          onChange={(e) => set("message", e.target.value)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-[0.85rem] font-medium text-brand-orange">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-[0.85rem] font-medium text-brand-orange">
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
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
