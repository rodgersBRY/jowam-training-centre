"use client";

import { useState } from "react";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/Button";
import {
  sendEmail,
  EMAIL_TEMPLATES,
  emailjsConfigured,
} from "@/lib/utils/emailjs";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full min-h-[48px] rounded-[12px] border border-[var(--color-line)] bg-white px-3.5 text-[16px] text-[var(--color-roast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-orange)]";
const labelCls =
  "block text-[0.9rem] font-semibold text-[var(--color-brand-brown)] mb-1.5";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const params = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      course: String(fd.get("course") ?? ""),
      message: `Enquiry from the contact form. Name: ${fd.get(
        "name",
      )}, Phone: ${fd.get("phone")}, Course of interest: ${fd.get("course")}.`,
    };

    if (!emailjsConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await sendEmail(EMAIL_TEMPLATES.contact, params);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[12px] border border-line bg-white p-6 text-center">
        <p className="font-semibold text-roast">
          Thanks — we&rsquo;ve got your enquiry.
        </p>
        <p className="mt-1 text-[0.9rem] text-brand-brown">
          We&rsquo;ll be in touch shortly. For a faster reply, message us on
          WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={labelCls}>
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className={inputCls}
          autoComplete="name"
        />
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
          required
          className={inputCls}
          placeholder="07XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="course" className={labelCls}>
          Course of interest
        </label>
        <select id="course" name="course" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="text-[0.85rem] font-medium text-brand-orange"
        >
          We couldn&rsquo;t send that just now. Please WhatsApp or call us
          instead.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
