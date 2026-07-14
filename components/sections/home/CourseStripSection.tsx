import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/lib/data/courses";

export function CourseStripSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Our courses"
          title="Choose your training"
          lead="Three programmes built for the real world — professional equipment, named expert instructors, and certificates employers trust."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
