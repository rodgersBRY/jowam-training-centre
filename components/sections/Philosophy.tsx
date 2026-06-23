import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// PLACEHOLDER: replace with real philosophy content before launch.
const pillars = [
  {
    title: "Hands-On First",
    description:
      "PLACEHOLDER — Every theory concept is immediately reinforced with practical application, because coffee is a craft learned by doing.",
  },
  {
    title: "Flexible by Design",
    description:
      "PLACEHOLDER — We built our schedule around your life, not the other way around. Learning should not require you to give up your income.",
  },
  {
    title: "Industry Standards",
    description:
      "PLACEHOLDER — Our curriculum is aligned with what Kenyan coffee employers actually look for, updated regularly with input from the industry.",
  },
];

export function Philosophy() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Training Philosophy"
          title="How We Teach"
          intro="PLACEHOLDER — Our approach is built on three principles that guide every session, every assessment, and every interaction with our students."
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
