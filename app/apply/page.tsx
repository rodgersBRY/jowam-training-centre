import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Jowam Coffee Training Centre. Submit your application to enrol in a course.",
};

export default function ApplyPage() {
  return (
    <div className="bg-cream pt-16">
      <section className="py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Apply"
            title="Start Your Application"
            intro="Complete the form below to apply for a place at Jowam Coffee Training Centre."
          />
          {/* TODO Phase 3: replace this placeholder with <FullApplicationForm /> */}
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-dashed border-coffee/20 p-12 text-center">
            <p className="text-sm text-coffee/50">Full Application Form — Phase 3</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
