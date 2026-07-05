import { cn } from "@/lib/utils/cn";

/**
 * Consistent section header: optional eyebrow (small caps meta), an H2, and
 * an optional lead paragraph constrained to a readable measure.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onRoast = false,
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  onRoast?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto",
        align === "center" && "flex flex-col items-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[var(--text-small)] font-semibold uppercase tracking-[0.12em] mb-3",
            onRoast
              ? "text-[var(--color-brand-orange)]"
              : "text-[var(--color-brand-orange)]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-[length:var(--text-h2)] font-bold leading-[1.1]",
          onRoast && "text-[var(--color-paper)]"
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-4 text-[length:var(--text-body)] measure",
            align === "center" && "mx-auto",
            onRoast
              ? "text-[var(--color-roast-text)]"
              : "text-[var(--color-brand-brown)]"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
