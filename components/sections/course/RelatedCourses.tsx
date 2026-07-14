import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses, type Course } from "@/lib/data/courses";

export function RelatedCourses({ current }: { current: Course }) {
  const others = courses.filter((c) => c.slug !== current.slug);
  if (!others.length) return null;

  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading eyebrow="Keep exploring" title="More relevant courses" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
