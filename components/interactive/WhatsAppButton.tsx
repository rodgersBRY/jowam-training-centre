"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";

/**
 * Sticky WhatsApp CTA (DESIGN §6). Bottom-right on mobile, above the thumb
 * fold. Pulses once when a pricing section (any element with
 * data-pricing-section) enters view, then stays still. Fires a GA4 event on
 * tap when gtag is present.
 */
export function WhatsAppButton({
  message,
  label = "Chat with us",
}: {
  message?: string;
  label?: string;
}) {
  const [pulse, setPulse] = useState(false);
  const pulsed = useRef(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const targets = document.querySelectorAll("[data-pricing-section]");
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !pulsed.current) {
            pulsed.current = true;
            setPulse(true);
            window.setTimeout(() => setPulse(false), 700);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const onClick = () => {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
    };
    w.gtag?.("event", "whatsapp_click", { message });
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-pill bg-whatsapp px-4 py-3 font-semibold text-white shadow-[0_8px_30px_rgb(36_27_21/0.18)]",
        "min-h-11 transition-transform duration-150 ease-brand hover:-translate-y-0.5 active:scale-[0.98]",
        pulse && "wa-pulse"
      )}
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">{label}</span>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .wa-pulse { animation: wa-pulse 700ms var(--ease-brand) 1; }
          @keyframes wa-pulse {
            0%,100% { transform: scale(1); }
            35%     { transform: scale(1.12); }
          }
        }
      `}</style>
    </a>
  );
}
