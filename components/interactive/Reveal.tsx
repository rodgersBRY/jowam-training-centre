"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Fades content in as it scrolls into view. Fully inert under
 * prefers-reduced-motion (globals.css forces the visible state), and reveals
 * immediately if IntersectionObserver is unavailable so content is never
 * left hidden.
 *
 * `variant="fade"` skips the upward translate — use it around full-bleed
 * children (e.g. the photo marquee) so no transform containing-block is
 * introduced.
 */
export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "fade";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Anything already in (or just below) the viewport on mount reveals right
    // away — this both animates above-the-fold content on load and guarantees
    // it can never get stuck hidden if the observer never fires.
    if (el.getBoundingClientRect().top < window.innerHeight * 1.1) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      // threshold 0 so tall blocks fire the moment they enter; the negative
      // bottom margin just holds the reveal until the element is ~72px in.
      { threshold: 0, rootMargin: "0px 0px -72px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        variant === "fade" && "reveal-fade",
        visible && "is-visible",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
