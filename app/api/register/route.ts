import { NextResponse } from "next/server";
import { validateRegistration } from "@/lib/validation/registration";

/** ~2MB binary ≈ 2.7MB base64 data URL. */
const MAX_PHOTO_LEN = 2_700_000;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON" },
      { status: 400 }
    );
  }

  const result = validateRegistration(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 }
    );
  }

  if (result.data.passportPhoto.length > MAX_PHOTO_LEN) {
    return NextResponse.json(
      { ok: false, errors: { passportPhoto: "Photo is too large" } },
      { status: 400 }
    );
  }

  const webhook = process.env.N8N_REGISTRATION_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, message: "Registration is not configured" },
      { status: 500 }
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
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not reach the registration service" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
