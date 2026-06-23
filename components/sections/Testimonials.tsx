import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-coffee/5 py-20">
      <Container>
        <SectionHeading
          eyebrow="Student Voices"
          title="What Our Students Say"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col gap-4">
              <p className="text-3xl font-black text-orange leading-none">&ldquo;</p>
              <p className="flex-1 text-sm text-coffee/80">{t.quote}</p>
              <div className="border-t border-coffee/10 pt-4">
                <p className="font-semibold text-coffee">{t.name}</p>
                <p className="text-xs text-coffee/60">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
