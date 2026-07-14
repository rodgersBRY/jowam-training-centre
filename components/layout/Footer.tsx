import Link from "next/link";
import { site } from "@/lib/data/site";
import { courses } from "@/lib/data/courses";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  socialIcons,
  MailIcon,
  AddressIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import Image from "next/image";

/**
 * Footer on --roast — the canonical on-site home for the NAP (DESIGN §6).
 */
export function Footer() {
  return (
    <footer className="bg-roast text-roast-text">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="bg-paper w-24 h-24 rounded-lg">
              <Image
                src="/logo.png"
                alt="Jowam Coffee Training Centre"
                width={5}
                height={5}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="measure mt-5 text-[0.95rem] text-roast-text/85">
              Premium hands-on barista and coffee roasting training in the heart
              of Nairobi. Weekly intakes, transparent pricing, real equipment.
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-white/15 text-roast-text transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Courses">
            <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand-orange">
              Courses
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-roast-text/85 transition-colors hover:text-white"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply-now"
                  className="text-roast-text/85 transition-colors hover:text-white"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand-orange">
              Visit &amp; contact
            </h2>
            <address className="mt-4 space-y-2.5 text-[0.95rem] not-italic text-roast-text/85">
              <p className="flex items-start">
                <AddressIcon />: {site.address.full}
              </p>

              {site.contact.phones.map((p) => (
                <p key={p.raw} className="flex items-center">
                  <PhoneIcon />
                  {`: `}
                  <a
                    href={`tel:+${p.raw}`}
                    className="transition-colors hover:text-white ml-1"
                  >
                    {p.display}
                  </a>
                </p>
              ))}
              <p className="flex items-center">
                <MailIcon />
                {`: `}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-white ml-1"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand-orange">
              Training Hours
            </h2>

            <div className="mt-5 text-[0.9rem] text-roast-text/70">
              {site.hours.map((h) => (
                <p key={h.days}>
                  <span className="text-roast-text">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.85rem] text-roast-text/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>

          <p>
            Developed &amp; Mantained by{" "}
            <a
              href={`https://wa.me/${site.developer.whatsapp}`}
              className="transition-colors hover:text-white underline underline-offset-1"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
