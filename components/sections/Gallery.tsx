import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { images } from "@/lib/data/images";

const photos = [
  { publicId: images.gallery.espressoShots,    alt: "Coffee training session",       caption: "Students dialling in their first espresso shots" },
  { publicId: images.gallery.machineDrills,    alt: "Espresso machine training",     caption: "Saturday practical: espresso machine drills" },
  { publicId: images.gallery.latteArt,         alt: "Latte art practice",            caption: "Latte art session — learning the rosetta pattern" },
  { publicId: images.gallery.extractionModule, alt: "Students learning coffee",      caption: "Theory into practice: the extraction module" },
  { publicId: images.gallery.manualBrewing,    alt: "Barista skills training",       caption: "Hands-on: manual brewing with V60" },
  { publicId: images.gallery.finalAssessment,  alt: "Coffee brewing",               caption: "A cohort completing their final assessment" },
];

export function Gallery() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Student Gallery"
          title="Life at Jowam"
          align="center"
          intro="Real training. Real students. Real skills."
        />
        <div className="mt-12 columns-2 gap-4 sm:columns-3">
          {photos.map((photo) => (
            <div
              key={photo.publicId}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={cloudinaryUrl(photo.publicId, { width: 600 })}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-dark/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-cream">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
