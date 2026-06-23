import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { courses, getCourseBySlug } from "@/lib/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
    keywords: [
      `${course.title} Kenya`,
      "barista course Kenya",
      "coffee training Nairobi",
    ],
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div className="bg-cream pt-16">
      {/* Overview */}
      <section className="bg-dark py-20 text-cream">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
              Course
            </p>
            <h1 className="text-4xl font-bold text-cream sm:text-5xl">{course.title}</h1>
            <p className="mt-4 text-lg text-cream/80">{course.summary}</p>
            <div className="mt-6 inline-flex rounded-full bg-orange/20 px-4 py-2 text-sm font-semibold text-orange">
              Duration: {course.duration}
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum + Outcomes */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-coffee">Curriculum</h2>
              <ul className="mt-6 space-y-3">
                {course.curriculum.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                      {i + 1}
                    </span>
                    <span className="text-sm text-coffee/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-coffee">Outcomes</h2>
              <p className="mt-2 text-sm text-coffee/60">
                By the end of this course you will be able to:
              </p>
              <ul className="mt-6 space-y-3">
                {course.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span className="text-sm text-coffee/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="bg-coffee py-16 text-cream">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-cream">Ready to enroll?</h2>
              <p className="mt-1 text-cream/70">
                Applications open monthly. Submit yours today.
              </p>
            </div>
            <Button href="/apply" className="shrink-0">
              Apply for {course.title}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
