import Link from "next/link";
import { ChevronIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.8rem] text-paper/75">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 ? (
                <ChevronIcon
                  size={12}
                  className="-rotate-90 shrink-0 text-paper/50"
                />
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={cn(isLast && "text-paper")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
