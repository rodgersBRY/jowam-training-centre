import type { Metadata } from "next";
import { faqs } from "@/lib/data/faq";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers on cost, duration, intake dates, M-PESA installments, entry requirements, certificates, and job prospects at Jowam Coffee Training Centre.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            lead="Everything you need to know about fees, intakes, installments, and certificates."
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>

          <div className="mt-12 rounded-card bg-roast p-8 text-center">
            <p className="text-(length:--text-h3) font-semibold text-paper">
              Still have a question?
            </p>
            <p className="mt-2 text-roast-text">
              Chat with us on WhatsApp or start your registration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink variant="primary" href="/enroll">
                Enroll now <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I have a question about your courses." />
    </>
  );
}
