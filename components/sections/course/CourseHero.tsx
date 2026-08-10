import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { formatPrice } from "@/lib/data/courses";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { intakeLabel } from "@/lib/utils/intake";
import { NextIntakeLabel } from "@/components/interactive/NextIntakeLabel";
import type { Course } from "@/lib/data/courses";

export function CourseHero({
  course,
  imagePublicId,
}: {
  course: Course;
  imagePublicId: string;
}) {
  const heroSrc = cloudinaryUrl(imagePublicId, {
    width: 1600,
    height: 900,
    quality: "auto",
    crop: "fill",
  });

  return (
    <section className="relative overflow-hidden bg-roast">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={heroSrc}
          alt={`${course.title} at Jowam Coffee Training Centre`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>

      {/* Content */}
      <Container className="relative z-10 section-y">
        <div className="max-w-170">
          <Breadcrumbs
            className="mb-4"
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: course.title },
            ]}
          />

          {/* Eyebrow */}
          <p className="text-small font-semibold uppercase tracking-[0.12em] text-brand-orange mb-4">
            {course.duration} &middot; Weekly intakes
          </p>

          {/* Status badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {course.online && (
              <span className="rounded-pill border border-roast-text/30 bg-roast/40 px-3 py-1 text-[0.75rem] font-semibold text-roast-text">
                Online classes available
              </span>
            )}
            <span className="rounded-pill border border-brand-orange/40 bg-roast/40 px-3 py-1 text-[0.75rem] font-semibold text-brand-orange">
              <NextIntakeLabel fallback={intakeLabel()} />
            </span>
          </div>

          {/* H1 — one per page */}
          <h1 className="text-hero font-bold text-paper">{course.title}</h1>

          <p className="mt-4 text-[1.125rem] text-roast-text measure">
            {course.tagline}
          </p>

          {/* Price — typographic event */}
          <div className="mt-8">
            <p className="text-small font-semibold uppercase tracking-widest text-roast-text/70">
              Course fee
            </p>
            <p className="mt-1 text-price font-display font-extrabold leading-none text-paper">
              <span className="align-super text-[40%] font-bold">KES </span>
              {course.price.toLocaleString("en-KE")}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              variant="primary"
              href={`/apply-now?course=${course.slug}`}
              data-umami-event="apply-click"
              data-umami-event-course={course.slug}
              data-umami-event-source="hero"
            >
              Apply now
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="#pricing"
              className="border-roast-text text-roast-text hover:border-brand-orange hover:text-brand-orange"
            >
              See pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
