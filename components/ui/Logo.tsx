import { cn } from "@/lib/utils/cn";

/**
 * Placeholder logo lockup built from brand tokens (DESIGN §1).
 * REPLACE with the client's three official SVG variants (full lockup,
 * reversed lockup, standalone "J" mark) when supplied.
 */

export function LogoMark({
  className,
  size = 40,
  reversed = false,
}: {
  className?: string;
  size?: number;
  reversed?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
    >
      <rect
        width="48"
        height="48"
        rx="12"
        fill={reversed ? "var(--color-paper)" : "var(--color-brand-orange)"}
      />
      {/* steam wisps */}
      <path
        d="M20 9c0-2 3-2 3-4M27 9c0-2 3-2 3-4"
        stroke={reversed ? "var(--color-brand-orange)" : "var(--color-paper)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <text
        x="24"
        y="35"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="28"
        fill={reversed ? "var(--color-brand-orange)" : "var(--color-paper)"}
      >
        J
      </text>
    </svg>
  );
}

export function Logo({
  className,
  reversed = false,
  markSize = 36,
}: {
  className?: string;
  reversed?: boolean;
  markSize?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={markSize} reversed={reversed} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold text-[1.05rem] tracking-tight",
            reversed ? "text-paper" : "text-brand-brown"
          )}
        >
          Jowam
        </span>
        <span
          className={cn(
            "text-[0.6rem] uppercase tracking-[0.18em] font-semibold",
            reversed ? "text-roast-text" : "text-brand-orange"
          )}
        >
          Coffee Training
        </span>
      </span>
    </span>
  );
}
