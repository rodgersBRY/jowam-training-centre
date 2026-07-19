import { NextResponse } from "next/server";
import { validateRegistration } from "@/lib/validation/registration";
import { courses } from "@/lib/data/courses";
import {
  enrolNotifyConfigured,
  sendEnrolAdminNotification,
} from "@/lib/utils/emailjs-server";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON" },
      { status: 400 },
    );
  }

  const result = validateRegistration(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  const webhook = process.env.N8N_REGISTRATION_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, message: "Registration is not configured" },
      { status: 500 },
    );
  }

  const payload = {
    ...result.data,
    submittedAt: new Date().toISOString(),
    consentRecorded: true,
  };

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, message: "Could not record registration" },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not reach the registration service" },
      { status: 502 },
    );
  }

  if (enrolNotifyConfigured) {
    const course = courses.find((c) => c.slug === result.data.courseSlug);
    try {
      await sendEnrolAdminNotification({
        to_email: process.env.ENROL_ADMIN_EMAIL ?? "",
        applicant_name: `${result.data.surname} ${result.data.otherNames}`,
        applicant_phone: result.data.phone,
        applicant_email: result.data.email,
        course_title: course?.title ?? result.data.courseSlug,
        format: result.data.format,
        submitted_at: payload.submittedAt,
        sheet_url: process.env.REGISTRATION_SHEET_URL ?? "",
      });
    } catch {
      // Registration already recorded via webhook; email is best-effort only.
    }
  }

  return NextResponse.json({ ok: true });
}
