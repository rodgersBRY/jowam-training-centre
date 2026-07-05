import Image from "next/image";
import { images } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facilityFeatures = [
  {
    title: "Espresso Lab",
    description:
      "Commercial La Marzocco group heads, calibrated daily. Students rotate through every position — barista, grinder tech, and trainer — across each session.",
    imagePublicId: images.facilities.espressoLab,
    alt: "La Marzocco espresso machine in the Jowam espresso lab",
  },
  {
    title: "Brewing Studio",
    description:
      "Aeropress, Chemex, V60, and batch-brew rigs alongside refractometers and calibrated scales. Manual brewing sessions run parallel to espresso so students understand the full extraction spectrum.",
    imagePublicId: images.facilities.brewingStudio,
    alt: "Manual brewing equipment — V60 and Chemex — set up in the Jowam brewing studio",
  },
];

export function FacilitySection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="The training lab"
          title="Real equipment. Real environment."
          lead="We run the same machines you will find in Nairobi's top specialty cafés and hotels. When you graduate, the hardware is already familiar."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {facilityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[12px] overflow-hidden border border-line shadow-(--shadow-card)"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={cloudinaryUrl(feature.imagePublicId, {
                    width: 800,
                    height: 450,
                    crop: "fill",
                  })}
                  alt={feature.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-(length:--text-h3) text-roast">
                  {feature.title}
                </h3>
                <p className="mt-3 text-(length:--text-body) text-brand-brown leading-[1.65]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide shot — Saturday practical */}
        <div className="mt-8 relative aspect-21/9 w-full overflow-hidden rounded-[12px]">
          <Image
            src={cloudinaryUrl(images.saturdayPractical, {
              width: 1400,
              height: 600,
              crop: "fill",
            })}
            alt="Students during a Saturday practical session at Jowam Coffee Training Centre, Pension Towers Nairobi"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-scrim" aria-hidden="true" />
          <p className="absolute bottom-6 left-6 text-paper font-semibold text-small uppercase tracking-widest">
            Saturday practical session — Pension Towers, Loita Street
          </p>
        </div>
      </Container>
    </section>
  );
}
