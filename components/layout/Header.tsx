"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, nextIntake } from "@/lib/data/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled && "shadow-[0_2px_16px_rgb(36_27_21/0.06)]"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 md:h-16">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-brand-brown transition-colors hover:text-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Intake pill — persistent sitewide (DESIGN §6) */}
          <Link
            href="/enroll"
            className="hidden rounded-pill border border-brand-orange px-4 py-1.5 text-[0.8rem] font-semibold text-brand-orange transition-transform duration-150 hover:-translate-y-[1px] sm:inline-flex"
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
                  menuOpen && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-6 bg-roast transition-opacity duration-150",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-6 bg-roast transition-transform duration-150",
                  menuOpen && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-[1.05rem] font-medium text-brand-brown"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/enroll"
                className="mt-1 mb-3 inline-flex rounded-pill border border-brand-orange px-4 py-2 text-[0.85rem] font-semibold text-brand-orange"
                onClick={() => setMenuOpen(false)}
              >
                Next intake: {nextIntake}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
