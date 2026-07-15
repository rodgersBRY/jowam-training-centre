import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/courses/CourseCard";
import { Reveal } from "@/components/interactive/Reveal";
import { courses, type Course } from "@/lib/data/courses";

export function RelatedCourses({ current }: { current: Course }) {
  const others = courses.filter((c) => c.slug !== current.slug);
  if (!others.length) return null;

  return (
    <section className="section-y bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Keep exploring" title="More relevant courses" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((course, i) => (
            <Reveal key={course.slug} delay={i * 80}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
