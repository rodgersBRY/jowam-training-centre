/** Shared EmailJS account config — same service/public key used by every template. Sends happen server-side only (see emailjs-server.ts). */
export const SERVICE_ID = process.env.EMAILJS_SERVICE_ID ?? "";
export const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const EMAIL_TEMPLATES = {
  contact: process.env.EMAILJS_CONTACT_TEMPLATE_ID ?? "",
  enrolAdmin: process.env.EMAILJS_ENROL_TEMPLATE_ID ?? "",
};
