import { NextRequest, NextResponse } from "next/server";
import { applySchema } from "@/lib/validation/apply";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const result = applySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.N8N_REGISTRATION_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[apply] N8N_REGISTRATION_WEBHOOK_URL is not set");
    return NextResponse.json({ ok: false, error: "Server misconfiguration" }, { status: 500 });
  }

  const n8nRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result.data),
  });

  if (!n8nRes.ok) {
    console.error("[apply] n8n webhook returned", n8nRes.status);
    return NextResponse.json({ ok: false, error: "Failed to process application" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
