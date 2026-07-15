import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/courses/CourseCard";
import { Reveal } from "@/components/interactive/Reveal";
import { courses } from "@/lib/data/courses";

export function CourseStripSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Everyone Starts Somewhere"
            title="Find the course that's right for you"
            lead="Whether you're learning for employment, business or personal growth, we have a programme designed for you."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 80}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
