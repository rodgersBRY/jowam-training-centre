import { Container } from "@/components/ui/Container";

export function Mission() {
  return (
    <section className="bg-coffee py-20 text-cream">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Raising the Standard of Coffee in Kenya, One Barista at a Time
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            We exist to make professional coffee education accessible to every Kenyan who wants
            it — regardless of their schedule, background, or prior experience. Through flexible,
            industry-aligned training, we equip our graduates with the skills, confidence, and
            certification to build meaningful careers in the growing East African coffee economy.
          </p>
        </div>
      </Container>
    </section>
  );
}
