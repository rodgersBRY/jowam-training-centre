import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { courses, formatPrice } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { JsonLd, coursesListSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Coffee Courses in Nairobi",
  description:
    "Professional barista, coffee roasting, and refresher courses in Nairobi CBD. Transparent pricing, monthly intakes, and M-PESA installments.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={coursesListSchema()} />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Train on real equipment, priced in the open"
            lead="Three hands-on programmes with monthly intakes. Every fee is published, and every course can be paid in M-PESA installments."
          />

          <div
            data-pricing-section
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course) => {
              const src = cloudinaryUrl(courseImages[course.slug], {
                width: 800,
                height: 500,
                crop: "fill",
              });
              return (
                <Card key={course.slug} interactive className="flex flex-col">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={src}
                        alt={`${course.title} at Jowam`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-(length:--text-h3) font-semibold text-roast">
                        {course.title}
                      </h2>
                      <p className="mt-1 text-[0.85rem] font-medium text-brand-brown/70">
                        {course.duration} · Monthly intakes
                      </p>
                      <p className="mt-3 flex-1 text-[0.95rem] text-brand-brown">
                        {course.summary}
                      </p>
                      <p
                        className="mt-5 text-price font-display font-extrabold leading-none text-roast"
                      >
                        <span className="align-super text-[40%] font-bold">
                          KES{" "}
                        </span>
                        {course.price.toLocaleString("en-KE")}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-orange">
                        View course <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to know more about your courses." />
    </>
  );
}
