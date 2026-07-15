import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/interactive/Reveal";
import { PhotoMarquee, type MarqueeImage } from "@/components/interactive/PhotoMarquee";
import { site } from "@/lib/data/site";
import { images } from "@/lib/data/images";

// A wide mix of real training-floor photography for the moving strip.
const strip: MarqueeImage[] = [
  { publicId: images.gallery.espressoShots, alt: "Students pulling espresso shots" },
  { publicId: images.gallery.latteArt, alt: "Latte art practice on freshly poured drinks" },
  { publicId: images.facilities.espressoLab, alt: "The espresso training lab" },
  { publicId: images.gallery.machineDrills, alt: "Machine drills on commercial equipment" },
  { publicId: images.gallery.manualBrewing, alt: "Manual brewing pour-over session" },
  { publicId: images.facilities.brewingStudio, alt: "The brewing studio" },
  { publicId: images.gallery.extractionModule, alt: "Extraction and roasting module" },
  { publicId: images.saturdayPractical, alt: "Saturday in-person practical session" },
];

/** Brief "about the school" intro — copy, then a moving strip of the floor. */
export function IntroSection() {
  return (
    <section className="section-y overflow-x-clip bg-paper">
      <Container>
        <Reveal className="mx-auto max-w-[94ch] text-center">
          <SectionHeading
            align="center"
            eyebrow=""
            title="Where Passion Became Purpose"
          />
          <p className="mt-6 text-(length:--text-body) leading-[1.65] text-brand-brown">
            {site.description}
          </p>
        </Reveal>
      </Container>

      <Reveal variant="fade" className="mt-14">
        <PhotoMarquee images={strip} durationSeconds={50} />
      </Reveal>
    </section>
  );
}
