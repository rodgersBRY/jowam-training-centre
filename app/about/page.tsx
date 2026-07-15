import type { Metadata } from "next";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/data/faq";
import { images } from "@/lib/data/images";
import { StorySection } from "@/components/about/StorySection";
import { FacilitySection } from "@/components/about/FacilitySection";
import { MissionVisionValues } from "@/components/sections/about/MissionVisionValues";
import { StatsSection } from "@/components/sections/about/StatsSection";
import { WhyChooseUsList } from "@/components/sections/about/WhyChooseUsList";

const aboutFaqs = faqs.filter((f) => f.scope === "general");

export const metadata: Metadata = pageMetadata({
  title: "About Jowam Coffee Training Centre",
  description:
    "A premium, hands-on coffee school in Nairobi. Meet our instructors, see the facility, and learn the philosophy behind our training.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={images.story}
        tagline="About Jowam"
        title="About Jowam Coffee Training Centre"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <StorySection />
      <MissionVisionValues />
      <StatsSection />
      <WhyChooseUsList />
      <FacilitySection />

      {/* FAQ */}
      <section id="faq" className="section-y bg-paper scroll-mt-16">
        <Container className="max-w-205">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
          />
          <div className="mt-8">
            <FaqAccordion items={aboutFaqs} />
          </div>
          <JsonLd data={faqSchema(aboutFaqs)} />
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="section-y bg-paper">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Ready when you are"
            title="We'd Love to Meet You"
            lead="The best way to understand Jowam isn't by reading about us. It's by walking through our doors, meeting our trainers and experiencing the learning environment for yourself."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink variant="primary" href="/courses">
              Explore Our Courses <ArrowIcon />
            </ButtonLink>
            <ButtonLink variant="secondary" href="/apply-now">
              Book a Visit
            </ButtonLink>
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about Jowam Coffee Training Centre." />
    </>
  );
}
