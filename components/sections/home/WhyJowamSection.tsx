import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: "👤",
    title: "Named expert instructors",
    body: "Every course is taught by a named, credentialled trainer — not a rotating pool of part-timers. You know exactly who is teaching you and can hold them to the standard they publish.",
  },
  {
    icon: "☕",
    title: "Professional-grade equipment",
    body: "Train on the same commercial espresso machines, grinders, and drum roasters you will find in a real café or roastery. Day one on the job you will recognise the equipment and the workflow.",
  },
  {
    icon: "📅",
    title: "Five weeks of real depth",
    body: "Our Professional courses run for five weeks because barista and roasting craft cannot be compressed into a weekend. You leave with muscle memory, not just a certificate.",
  },
  {
    icon: "🔄",
    title: "Monthly intakes, no long wait",
    body: "A new cohort starts every month, so you can plan around work, family, or funding. Small class sizes mean the instructor has time for you — not just the fastest learner in the room.",
  },
];

export function WhyJowamSection() {
  return (
    <section className="section-y bg-roast">
      <Container>
        <SectionHeading
          eyebrow="Why Jowam"
          title="Training built for the real industry"
          lead="There are plenty of short coffee courses in Nairobi. Jowam is different because we build for what happens after graduation."
          align="center"
          onRoast
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-card border border-roast-text/15 bg-roast-text/5 p-8"
            >
              <span className="text-3xl" aria-hidden="true">{r.icon}</span>
              <h3 className="mt-4 text-h3 font-bold text-paper">
                {r.title}
              </h3>
              <p className="mt-3 text-roast-text leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
