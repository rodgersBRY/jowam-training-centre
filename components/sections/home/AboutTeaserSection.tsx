import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { about } from "@/lib/data/about";

/** Condensed mission/vision/values teaser, linking through to the full About page. */
export function AboutTeaserSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="About Jowam"
          title="Why we do this"
          align="center"
        />

        <p className="mt-6 mx-auto max-w-[65ch] text-center text-(length:--text-body) leading-[1.65] text-brand-brown">
          {about.mission}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-card border border-line bg-roast/[0.03] p-6 text-center"
            >
              <h3 className="text-h3 font-bold text-roast">{value.title}</h3>
              <p className="mt-2 text-small text-brand-brown leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink variant="primary" href="/apply-now">
            Apply now <ArrowIcon />
          </ButtonLink>
          <ButtonLink variant="secondary" href="/about">
            More about us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
