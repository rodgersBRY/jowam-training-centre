import Link from "next/link";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-cream/70">{site.tagline}</p>
          <div className="mt-4 flex gap-3">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-cream/50 transition-colors hover:text-orange"
              >
                {icons[s.icon]}
              </a>
            ))}
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-cream/70 hover:text-orange">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-cream/70">
          <p>{site.contact.location}</p>
          <p className="mt-1">{site.contact.phone}</p>
          <p className="mt-1">{site.contact.email}</p>
        </div>
      </Container>
      <Container className="border-t border-cream/10 py-6 text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </Container>
    </footer>
  );
}
