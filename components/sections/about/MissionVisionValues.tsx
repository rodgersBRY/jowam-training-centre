import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/data/about";

/** Full mission/vision/values — the About page's own, fuller version of the homepage teaser. */
export function MissionVisionValues() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="What we Believe"
          title="Coffee is a hands-on craft."
          align="center"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-card border border-line bg-roast/3 p-8">
            <h3 className="text-h3 font-bold text-roast">
              We believe learning should be practical
            </h3>
            <p className="mt-3 text-brand-brown leading-relaxed">
              {about.practicalLearning}
            </p>
          </div>

          <div className="rounded-card border border-line bg-roast/3 p-8">
            <h3 className="text-h3 font-bold text-roast">
              We believe every student deserves personal attention.
            </h3>
            <p className="mt-3 text-brand-brown leading-relaxed">
              {about.personalAttention}
            </p>
          </div>

          <div className="rounded-card border border-line bg-roast/3 p-8">
            <h3 className="text-h3 font-bold text-roast">
              We believe skills create opportunities.
            </h3>
            <p className="mt-3 text-brand-brown leading-relaxed">
              {about.opportunities}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {about.values.map((value) => (
            <div key={value.title} className="p-6 text-center">
              <h4 className="font-bold text-roast">{value.title}</h4>
              <p className="mt-2 text-small text-brand-brown leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
