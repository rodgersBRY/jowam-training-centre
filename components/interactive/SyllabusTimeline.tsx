"use client";

import { useEffect, useRef, useState } from "react";
import type { SyllabusWeek } from "@/lib/data/courses";
import { ChevronIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";

/**
 * The signature element (DESIGN §6). Semantic ordered list of weeks with
 * disclosure buttons — fully crawlable and keyboard-operable. Week 1 open by
 * default; one open at a time. On first viewport entry the markers pop in
 * sequentially (transform/opacity only, once). Content is visible by default;
 * JS only adds the reveal.
 */
export function SyllabusTimeline({ weeks }: { weeks: SyllabusWeek[] }) {
  const [open, setOpen] = useState(weeks[0]?.week ?? 1);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stays visible; no animation
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className="relative flex flex-col gap-3 md:flex-row md:gap-0"
      aria-label="Week-by-week syllabus"
    >
      {weeks.map((wk, i) => {
        const isOpen = open === wk.week;
        return (
          <li
            key={wk.week}
            className="relative md:flex-1"
            style={
              revealed
                ? {
                    animation: `timeline-pop var(--dur-reveal) var(--ease-brand) both`,
                    animationDelay: `${i * 120}ms`,
                  }
                : undefined
            }
          >
            {/* connecting line on desktop */}
            <span
              aria-hidden="true"
              className="absolute left-3.75 top-8 hidden h-full w-px bg-roast/15 md:left-0 md:top-3.75 md:h-px md:w-full"
            />
            <div className="md:pr-6">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`week-panel-${wk.week}`}
                onClick={() => setOpen(isOpen ? -1 : wk.week)}
                className="group flex w-full items-center gap-3 text-left md:flex-col md:items-start"
              >
                <span
                  className={cn(
                    "relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-bold transition-colors",
                    isOpen
                      ? "bg-brand-orange text-white"
                      : "bg-roast/10 text-roast group-hover:bg-brand-orange/70 group-hover:text-white"
                  )}
                >
                  {wk.week}
                </span>
                <span className="flex items-center gap-2 md:mt-3">
                  <span className="font-display text-[1.05rem] font-semibold text-roast">
                    {wk.title}
                  </span>
                  <ChevronIcon
                    size={16}
                    className={cn(
                      "text-brand-orange transition-transform duration-150 md:hidden",
                      isOpen && "rotate-180"
                    )}
                  />
                </span>
              </button>
            </div>

            <div
              id={`week-panel-${wk.week}`}
              hidden={!isOpen}
              className="mt-3 md:pr-6"
            >
              <ul className="space-y-1.5 border-l-2 border-brand-orange/40 pl-4 md:border-l-0 md:pl-0">
                {wk.modules.map((m) => (
                  <li
                    key={m}
                    className="text-[0.95rem] text-brand-brown/90"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}

      <style>{`
        @keyframes timeline-pop {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </ol>
  );
}
