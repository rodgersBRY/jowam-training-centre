import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/icons";
import { courses } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

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
          {courses.map((course) => {
            const imgId = courseImages[course.slug];
            return (
              <Card key={course.slug} interactive className="flex flex-col">
                {/* Whole card is the tap target */}
                <Link
                  href={`/courses/${course.slug}`}
                  className="group flex flex-col flex-1 focus-visible:outline-none"
                  aria-label={`View the ${course.title}`}
                >
                  {/* Course photo — 16:9 */}
                  <div className="relative aspect-video overflow-hidden rounded-t-[12px]">
                    {imgId ? (
                      <Image
                        src={cloudinaryUrl(imgId, { width: 720, height: 405 })}
                        alt={`Students training in the ${course.title} at Jowam Coffee Training Centre`}
                        width={720}
                        height={405}
                        className="h-full w-full object-cover transition-transform duration-400 ease-brand group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="h-full w-full bg-roast" />
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-h3 font-bold text-roast">
                      {course.title}
                    </h3>

                    {/* Meta row */}
                    <div className="mt-2 flex items-center gap-3 text-small text-brand-brown">
                      <span className="font-medium">{course.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>Weekly intakes</span>
                    </div>

                    <p className="mt-3 text-brand-brown text-small leading-relaxed flex-1">
                      {course.tagline}
                    </p>

                    {/* Ghost CTA */}
                    <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-orange text-small group-hover:-translate-y-px transition-transform duration-150">
                      View course
                      <ArrowIcon size={16} />
                    </span>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
