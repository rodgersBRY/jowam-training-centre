"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up for headline stats. Accessible by design:
 * - Server-renders the final value (crawlable, correct with JS disabled).
 * - Only animates from 0 once the element scrolls into view, a single time.
 * - Fully skips the animation under prefers-reduced-motion.
 */
export function CountUp({
  value,
  suffix = "",
  className,
  durationMs = 1400,
}: {
  value: number;
  suffix?: string;
  className?: string;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // keep the final value, no animation

    // Start from zero; if the section is below the fold this is invisible.
    setDisplay(0);

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-KE")}
      {suffix}
    </span>
  );
}
