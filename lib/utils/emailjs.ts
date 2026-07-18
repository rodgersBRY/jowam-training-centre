import emailjs from "@emailjs/browser";

/** Shared EmailJS account config — same service/public key used by every template, browser or server. */
export const SERVICE_ID = process.env.EMAILJS_SERVICE_ID ?? "";
export const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const EMAIL_TEMPLATES = {
  contact: process.env.EMAILJS_CONTACT_TEMPLATE_ID ?? "",
  enrolAdmin: process.env.EMAILJS_ENROL_TEMPLATE_ID ?? "",
};

/** True when EmailJS is configured; used to disable the form gracefully. */
export const emailjsConfigured =
  Boolean(SERVICE_ID) &&
  Boolean(PUBLIC_KEY) &&
  (Boolean(EMAIL_TEMPLATES.contact) ||
  Boolean(EMAIL_TEMPLATES.enrolAdmin));

export function sendEmail(templateId: string, params: Record<string, string>) {
  return emailjs.send(SERVICE_ID, templateId, params, {
    publicKey: PUBLIC_KEY,
  });
}
