import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { faqs } from "@/lib/data/faq";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { JsonLd, coursesListSchema } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { CourseStripSection } from "@/components/sections/home/CourseStripSection";
import { WhyJowamSection } from "@/components/sections/home/WhyJowamSection";
import { GalleryStripSection } from "@/components/sections/home/GalleryStripSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export const metadata: Metadata = pageMetadata({
  title: "Barista & Coffee Roasting Training in Nairobi CBD",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={coursesListSchema()} />

      <HeroSection />

      {/* Pricing figures live here — cue the sticky WhatsApp pulse */}
      <div data-pricing-section>
        <CourseStripSection />
      </div>

      <WhyJowamSection />
      <GalleryStripSection />
      <TestimonialsSection />

      {/* Location */}
      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Visit us"
            title="In the heart of Nairobi CBD"
            lead={site.address.full}
          />
          <div className="mt-8 overflow-hidden rounded-card border border-line">
            <iframe
              src={site.address.mapEmbed}
              title="Jowam Coffee Training Centre location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-105"
            />
          </div>
        </Container>
      </section>

      {/* FAQ preview */}
      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <SectionHeading
            eyebrow="Questions"
            title="Answers before you enrol"
            lead="Fees are published openly and every course can be paid in full or in M-PESA installments."
          />
          <div className="mt-8">
            <FaqAccordion items={faqs.slice(0, 4)} />
          </div>
          <div className="mt-8">
            <ButtonLink variant="ghost" href="/faq">
              See all FAQs <ArrowIcon />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about your courses." />
    </>
  );
}
