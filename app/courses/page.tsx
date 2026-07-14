import type { Metadata } from "next";
import { courses } from "@/lib/data/courses";
import { faqs } from "@/lib/data/faq";
import { images } from "@/lib/data/images";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { JsonLd, coursesListSchema, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Coffee Courses in Nairobi",
  description:
    "Professional barista, coffee roasting, and refresher courses in Nairobi. Transparent pricing, weekly intakes, and M-PESA installments.",
  path: "/courses",
});

const coursesFaqs = faqs.filter((f) =>
  ["cost", "schedule", "certificate"].includes(f.scope ?? ""),
);

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={coursesListSchema()} />

      <PageHero
        image={images.heroPoster}
        tagline="Courses"
        title="Our Courses"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Choose your training"
            lead="Three programmes covering barista skills, roasting, and a fast refresher — pick the one that matches where you're starting from."
          />

          <div
            data-pricing-section
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <SectionHeading eyebrow="Questions" title="Course FAQs" />
          <div className="mt-8">
            <FaqAccordion items={coursesFaqs} />
          </div>
          <JsonLd data={faqSchema(coursesFaqs)} />
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about your courses." />
    </>
  );
}
