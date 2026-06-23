import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const modes = [
  {
    label: "Morning Classes",
    time: "Mon – Fri, AM",
    audience: "Full-time learners",
    description:
      "Instructor-led sessions with hands-on practicals for those who prefer daytime learning.",
  },
  {
    label: "Afternoon Classes",
    time: "Mon – Fri, PM",
    audience: "Flexible daytime",
    description:
      "The same curriculum delivered in the afternoon for learners who need a later start.",
  },
  {
    label: "Evening Online Theory",
    time: "Mon – Thu, Evening",
    audience: "Working professionals & remote learners",
    description:
      "Live online theory sessions you can join from anywhere — designed around your work schedule.",
  },
];

export function FlexibleLearningPaths() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Flexible Learning Paths"
          title="Study on Your Schedule"
          intro="Three class formats plus Saturday hands-on sessions — all leading to the same certification."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode) => (
            <Card key={mode.label} className="flex flex-col gap-3">
              <div className="inline-flex w-fit rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
                {mode.time}
              </div>
              <h3 className="text-lg font-bold text-coffee">{mode.label}</h3>
              <p className="text-sm font-medium text-coffee/60">{mode.audience}</p>
              <p className="text-sm text-coffee/80">{mode.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-coffee p-6 text-cream">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                Every Saturday
              </p>
              <h3 className="mt-1 text-xl font-bold">Hands-On Practical Training</h3>
              <p className="mt-1 text-sm text-cream/70">
                Espresso machines · Latte art · Brewing practice — mandatory for all students.
              </p>
            </div>
            <div className="shrink-0 text-4xl font-black text-orange/30">SAT</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
