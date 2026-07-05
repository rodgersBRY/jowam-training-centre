import type { FaqItem } from "@/lib/data/faq";
import { ChevronIcon } from "@/components/ui/icons";

/**
 * FAQ accordion built on native <details>/<summary> (DESIGN §6). Hairline
 * dividers, orange chevron rotation. No JavaScript required; multiple items
 * can be open. Pair with FAQPage schema on the page.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-[var(--color-roast)]">
              {item.question}
            </span>
            <ChevronIcon
              size={20}
              className="shrink-0 text-[var(--color-brand-orange)] transition-transform duration-[150ms] group-open:rotate-180"
            />
          </summary>
          <p className="measure pb-4 text-[var(--color-brand-brown)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
