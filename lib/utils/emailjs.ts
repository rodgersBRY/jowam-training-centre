import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const EMAIL_TEMPLATES = {
  contact: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "",
};

export function sendEmail(templateId: string, params: Record<string, string>) {
  return emailjs.send(SERVICE_ID, templateId, params, {
    publicKey: PUBLIC_KEY,
  });
}
