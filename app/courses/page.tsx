import type { Metadata } from "next";
import { courses } from "@/lib/data/courses";
import { faqs } from "@/lib/data/faq";
import { images } from "@/lib/data/images";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { Reveal } from "@/components/interactive/Reveal";
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
          <Reveal>
            <SectionHeading
              eyebrow="Courses"
              title="Learn Skills That Stay With You."
              lead="Whether you're preparing for your first café job, planning to open your own coffee business, or simply want to understand coffee beyond the cup, our courses are built around practical experience, expert guidance and real-world application. Explore the programme that's right for you."
            />
          </Reveal>

          <div
            data-pricing-section
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={i * 80}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Course FAQs" />
          </Reveal>
          <Reveal className="mt-8">
            <FaqAccordion items={coursesFaqs} />
          </Reveal>
          <JsonLd data={faqSchema(coursesFaqs)} />
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about your courses." />
    </>
  );
}
