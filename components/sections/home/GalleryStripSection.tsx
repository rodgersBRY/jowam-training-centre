import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/interactive/Reveal";
import { images } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

const galleryItems = [
  {
    publicId: images.gallery.espressoShots,
    alt: "Students pulling espresso shots during a live training session",
  },
  {
    publicId: images.gallery.latteArt,
    alt: "Latte art practice — tulip and rosetta patterns on freshly poured milk drinks",
  },
  {
    publicId: images.gallery.machineDrills,
    alt: "Machine drills on commercial espresso equipment at Jowam Training Centre",
  },
  {
    publicId: images.gallery.manualBrewing,
    alt: "Manual brewing class — V60 pour-over and AeroPress technique session",
  },
] as const;

export function GalleryStripSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Inside Jowam"
            title="From the training floor"
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-small hover:-translate-y-[1px] transition-transform duration-150 shrink-0 mb-1"
          >
            View full gallery
            <ArrowIcon size={16} />
          </Link>
        </div>

        <Reveal className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryItems.map((item) => (
            <Link
              key={item.publicId}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-card bg-roast"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={cloudinaryUrl(item.publicId, { width: 500, height: 500 })}
                alt={item.alt}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-[400ms] ease-brand group-hover:scale-[1.05]"
              />
            </Link>
          ))}
        </Reveal>

        {/* Accessible link for keyboard/screen-reader users */}
        <div className="mt-4 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-small hover:-translate-y-[1px] transition-transform duration-150 sm:hidden"
          >
            View full gallery
            <ArrowIcon size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
