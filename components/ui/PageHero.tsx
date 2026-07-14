import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

/**
 * Shared hero band for every non-homepage page: background photo + scrim,
 * tagline, title, and breadcrumbs. Homepage keeps its own full-screen
 * HeroSection — this is the shorter (~55vh) variant used everywhere else.
 */
export function PageHero({
  image,
  tagline,
  title,
  breadcrumbs,
}: {
  image: string;
  tagline?: string;
  title: string;
  breadcrumbs: Crumb[];
}) {
  const heroSrc = cloudinaryUrl(image, {
    width: 1600,
    height: 900,
    quality: "auto",
    crop: "fill",
  });

  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-roast">
      <div className="absolute inset-0">
        <Image
          src={heroSrc}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>

      <Container className="relative z-10 py-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} className="mb-4" />
        {tagline ? (
          <p className="mb-3 text-small font-semibold uppercase tracking-[0.12em] text-brand-orange">
            {tagline}
          </p>
        ) : null}
        <h1 className="text-h2 font-bold text-paper">{title}</h1>
      </Container>
    </section>
  );
}
