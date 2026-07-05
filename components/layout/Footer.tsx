import Link from "next/link";
import { site } from "@/lib/data/site";
import { courses } from "@/lib/data/courses";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { socialIcons } from "@/components/ui/icons";

/**
 * Footer on --roast — the canonical on-site home for the NAP (DESIGN §6).
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-roast)] text-[var(--color-roast-text)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo reversed />
            <p className="measure mt-5 text-[0.95rem] text-[var(--color-roast-text)]/85">
              Premium hands-on barista and coffee roasting training in the heart
              of Nairobi CBD. Monthly intakes, transparent pricing, real
              equipment.
            </p>
            <div className="mt-6 flex gap-3">
              {site.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[999px] border border-white/15 text-[var(--color-roast-text)] transition-colors hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Courses">
            <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-orange)]">
              Courses
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-[var(--color-roast-text)]/85 transition-colors hover:text-white"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/enroll"
                  className="text-[var(--color-roast-text)]/85 transition-colors hover:text-white"
                >
                  Enroll
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-orange)]">
              Visit &amp; contact
            </h2>
            <address className="mt-4 space-y-2.5 text-[0.95rem] not-italic text-[var(--color-roast-text)]/85">
              <p>{site.address.full}</p>
              {site.contact.phones.map((p) => (
                <p key={p.raw}>
                  <a
                    href={`tel:+${p.raw}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.display}
                  </a>
                </p>
              ))}
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
            <div className="mt-5 text-[0.9rem] text-[var(--color-roast-text)]/70">
              {site.hours.map((h) => (
                <p key={h.days}>
                  <span className="text-[var(--color-roast-text)]">
                    {h.days}:
                  </span>{" "}
                  {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.85rem] text-[var(--color-roast-text)]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
