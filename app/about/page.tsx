import type { Metadata } from "next";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { StorySection } from "@/components/about/StorySection";
import { InstructorsSection } from "@/components/about/InstructorsSection";
import { FacilitySection } from "@/components/about/FacilitySection";

export const metadata: Metadata = pageMetadata({
  title: "About Jowam Coffee Training Centre",
  description:
    "A premium, hands-on coffee school in Nairobi. Meet our instructors, see the facility, and learn the philosophy behind our training.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <InstructorsSection />
      <FacilitySection />

      {/* Closing CTA */}
      <section className="section-y bg-paper">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Ready when you are"
            title="Come and train with us"
            lead="Weekly intakes, transparent pricing, and real equipment in the heart of Nairobi."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink variant="primary" href="/courses">
              Explore courses <ArrowIcon />
            </ButtonLink>
            <ButtonLink variant="secondary" href="/apply-now">
              Apply now
            </ButtonLink>
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about Jowam Coffee Training Centre." />
    </>
  );
}
