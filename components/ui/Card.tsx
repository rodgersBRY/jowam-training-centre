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
        "rounded-card bg-paper border border-line overflow-hidden",
        interactive &&
          "shadow-card transition-transform duration-150 ease-brand hover:-translate-y-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
