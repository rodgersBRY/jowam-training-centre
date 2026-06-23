import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse Jowam's barista and coffee training courses — from fundamentals to espresso mastery. Flexible schedules to fit your life.",
  keywords: [
    "barista course Kenya",
    "coffee training courses Nairobi",
    "barista certification Kenya",
  ],
};

export default function CoursesPage() {
  return (
    <div className="bg-cream pt-16">
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="All Courses"
            title="Choose Your Programme"
            intro="Every Jowam course includes evening online theory and mandatory Saturday practicals. Pick the one that matches your goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="group flex flex-col rounded-2xl bg-white ring-1 ring-coffee/10 transition-all hover:shadow-md hover:ring-orange/40"
              >
                <div className="flex-1 p-6">
                  <h2 className="text-xl font-bold text-coffee transition-colors group-hover:text-orange">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-sm text-coffee/70">{course.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                      {course.duration}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-xs text-coffee/70">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-coffee/10 p-4">
                  <Button href={`/courses/${course.slug}`} className="w-full justify-center">
                    View curriculum
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
