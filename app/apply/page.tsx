import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FullApplicationForm } from "@/components/forms/FullApplicationForm";

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
          <div className="mt-12">
            <FullApplicationForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
