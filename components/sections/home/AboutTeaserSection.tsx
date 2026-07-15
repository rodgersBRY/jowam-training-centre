import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/interactive/Reveal";
import { about } from "@/lib/data/about";
import { images } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

/**
 * The emotional "why we do this" beat. A parallax training-floor photo sits
 * behind a roast scrim so the section reads as one dark, atmospheric band
 * amid the otherwise light homepage.
 */
export function AboutTeaserSection() {
  const bg = cloudinaryUrl(images.saturdayPractical, {
    width: 1800,
    height: 1000,
  });

  return (
    <section
      className="parallax-band relative section-y"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-roast/85" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            onRoast
            eyebrow="Where Passion Became Purpose"
            title=""
            align="center"
          />
          <p className="mt-6 mx-auto max-w-[65ch] text-center text-(length:--text-body) leading-[1.65] text-roast-text">
            {about.mission}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {about.values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 80}
              className="rounded-card border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <h3 className="text-h3 font-bold text-paper">{value.title}</h3>
              <p className="mt-2 text-small leading-relaxed text-roast-text">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink variant="primary" href="/apply-now">
            Apply now <ArrowIcon />
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            href="/about"
            className="border-paper text-paper hover:border-brand-orange hover:text-brand-orange"
          >
            More about us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
