import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    step: "01",
    title: "Submit Your Application",
    description:
      "Fill in the online application form — it takes about five minutes. Tell us which course interests you and your preferred intake month.",
  },
  {
    step: "02",
    title: "Receive Confirmation",
    description:
      "Our admissions team reviews every application within two business days and will reach out by phone or email to confirm your place and answer any questions.",
  },
  {
    step: "03",
    title: "Secure Your Spot",
    description:
      "Once confirmed, complete your enrolment to lock in your cohort. Cohorts are capped at 12 students, so early enrolment is strongly encouraged.",
  },
  {
    step: "04",
    title: "Start Learning",
    description:
      "Join your cohort on intake day. Online theory sessions begin that first week and your first Saturday practical follows the very next weekend.",
  },
];

export function ApplicationProcess() {
  return (
    <section className="bg-dark py-20 text-cream">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
            Application Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            How to Enrol
          </h2>
          <p className="mt-4 text-base text-cream/70">
            Getting into Jowam is straightforward. The whole process from application to first
            session takes less than a week.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl bg-coffee/30 p-6">
              <p className="text-3xl font-black text-orange/40">{s.step}</p>
              <h3 className="mt-3 font-bold text-cream">{s.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/apply">Start Your Application</Button>
        </div>
      </Container>
    </section>
  );
}
