import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { courses, formatPrice } from "@/lib/data/courses";

export function CoursesOverview() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Our Courses" title="Find Your Path" />
          <Button href="/courses" variant="ghost" className="shrink-0">
            View all courses
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl bg-white p-6 ring-1 ring-coffee/10 transition-all hover:shadow-md hover:ring-orange/40"
            >
              <h3 className="text-lg font-bold text-coffee transition-colors group-hover:text-orange">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-coffee/70">{course.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                  {course.duration}
                </span>
                <span className="rounded-full bg-coffee/10 px-3 py-1 text-xs font-semibold text-coffee">
                  {formatPrice(course.price)}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                View curriculum →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
