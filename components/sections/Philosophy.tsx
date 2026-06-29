import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Hands-On First",
    description:
      "Every theory concept is immediately reinforced with hands-on practice. Coffee is a craft — understanding extraction chemistry means nothing if you cannot feel the grind, read the shot, and adjust in real time. Our Saturday lab sessions exist for exactly this.",
  },
  {
    title: "Flexible by Design",
    description:
      "We built our schedule around your life. Evenings online, Saturdays in the lab. You should not have to choose between your current income and your future career — so we made sure you do not have to.",
  },
  {
    title: "Industry Standards",
    description:
      "Our curriculum is co-developed with Kenyan coffee employers and benchmarked against SCA guidelines. Every module reflects what cafés, hotels, and roasters actually look for when they hire — not what was relevant five years ago.",
  },
];

export function Philosophy() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Training Philosophy"
          title="How We Teach"
          intro="Three principles guide every session, every assessment, and every interaction with our students. They are not aspirations — they are the structure our programmes are built on."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <div className="mb-4 h-1 w-12 rounded-full bg-orange" />
              <h3 className="font-bold text-coffee">{pillar.title}</h3>
              <p className="mt-2 text-sm text-coffee/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
