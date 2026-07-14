import { cn } from "@/lib/utils/cn";

/**
 * Small pill that floats over a card's image — used for the course price
 * tag and the event date tag so both read as the same visual language.
 * Parent must be `position: relative`.
 */
export function FloatingTag({
  icon: Icon,
  children,
  className,
}: {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-pill bg-paper/95 px-3 py-1.5 text-[0.8rem] font-semibold text-roast shadow-card backdrop-blur-sm",
        className,
      )}
    >
      {Icon ? <Icon size={14} className="text-brand-orange" /> : null}
      {children}
    </span>
  );
}
