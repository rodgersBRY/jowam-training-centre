"use client";

import { useState } from "react";
import type { Course } from "@/lib/data/courses";
import { formatPrice } from "@/lib/data/courses";
import { formatInfo, type ClassFormat } from "@/lib/data/formats";
import { cn } from "@/lib/utils/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { InstallmentCalculator } from "@/components/interactive/InstallmentCalculator";

/**
 * Pricing block for a course. When the course offers an online format, a
 * segmented In-person / Online toggle switches the displayed format details,
 * the price, and the installment calculator. Otherwise it renders the
 * in-person block only. Lives inside the page's #pricing / data-pricing-section
 * wrapper (which cues the sticky WhatsApp pulse).
 */
export function CoursePricing({ course }: { course: Course }) {
  const hasOnline = Boolean(course.online);
  const [selected, setSelected] = useState<ClassFormat>("in-person");
  const format = hasOnline ? selected : "in-person";
  const info = formatInfo[format];
  const price = format === "online" ? course.online!.price : course.price;

  const options: ClassFormat[] = hasOnline
    ? ["in-person", "online"]
    : ["in-person"];

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <SectionHeading
          eyebrow="Investment"
          title="Transparent pricing"
          lead={`Choose how you learn. Every fee is published, and every format can be paid in full or across M-PESA installments.`}
        />

        {/* Format toggle — only when an online option exists */}
        {hasOnline && (
          <div
            role="radiogroup"
            aria-label="Class format"
            className="mt-6 inline-flex rounded-pill border border-line bg-paper p-1"
          >
            {options.map((f) => {
              const active = format === f;
              return (
                <button
                  key={f}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(f)}
                  className={cn(
                    "rounded-pill px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-150",
                    active
                      ? "bg-brand-orange text-white"
                      : "text-brand-brown hover:text-brand-orange",
                  )}
                >
                  {formatInfo[f].label}
                </button>
              );
            })}
          </div>
        )}

        <p className="mt-5 measure text-brand-brown">{info.blurb}</p>

        <ul className="mt-4 space-y-2 text-brand-brown">
          {info.whatsIncluded.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
          <li className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
              aria-hidden="true"
            />
            <span>
              <strong>{course.certificate}</strong> awarded upon successful
              completion of the course by{" "}
              <span>
                <strong>Jowam Coffee Training Centre</strong>
              </span>
            </span>
          </li>
        </ul>

        <div className="mt-8">
          <ButtonLink
            variant="primary"
            href={`/enroll?course=${course.slug}&format=${format}`}
          >
            Enroll {formatInfo[format].label.toLowerCase()} —{" "}
            {formatPrice(price)}
          </ButtonLink>
        </div>
      </div>

      <Card interactive className="p-6 md:p-8">
        <InstallmentCalculator price={price} />
      </Card>
    </div>
  );
}
