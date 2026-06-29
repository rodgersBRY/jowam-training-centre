import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const intakes = [
  { month: "January", status: "Open" },
  { month: "March", status: "Open" },
  { month: "May", status: "Open" },
  { month: "July", status: "Open" },
  { month: "September", status: "Open" },
  { month: "November", status: "Open" },
];

export function Intake() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Intake Dates"
          title="When Can You Start?"
          intro="Jowam runs six intakes per year so you never have to wait long. Each cohort begins on the first Monday of the intake month and runs for the full course duration."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {intakes.map((intake) => (
            <div
              key={intake.month}
              className="rounded-xl border border-orange/20 bg-white p-4 text-center"
            >
              <p className="font-bold text-coffee">{intake.month}</p>
              <p className="mt-1 text-xs font-semibold text-orange">{intake.status}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-orange/10 p-6">
          <p className="text-sm text-coffee/80">
            <strong className="text-coffee">Applications close two weeks before each intake.</strong>{" "}
            Cohorts are capped at 12 students — once a month fills, the next intake is your
            guaranteed entry point. Apply early to secure your preferred date.
          </p>
        </div>
      </Container>
    </section>
  );
}
