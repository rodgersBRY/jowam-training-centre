import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatPrice } from "@/lib/data/courses";
import { nextIntake, whatsappLink } from "@/lib/data/site";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
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
    <section className="relative overflow-hidden bg-[var(--color-roast)]">
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
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <p className="text-[var(--text-small)] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-orange)] mb-4">
            {course.duration} &middot; Monthly intakes
          </p>

          {/* H1 — one per page */}
          <h1
            className="font-bold leading-[1.05] text-[var(--color-paper)]"
            style={{ fontSize: "var(--text-hero)" }}
          >
            {course.title}
          </h1>

          <p className="mt-4 text-[1.125rem] text-[var(--color-roast-text)] measure">
            {course.tagline}
          </p>

          {/* Price — typographic event */}
          <div className="mt-8">
            <p className="text-[var(--text-small)] font-semibold uppercase tracking-[0.1em] text-[var(--color-roast-text)]/70">
              Course fee
            </p>
            <p
              className="mt-1 font-[family-name:var(--font-display)] font-extrabold leading-none text-[var(--color-paper)]"
              style={{ fontSize: "var(--text-price)" }}
            >
              <span className="align-super text-[40%] font-bold">KES </span>
              {course.price.toLocaleString("en-KE")}
            </p>
            <p className="mt-2 text-[0.9rem] text-[var(--color-roast-text)]/75">
              Next intake: <strong className="text-[var(--color-roast-text)]">{nextIntake}</strong>
              {" "}&middot; M-PESA installments available
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              variant="whatsapp"
              href={whatsappLink(course.whatsappMessage)}
              external
            >
              <WhatsAppIcon size={20} />
              Enroll via WhatsApp
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="#pricing"
              className="border-[var(--color-roast-text)] text-[var(--color-roast-text)] hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
            >
              See pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
