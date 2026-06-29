import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ALL_MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

function getUpcomingMonths(): string[] {
  const nextMonth = new Date().getMonth() + 1; // 0-indexed, skip current
  return ALL_MONTHS.slice(nextMonth, nextMonth + 2);
}

export function Intake() {
  const intakes = getUpcomingMonths();
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Intake Dates"
          title="Start Any Month of the Year"
          intro="Jowam runs monthly intakes so you can begin as soon as you are ready. Each cohort starts on the first Monday of the month and runs for the full course duration."
        />
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {intakes.map((month) => (
            <div
              key={month}
              className="rounded-xl border border-orange/20 bg-white p-4 text-center"
            >
              <p className="font-bold text-coffee">{month}</p>
              <p className="mt-1 text-xs font-semibold text-orange">Open</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-orange/10 p-6">
          <p className="text-sm text-coffee/80">
            <strong className="text-coffee">Applications close two weeks before the start of each month.</strong>{" "}
            Cohorts are capped at 12 students per intake — apply early to secure your preferred start date.
          </p>
        </div>
      </Container>
    </section>
  );
}
