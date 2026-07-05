import Script from "next/script";

/**
 * Umami analytics loader. Renders nothing until both env vars are set, so the
 * app works locally without analytics. Once configured, Umami auto-tracks page
 * views (including SPA route changes) and any element with a `data-umami-event`
 * attribute; bespoke events are fired via `track()` in lib/utils/analytics.ts.
 *
 * Set in .env.local:
 *   NEXT_PUBLIC_UMAMI_SRC=https://<your-umami-host>/script.js
 *   NEXT_PUBLIC_UMAMI_WEBSITE_ID=<website-id>
 */
export function Umami() {
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!src || !websiteId) return null;

  return (
    <Script
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
      defer
    />
  );
}
