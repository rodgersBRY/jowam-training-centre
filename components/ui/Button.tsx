import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold " +
  "transition-transform duration-150 ease-brand " +
  "active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-brand-orange min-h-[44px] px-6 py-3 text-[18px]";

const variants: Record<Variant, string> = {
  // Text on orange is white, 18px/600 (DESIGN §2 contrast rules).
  primary:
    "bg-brand-orange text-white hover:-translate-y-[2px]",
  // Orange outline secondary CTA.
  secondary:
    "border-2 border-brand-orange text-brand-orange " +
    "bg-transparent hover:-translate-y-[2px]",
  // WhatsApp green — reserved (DESIGN §2).
  whatsapp: "bg-whatsapp text-white hover:-translate-y-[2px]",
  ghost:
    "text-brand-orange px-0 py-0 min-h-0 hover:-translate-y-[1px]",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  external,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
