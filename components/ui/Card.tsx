import { cn } from "@/lib/utils/cn";

/** Paper card, 12px radius, one soft elevation on interactive cards (DESIGN §4). */
export function Card({
  className,
  children,
  interactive = false,
}: {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[12px] bg-[var(--color-paper)] border border-[var(--color-line)] overflow-hidden",
        interactive &&
          "shadow-[0_8px_30px_rgb(36_27_21/0.08)] transition-transform duration-[150ms] ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
