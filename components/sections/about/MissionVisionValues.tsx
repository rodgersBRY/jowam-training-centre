import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/data/about";

/** Full mission/vision/values — the About page's own, fuller version of the homepage teaser. */
export function MissionVisionValues() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Our purpose"
          title="Mission, vision & values"
          align="center"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-card border border-line bg-roast/[0.03] p-8">
            <h3 className="text-h3 font-bold text-roast">Mission</h3>
            <p className="mt-3 text-brand-brown leading-relaxed">
              {about.mission}
            </p>
          </div>
          <div className="rounded-card border border-line bg-roast/[0.03] p-8">
            <h3 className="text-h3 font-bold text-roast">Vision</h3>
            <p className="mt-3 text-brand-brown leading-relaxed">
              {about.vision}
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
