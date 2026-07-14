import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/data/images";
import { nextIntake } from "@/lib/data/site";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

export function HeroSection() {
  return (
    <section className="relative min-h-svh bg-roast flex items-end">
      {/* Full-bleed hero photo */}
      <Image
        src={cloudinaryUrl(images.heroPoster, { width: 1600, height: 1000 })}
        alt="Barista students practising espresso extraction at Jowam Coffee Training Centre"
        width={1600}
        height={1000}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Roast scrim overlay for text legibility */}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      {/* Hero content */}
      <Container className="relative z-10 pb-20 pt-36 md:pb-28 md:pt-40">
        {/* Intake pill — visible within first mobile screen */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-roast-text/30 bg-roast/40 px-4 py-2 backdrop-blur-sm">
          <span
            className="h-2 w-2 rounded-full bg-brand-orange"
            aria-hidden="true"
          />
          <span className="text-small font-semibold text-roast-text">
            Next intake: {nextIntake}
          </span>
        </div>

        <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.1] text-paper max-w-[18ch] text-wrap-balance">
          Professional Barista &amp; Coffee Roasting Training
        </h1>

        {/* Skills taught — keyword line */}
        <p className="mt-4 text-brand-orange font-semibold text-small">
          Espresso · Latte art · Manual brewing · Roasting · Cupping
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            variant="secondary"
            href="/courses"
            className="border-roast-text text-roast-text hover:border-paper hover:text-paper"
          >
            View courses
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
