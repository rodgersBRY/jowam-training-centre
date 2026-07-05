import type { FaqItem } from "@/lib/data/faq";
import { ChevronIcon } from "@/components/ui/icons";

/**
 * FAQ accordion built on native <details>/<summary> (DESIGN §6). Hairline
 * dividers, orange chevron rotation. No JavaScript required; multiple items
 * can be open. Pair with FAQPage schema on the page.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.05rem] font-semibold text-roast">
              {item.question}
            </span>
            <ChevronIcon
              size={20}
              className="shrink-0 text-brand-orange transition-transform duration-150 group-open:rotate-180"
            />
          </summary>
          <p className="measure pb-4 text-brand-brown">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
