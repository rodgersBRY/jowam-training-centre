import Link from "next/link";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-cream/70">{site.tagline}</p>
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
