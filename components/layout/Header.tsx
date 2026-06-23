"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement banner — always bg-coffee */}
      <div className="bg-coffee py-2 text-center text-xs font-medium text-cream">
        <Container>
          Intake Ongoing &mdash; Call us now:{" "}
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            className="font-bold underline underline-offset-2 transition-colors hover:text-orange"
          >
            {site.contact.phone}
          </a>
        </Container>
      </div>

      {/* Navbar — background transitions on scroll */}
      <div
        className={cn(
          "transition-colors duration-300",
          isHome && !scrolled ? "bg-transparent" : "bg-cream/95 shadow-sm backdrop-blur",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt={site.name} width={36} height={36} className="rounded-full" />
            <span className={cn("text-sm font-bold transition-colors", isHome && !scrolled ? "text-cream" : "text-coffee")}>
              {site.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange",
                  isHome && !scrolled ? "text-cream/90" : "text-coffee/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={cn(
                    "transition-colors hover:text-orange",
                    isHome && !scrolled ? "text-cream/70" : "text-coffee/60",
                  )}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
            <Button href="/apply" className="hidden md:inline-flex">
              Apply
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
