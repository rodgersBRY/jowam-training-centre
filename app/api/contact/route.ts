import { NextResponse } from "next/server";
import {
  contactNotifyConfigured,
  sendContactNotification,
} from "@/lib/utils/emailjs-server";
import { validateContactForm } from "@/lib/validation/contact";

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

  const result = validateContactForm(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  if (contactNotifyConfigured) {
    try {
      await sendContactNotification({
        to_email: process.env.ENROL_ADMIN_EMAIL ?? "",
        from_name: result.data.name,
        from_email: result.data.email,
        from_phone: result.data.phone,
        subject: result.data.subject,
        message: result.data.message,
      });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Could not send the email" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
