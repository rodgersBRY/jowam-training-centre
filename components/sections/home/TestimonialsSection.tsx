import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/interactive/Reveal";
import { testimonials } from "@/lib/data/testimonials";

/** Returns the initials avatar colour for a given name — deterministic. */
function avatarColor(name: string): string {
  const palette = [
    "bg-roast text-paper",
    "bg-brand-brown text-paper",
    "bg-brand-orange text-white",
  ];
  const idx =
    name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    palette.length;
  return palette[idx];
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Graduate stories"
            title="Every cup tells a different story."
            lead=""
            align="center"
          />
        </Reveal>

        {/* Static grid — no carousel (DESIGN §6) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="h-full">
              <Card className="flex h-full flex-col p-6 md:p-8">
              {/* Quote */}
              <blockquote className="flex-1">
                <span
                  className="text-4xl font-serif leading-none text-brand-orange"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-1 text-brand-brown leading-relaxed">
                  {t.quote}
                </p>
              </blockquote>

              {/* Attribution */}
              <footer className="mt-6 flex items-center gap-3">
                {/* Initials avatar (image is null for all current testimonials) */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColor(t.name)}`}
                  aria-hidden="true"
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-semibold text-roast leading-tight">
                    {t.name}
                  </p>
                  <p className="text-small text-brand-brown">
                    {t.course}
                  </p>
                  <p className="text-small text-brand-brown opacity-70">
                    {t.workplace}
                  </p>
                </div>
              </footer>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
