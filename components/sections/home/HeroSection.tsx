import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { images } from "@/lib/data/images";
import { nextIntake, whatsappLink } from "@/lib/data/site";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-[var(--color-roast)] flex items-end">
      {/* Full-bleed hero photo */}
      <Image
        src={cloudinaryUrl(images.heroPoster, { width: 1600, height: 1000 })}
        alt="Barista students practising espresso extraction at Jowam Coffee Training Centre in Nairobi CBD"
        width={1600}
        height={1000}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Roast scrim overlay for text legibility */}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      {/* Hero content */}
      <Container className="relative z-10 pb-16 pt-32 md:pb-24">
        {/* Intake pill — visible within first mobile screen */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-[999px] border border-[var(--color-roast-text)]/30 bg-[var(--color-roast)]/40 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--color-brand-orange)]" aria-hidden="true" />
          <span className="text-[var(--text-small)] font-semibold text-[var(--color-roast-text)]">
            Next intake: {nextIntake}
          </span>
        </div>

        <h1 className="text-[length:var(--text-hero)] font-bold leading-[var(--text-hero--line-height)] text-[var(--color-paper)] max-w-[15ch] text-wrap-balance">
          Barista &amp; Coffee Roasting Training in Nairobi CBD
        </h1>

        <p className="mt-4 max-w-[55ch] text-[var(--color-roast-text)] text-[length:var(--text-body)] leading-relaxed">
          Hands-on, professional training at Pension Towers. Monthly intakes, transparent pricing, and M-PESA installments — from zero to job-ready in five weeks.
        </p>

        {/* Price teaser — keeps key figures above the fold on mobile */}
        <p className="mt-3 text-[var(--color-brand-orange)] font-semibold text-[length:var(--text-small)]">
          From KES 25,000 &middot; Certificates on completion
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            variant="whatsapp"
            href={whatsappLink("Hi, I'd like to know more about your courses.")}
            external
          >
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            href="/courses"
            className="border-[var(--color-roast-text)] text-[var(--color-roast-text)] hover:border-[var(--color-paper)] hover:text-[var(--color-paper)]"
          >
            View courses
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
