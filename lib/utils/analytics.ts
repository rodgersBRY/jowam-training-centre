/**
 * Thin wrapper around Umami's tracker so call sites don't touch `window`
 * directly and everything is a no-op until the Umami script loads.
 *
 * Umami exposes a global `umami.track(eventName, data?)`. We also allow
 * declarative tracking via `data-umami-event` attributes on elements.
 */
type UmamiData = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: UmamiData) => void;
    };
  }
}

/** Fire a custom Umami event. Safe to call anywhere; no-ops server-side. */
export function track(event: string, data?: UmamiData): void {
  if (typeof window === "undefined") return;
  try {
    window.umami?.track(event, data);
  } catch {
    // analytics must never break the app
  }
}

/** Canonical event names — one place so the Umami dashboard stays consistent. */
export const AnalyticsEvent = {
  whatsappClick: "whatsapp-click",
  enrollClick: "enroll-click",
  courseView: "course-view",
  formatToggle: "course-format-toggle",
  contactSubmit: "contact-submit",
  registrationSubmit: "registration-submit",
  callClick: "phone-call-click",
} as const;
