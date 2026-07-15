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
      <div className="relative z-10 pb-20 md:pb-28 pl-20 md:pl-28 w-full">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.1] text-paper max-w-[28ch] text-wrap-balance">
          Kenya's Home of Professional Coffee Training
        </h1>

        {/* Skills taught — keyword line */}
        <p className="mt-4 text-brand-orange font-semibold text-small">
          Learn Coffee The Way Proffesionals Do.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            variant="secondary"
            href="/contact"
            className="border-roast-text text-roast-text hover:border-paper hover:text-paper"
          >
            Talk to an Advisor
          </ButtonLink>

          <ButtonLink
            variant="primary"
            href="/courses"
            className="border-roast-text text-roast-text hover:border-paper hover:text-paper"
          >
            Explore Our courses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
