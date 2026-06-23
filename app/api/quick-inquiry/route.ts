import { NextRequest, NextResponse } from "next/server";
import { quickInquirySchema } from "@/lib/validation/quick-inquiry";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const result = quickInquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, errors: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  console.log("[quick-inquiry]", result.data);
  // TODO: wire real delivery (e.g. Resend, database, CRM)

  return NextResponse.json({ ok: true });
}
