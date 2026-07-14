"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site, nextIntake } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // A nav item is active on its own route and any nested route beneath it.
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper border-b border-line",
        "transition-shadow duration-150",
        scrolled && "shadow-[0_2px_16px_rgb(36_27_21/0.06)]",
      )}
    >
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src="/logo.png"
            alt="Jowam Coffee Training Centre"
            width={60}
            height={60}
            className="h-full w-full object-cover transition-transform duration-400 ease-brand group-hover:scale-[1.03]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-[0.95rem] font-medium transition-colors hover:text-brand-orange",
                isActive(item.href) ? "text-brand-orange" : "text-brand-brown",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Intake pill — persistent sitewide (DESIGN §6) */}
          <Link
            href="/apply-now"
            className="hidden rounded-pill border border-brand-orange px-4 py-1.5 text-[0.8rem] font-semibold text-brand-orange transition-transform duration-150 hover:-translate-y-px sm:inline-flex"
          >
            Next intake: {nextIntake}
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-6 bg-roast transition-transform duration-150",
                  menuOpen && "translate-y-1.75 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.75 h-0.5 w-6 bg-roast transition-opacity duration-150",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3.5 h-0.5 w-6 bg-roast transition-transform duration-150",
                  menuOpen && "-translate-y-1.75 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-paper md:hidden"
        >
          <Container as="ul" className="flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block py-3 text-[1.05rem] font-medium",
                    isActive(item.href)
                      ? "text-brand-orange"
                      : "text-brand-brown",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/apply-now"
                className="mt-1 mb-3 inline-flex rounded-pill border border-brand-orange px-4 py-2 text-[0.85rem] font-semibold text-brand-orange"
                onClick={() => setMenuOpen(false)}
              >
                Next intake: {nextIntake}
              </Link>
            </li>
          </Container>
        </nav>
      )}
    </header>
  );
}
