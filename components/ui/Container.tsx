import { cn } from "@/lib/utils/cn";

/** Max-width 1200px content column with 24px gutters (DESIGN §4). */
export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-300 px-6", className)}>
      {children}
    </Tag>
  );
}
