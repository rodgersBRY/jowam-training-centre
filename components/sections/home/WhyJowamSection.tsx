import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data/stats";
import { CountUp } from "@/components/interactive/CountUp";
import {
  UserIcon,
  CoffeeIcon,
  CalendarIcon,
  RepeatIcon,
} from "@/components/ui/icons";

const reasons = [
  {
    icon: UserIcon,
    title: "Named expert instructors",
    body: "Every course is taught by a named, credentialled trainer — not a rotating pool of part-timers. You know exactly who is teaching you and can hold them to the standard they publish.",
  },
  {
    icon: CoffeeIcon,
    title: "Professional-grade equipment",
    body: "Train on the same commercial espresso machines, grinders, and drum roasters you will find in a real café or roastery. Day one on the job you will recognise the equipment and the workflow.",
  },
  {
    icon: CalendarIcon,
    title: "Five weeks of real depth",
    body: "Our Professional courses run for five weeks because barista and roasting craft cannot be compressed into a weekend. You leave with muscle memory, not just a certificate.",
  },
  {
    icon: RepeatIcon,
    title: "Weekly intakes, no long wait",
    body: "A new cohort starts every week, so you can plan around work, family, or funding. Small class sizes mean the instructor has time for you — not just the fastest learner in the room.",
  },
];

export function WhyJowamSection() {
  return (
    <section className="section-y bg-roast">
      <Container>
        <SectionHeading
          eyebrow="Why Jowam"
          title="Training built for the real industry"
          lead="There are plenty of short coffee courses out there. Jowam is different because we build for what happens after graduation."
          align="center"
          onRoast
        />

        {/* Highlighted proof-point stats */}
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-card border border-roast-text/15 bg-roast-text/5 p-8 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block font-display text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold leading-none text-brand-orange"
                />
                <span className="mt-2 block text-small font-medium text-roast-text/80">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-card border border-roast-text/15 bg-roast-text/5 p-8"
            >
              <r.icon size={28} className="text-brand-orange" />
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
