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
            PLACEHOLDER — Mission Statement Heading
          </h2>
          {/* PLACEHOLDER: replace with real mission copy before launch */}
          <p className="mt-6 text-lg text-cream/80">
            PLACEHOLDER — To empower aspiring baristas and coffee professionals across Kenya with
            industry-relevant skills, flexible learning options, and a certification that opens
            doors in the growing East African coffee economy.
          </p>
        </div>
      </Container>
    </section>
  );
}
