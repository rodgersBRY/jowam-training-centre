import type { Metadata } from "next";
import { faqs } from "@/lib/data/faq";
import { getUpcomingEvents } from "@/lib/data/events";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { JsonLd, coursesListSchema } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { AboutTeaserSection } from "@/components/sections/home/AboutTeaserSection";
import { LatestBlogSection } from "@/components/sections/home/LatestBlogSection";
import { CourseStripSection } from "@/components/sections/home/CourseStripSection";
import { GalleryStripSection } from "@/components/sections/home/GalleryStripSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { EventModal } from "@/components/events/EventModal";

// Homepage FAQ preview — skip cost (money) and location questions.
const homeFaqs = faqs
  .filter(
    (f) => f.scope !== "cost" && !f.question.toLowerCase().includes("located"),
  )
  .slice(0, 4);

export const metadata: Metadata = pageMetadata({
  title: "Professional Barista & Coffee Roasting Training",
  description:
    "Hands-on barista and coffee roasting courses — espresso extraction, milk texturing, latte art, manual brewing, cupping, and roast profiling. Learn from the fundamentals to job-ready in five weeks.",
  path: "/",
});

export default function HomePage() {
  const nextEvent = getUpcomingEvents()[0] ?? null;

  return (
    <>
      <JsonLd data={coursesListSchema()} />

      <HeroSection />
      {nextEvent && <EventModal event={nextEvent} />}
      <div className="max-w-300 mx-auto">
        <IntroSection />
        <WhyChooseUsSection />
        <AboutTeaserSection />
        <LatestBlogSection />
        <CourseStripSection />
        <GalleryStripSection />
        <TestimonialsSection />
      </div>

      {/* FAQ preview */}
      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <SectionHeading
            eyebrow="Questions"
            title="Answers before you enrol"
            lead="What you'll learn, how the courses run, and what to expect from your training."
          />
          <div className="mt-8">
            <FaqAccordion items={homeFaqs} />
          </div>
          <div className="mt-8">
            <ButtonLink variant="ghost" href="/about#faq">
              See all FAQs <ArrowIcon />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about your courses." />
    </>
  );
}
