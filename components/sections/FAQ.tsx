import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/faq";

export function FAQ() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" />
          <dl className="mt-12 divide-y divide-coffee/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 focus-visible:outline-none">
                  <dt className="font-semibold text-coffee">{faq.question}</dt>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-light text-orange transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <dd className="mt-3 text-sm leading-relaxed text-coffee/70">{faq.answer}</dd>
              </details>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
