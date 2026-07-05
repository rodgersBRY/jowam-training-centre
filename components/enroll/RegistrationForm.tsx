"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { formatLabels, type ClassFormat } from "@/lib/data/formats";
import { track, AnalyticsEvent } from "@/lib/utils/analytics";
import { cn } from "@/lib/utils/cn";
import {
  registrationSchema,
  type RegistrationPayload,
} from "@/lib/validation/registration";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const labelCls = "block text-[0.9rem] font-semibold text-brand-brown mb-1.5";
const inputCls =
  "w-full min-h-[48px] rounded-card border border-line bg-white px-3.5 text-[16px] text-roast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-[0.85rem] font-medium text-brand-orange"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/** Compress an image file to a JPEG data URL, max ~800px on the long edge. */
function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 800;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas unavailable"));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const fieldset = "space-y-5 rounded-card border border-line p-5 md:p-6";
const legend = "px-2 font-display text-[1.05rem] font-semibold text-roast";

export function RegistrationForm({
  defaultCourse,
  defaultFormat = "in-person",
}: {
  defaultCourse?: string;
  defaultFormat?: ClassFormat;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [courseSlug, setCourseSlug] = useState(defaultCourse ?? "");
  const [format, setFormat] = useState<ClassFormat>(defaultFormat);
  const formRef = useRef<HTMLFormElement>(null);

  const onlineAvailable = Boolean(getCourseBySlug(courseSlug)?.online);
  // Force in-person when the chosen course has no online option.
  const effectiveFormat: ClassFormat = onlineAvailable ? format : "in-person";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      surname: fd.get("surname"),
      otherNames: fd.get("otherNames"),
      gender: fd.get("gender"),
      dateOfBirth: fd.get("dateOfBirth"),
      nationality: fd.get("nationality"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      idNumber: fd.get("idNumber"),
      educationLevel: fd.get("educationLevel"),
      courseSlug: fd.get("courseSlug"),
      format: effectiveFormat,
      emergencyContactNames: fd.get("emergencyContactNames"),
      emergencyRelationship: fd.get("emergencyRelationship"),
      emergencyPhone: fd.get("emergencyPhone"),
      consent: fd.get("consent") === "on",
      clientTimestamp: new Date().toISOString(),
    };

    const parsed = registrationSchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".");
        if (key && !errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      // focus first error
      const first = Object.keys(errs)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies RegistrationPayload),
      });
      if (!res.ok) throw new Error("Request failed");
      track(AnalyticsEvent.registrationSubmit, {
        course: parsed.data.courseSlug,
        format: parsed.data.format,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-line bg-paper p-8 text-center">
        <h2 className="text-(length:--text-h3) font-semibold text-roast">
          Registration received
        </h2>
        <p className="measure mx-auto mt-3 text-brand-brown">
          Thank you. Our admissions team will confirm your place and assign your
          registration number shortly. Please bring your ID or passport on your
          first day, when you&rsquo;ll sign the registration in person.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      <fieldset className={fieldset}>
        <legend className={legend}>1. Personal details</legend>
        <Field id="surname" label="Surname" error={errors.surname}>
          <input
            id="surname"
            name="surname"
            className={inputCls}
            autoComplete="family-name"
            aria-describedby={errors.surname ? "surname-error" : undefined}
          />
        </Field>
        <Field id="otherNames" label="Other names" error={errors.otherNames}>
          <input
            id="otherNames"
            name="otherNames"
            className={inputCls}
            autoComplete="given-name"
          />
        </Field>
        <Field id="gender" label="Gender" error={errors.gender}>
          <select
            id="gender"
            name="gender"
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </Field>
        <Field
          id="dateOfBirth"
          label="Date of birth"
          error={errors.dateOfBirth}
        >
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            className={inputCls}
          />
        </Field>
        <Field id="nationality" label="Nationality" error={errors.nationality}>
          <input
            id="nationality"
            name="nationality"
            defaultValue="Kenyan"
            className={inputCls}
          />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="07XX XXX XXX"
            className={inputCls}
            autoComplete="tel"
          />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className={inputCls}
            autoComplete="email"
          />
        </Field>
        <Field
          id="idNumber"
          label="ID / Passport number"
          error={errors.idNumber}
        >
          <input id="idNumber" name="idNumber" className={inputCls} />
        </Field>
      </fieldset>

      <fieldset className={fieldset}>
        <legend className={legend}>2. Education &amp; course</legend>
        <Field
          id="educationLevel"
          label="Highest education level"
          error={errors.educationLevel}
        >
          <select
            id="educationLevel"
            name="educationLevel"
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>KCPE</option>
            <option>KCSE</option>
            <option>Diploma</option>
            <option>Degree</option>
          </select>
        </Field>
        <Field id="courseSlug" label="Course" error={errors.courseSlug}>
          <select
            id="courseSlug"
            name="courseSlug"
            className={inputCls}
            value={courseSlug}
            onChange={(e) => setCourseSlug(e.target.value)}
          >
            <option value="" disabled>
              Select a course…
            </option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="format"
          label="Preferred class format"
          error={errors.format}
        >
          <div
            role="radiogroup"
            aria-label="Preferred class format"
            className="flex flex-col gap-2 sm:flex-row sm:gap-3"
          >
            {(["in-person", "online"] as ClassFormat[]).map((f) => {
              const disabled = f === "online" && !onlineAvailable;
              const checked = effectiveFormat === f;
              return (
                <label
                  key={f}
                  className={cn(
                    "flex flex-1 items-center gap-2 rounded-card border px-4 py-3",
                    checked ? "border-brand-orange" : "border-line",
                    disabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  )}
                >
                  <input
                    type="radio"
                    name="format"
                    value={f}
                    checked={checked}
                    disabled={disabled}
                    onChange={() => setFormat(f)}
                    className="h-4 w-4 accent-brand-orange"
                  />
                  <span className="font-medium text-brand-brown">
                    {formatLabels[f]}
                  </span>
                </label>
              );
            })}
          </div>
          {!onlineAvailable && (
            <p className="mt-1.5 text-small text-brand-brown/70">
              This course is available in person only.
            </p>
          )}
          {onlineAvailable && effectiveFormat === "online" && (
            <p className="mt-1.5 text-small text-brand-brown/70">
              Online includes the weekly in-person Saturday practicals.
            </p>
          )}
        </Field>
      </fieldset>

      <fieldset className={fieldset}>
        <legend className={legend}>3. Emergency contact &amp; photo</legend>
        <Field
          id="emergencyContactNames"
          label="Emergency contact names"
          error={errors.emergencyContactNames}
        >
          <input
            id="emergencyContactNames"
            name="emergencyContactNames"
            className={inputCls}
          />
        </Field>
        <Field
          id="emergencyRelationship"
          label="Relationship"
          error={errors.emergencyRelationship}
        >
          <input
            id="emergencyRelationship"
            name="emergencyRelationship"
            className={inputCls}
          />
        </Field>
        <Field
          id="emergencyPhone"
          label="Emergency contact phone"
          error={errors.emergencyPhone}
        >
          <input
            id="emergencyPhone"
            name="emergencyPhone"
            type="tel"
            inputMode="tel"
            placeholder="07XX XXX XXX"
            className={inputCls}
          />
        </Field>
      </fieldset>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 accent-brand-orange"
        />
        <label htmlFor="consent" className="text-[0.9rem] text-brand-brown">
          I agree to Jowam Coffee Training Centre collecting and processing my
          personal data as described in the{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-brand-orange underline"
          >
            Privacy Policy
          </Link>
          , in line with Kenya&rsquo;s Data Protection Act, 2019.
        </label>
      </div>
      {errors.consent && (
        <p
          role="alert"
          className="text-[0.85rem] font-medium text-brand-orange"
        >
          {errors.consent}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-card bg-brand-orange/10 p-3 text-[0.9rem] font-medium text-brand-orange"
        >
          Something went wrong submitting your registration. Please try again,
          or reach us on WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Submitting…" : "Submit registration"}
      </Button>
      <p className="text-center text-[0.8rem] text-brand-brown/70">
        Your registration number is assigned by our admissions team after
        submission. You&rsquo;ll sign in person on your first day.
      </p>
    </form>
  );
}
