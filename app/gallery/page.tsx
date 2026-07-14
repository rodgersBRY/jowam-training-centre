import type { Metadata } from "next";
import { images } from "@/lib/data/images";
import { site } from "@/lib/data/site";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import {
  GalleryGrid,
  type GalleryPhoto,
} from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = pageMetadata({
  title: "Gallery — Real Jowam Classes",
  description:
    "Real photos from Jowam Coffee Training Centre — espresso drills, latte art, manual brewing, and roasting sessions in Nairobi.",
  path: "/gallery",
});

const photos: GalleryPhoto[] = [
  {
    publicId: images.gallery.espressoShots,
    alt: "Student pulling espresso shots",
    category: "Barista",
  },
  {
    publicId: images.gallery.machineDrills,
    alt: "Machine drills on the bar",
    category: "Barista",
  },
  {
    publicId: images.gallery.latteArt,
    alt: "Latte art practice",
    category: "Barista",
  },
  {
    publicId: images.gallery.extractionModule,
    alt: "Extraction and roasting module",
    category: "Roasting",
  },
  {
    publicId: images.gallery.manualBrewing,
    alt: "Manual brewing session",
    category: "Brewing",
  },
  {
    publicId: images.gallery.finalAssessment,
    alt: "Final practical assessment",
    category: "Assessment",
  },
  {
    publicId: images.facilities.espressoLab,
    alt: "The espresso training lab",
    category: "Facility",
  },
  {
    publicId: images.facilities.brewingStudio,
    alt: "The brewing studio",
    category: "Facility",
  },
];

const instagram = site.social.find((s) => s.icon === "instagram");

export default function GalleryPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Inside our classes"
            lead="Every photo is a real Jowam class — no stock imagery. Tap any image to view it larger."
          />
          <div className="mt-10">
            <GalleryGrid photos={photos} />
          </div>
        </Container>
      </section>

      {/* Instagram */}
      <section className="section-y bg-paper">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Follow along"
            title="See new classes every week"
            lead="We post fresh photos and intake dates on Instagram."
          />
          {instagram && (
            <div className="mt-8 flex justify-center">
              <ButtonLink variant="primary" href={instagram.href} external>
                <InstagramIcon size={20} />
                Follow @jowam_coffee_training_centre
              </ButtonLink>
            </div>
          )}
        </Container>
      </section>

      <WhatsAppButton message="Hi, I saw your gallery and I'd like to know more about your courses." />
    </>
  );
}
