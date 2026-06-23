import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/data/stats";

const reasons = [
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Our programme is designed with input from working baristas and café owners — built for the job market.",
  },
  {
    title: "Flexible for Modern Learners",
    description:
      "Morning, afternoon, or evening — you choose the format that works with your life.",
  },
  {
    title: "Certified & Recognised",
    description:
      "Graduate with a certification that employers in Kenya's growing coffee industry recognise.",
  },
];

export function WhyJowam() {
  return (
    <section className="bg-dark py-20 text-cream">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
            Why Jowam
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Training Built Around You
          </h2>
          <p className="mt-4 text-base text-cream/70">
            We designed every aspect of Jowam to remove the barriers between you and a
            professional coffee career.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-coffee/40 p-6 text-center">
              <p className="text-5xl font-black text-orange">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm font-medium text-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="mb-3 h-0.5 w-8 bg-orange" />
              <h3 className="font-bold text-cream">{reason.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
