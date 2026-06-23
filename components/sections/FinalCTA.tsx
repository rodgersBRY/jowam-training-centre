import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-orange py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Ready to Start Your Coffee Journey?
          </h2>
          <p className="mt-4 text-cream/80">
            Applications open every month. Choose the schedule that works for you and take the
            first step toward a professional coffee career.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/apply" variant="secondary">
              Apply Now
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              className="ring-1 ring-cream/40 text-cream hover:bg-cream/10 hover:text-cream"
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
