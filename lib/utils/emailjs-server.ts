import { SERVICE_ID, PUBLIC_KEY, EMAIL_TEMPLATES } from "@/lib/utils/emailjs";

/**
 * Server-side EmailJS send (Node fetch to the REST API) — the browser SDK in
 * lib/utils/emailjs.ts can't send an accessToken, which the server needs
 * since there's no browser origin for EmailJS to trust. Shares account
 * config (service/public key/template id) with the browser helper.
 */
const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

const TEMPLATE_ID = EMAIL_TEMPLATES.enrolAdmin;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY ?? "";

export const enrolNotifyConfigured = Boolean(
  SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && PRIVATE_KEY
);

export async function sendEnrolAdminNotification(
  params: Record<string, string>
) {
  const res = await fetch(EMAILJS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      accessToken: PRIVATE_KEY,
      template_params: params,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`EmailJS send failed (${res.status}): ${detail}`);
  }
}
