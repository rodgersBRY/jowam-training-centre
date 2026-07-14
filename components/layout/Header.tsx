"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site, nextIntake } from "@/lib/data/site";
import { courses } from "@/lib/data/courses";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { ChevronIcon } from "@/components/ui/icons";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [coursesExpandedMobile, setCoursesExpandedMobile] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
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

  // Close the courses dropdown on route change, outside click, or Escape.
  useEffect(() => {
    setCoursesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!coursesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!coursesRef.current?.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [coursesOpen]);

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
          {site.nav.map((item) =>
            item.href === "/courses" ? (
              <div
                key={item.href}
                ref={coursesRef}
                className="group relative flex items-center"
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-[0.95rem] font-medium transition-colors hover:text-brand-orange",
                    isActive(item.href)
                      ? "text-brand-orange"
                      : "text-brand-brown",
                  )}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-expanded={coursesOpen}
                  aria-controls="courses-dropdown"
                  aria-label="Show courses menu"
                  onClick={() => setCoursesOpen((v) => !v)}
                  className="ml-1 p-1 text-brand-brown transition-colors hover:text-brand-orange"
                >
                  <ChevronIcon
                    size={16}
                    className={cn(
                      "transition-transform duration-150",
                      "group-hover:rotate-180",
                      coursesOpen && "rotate-180",
                    )}
                  />
                </button>

                <div
                  id="courses-dropdown"
                  className={cn(
                    "absolute left-0 top-full z-20 mt-2 w-64 rounded-card border border-line bg-paper py-2 shadow-card",
                    "opacity-0 invisible translate-y-1 transition-all duration-150",
                    "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                    coursesOpen && "opacity-100 visible translate-y-0",
                  )}
                >
                  {courses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      className="block px-4 py-2 text-[0.9rem] font-medium text-brand-brown transition-colors hover:bg-roast/[0.03] hover:text-brand-orange"
                    >
                      {c.shortTitle}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-line pt-1">
                    <Link
                      href="/courses"
                      className="block px-4 py-2 text-[0.9rem] font-semibold text-brand-orange"
                    >
                      View all courses
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-[0.95rem] font-medium transition-colors hover:text-brand-orange",
                  isActive(item.href)
                    ? "text-brand-orange"
                    : "text-brand-brown",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
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
                <div className="flex items-center justify-between">
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
                  {item.href === "/courses" && (
                    <button
                      type="button"
                      aria-expanded={coursesExpandedMobile}
                      aria-label="Show courses submenu"
                      onClick={() => setCoursesExpandedMobile((v) => !v)}
                      className="p-2 text-brand-brown"
                    >
                      <ChevronIcon
                        size={16}
                        className={cn(
                          "transition-transform duration-150",
                          coursesExpandedMobile && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.href === "/courses" && coursesExpandedMobile && (
                  <ul className="mb-2 flex flex-col border-l-2 border-line pl-4">
                    {courses.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/courses/${c.slug}`}
                          className="block py-2 text-[0.95rem] text-brand-brown"
                          onClick={() => setMenuOpen(false)}
                        >
                          {c.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
