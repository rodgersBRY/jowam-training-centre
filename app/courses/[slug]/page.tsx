import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { faqs } from "@/lib/data/faq";
import { testimonials } from "@/lib/data/testimonials";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SyllabusTimeline } from "@/components/interactive/SyllabusTimeline";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { FaqAccordion } from "@/components/interactive/FaqAccordion";
import { JsonLd, courseSchema, faqSchema } from "@/components/seo/JsonLd";
import { CourseHero } from "@/components/sections/course/CourseHero";
import { CoursePricing } from "@/components/sections/course/CoursePricing";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return pageMetadata({
    title: course.title,
    description: course.summary,
    path: `/courses/${course.slug}`,
  });
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const imageId = courseImages[course.slug] ?? courseImages[courses[0].slug];
  const courseTestimonials = testimonials.filter(
    (t) => t.course === course.title,
  );
  const shown = courseTestimonials.length ? courseTestimonials : testimonials;

  return (
    <>
      <JsonLd data={courseSchema(course)} />

      <CourseHero course={course} imagePublicId={imageId} />

      {/* Syllabus — the signature element */}
      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title={`Your ${course.weeks}-week syllabus`}
            lead="Tap any week to see exactly what you'll cover. This is the depth behind the price."
          />
          <div className="mt-12">
            <SyllabusTimeline weeks={course.syllabus} />
          </div>
        </Container>
      </section>

      {/* Outcomes + careers */}
      <section className="section-y bg-paper">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What you'll be able to do"
                title="Skills you leave with"
              />
              <ul className="mt-6 space-y-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-brand-brown">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Where it leads"
                title="Career outcomes"
              />
              <ul className="mt-6 space-y-3">
                {course.careerOutcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-brand-brown">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        data-pricing-section
        className="section-y bg-paper scroll-mt-16"
      >
        <Container className="max-w-225">
          <CoursePricing course={course} />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-paper">
        <Container>
          <SectionHeading eyebrow="Graduates" title="From our classes" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {shown.slice(0, 3).map((t) => (
              <Card key={t.name} className="p-6">
                <p className="text-brand-brown">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-roast">{t.name}</p>
                <p className="text-[0.85rem] text-brand-brown/70">
                  {t.course} · {t.workplace}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-paper">
        <Container className="max-w-205">
          <SectionHeading eyebrow="Questions" title="Course FAQs" />
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
          <JsonLd data={faqSchema(faqs)} />
        </Container>
      </section>

      <WhatsAppButton
        message={course.whatsappMessage}
        label="Ask about this course"
      />
    </>
  );
}
