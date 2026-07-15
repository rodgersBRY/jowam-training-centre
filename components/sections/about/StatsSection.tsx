import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/data/stats";
import { CountUp } from "@/components/interactive/CountUp";
import { Reveal } from "@/components/interactive/Reveal";

/** Headline proof-point stats — moved here from the homepage. */
export function StatsSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <dl className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="rounded-card border border-line bg-roast/[0.03] p-8 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block font-display text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold leading-none text-brand-orange"
                />
                <span className="mt-2 block text-small font-medium text-brand-brown/80">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
