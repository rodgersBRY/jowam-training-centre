import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { images } from "@/lib/data/images";

const items = [
  {
    title: "Espresso Lab",
    description:
      "Six professional-grade espresso machines — the same models found in Kenya's leading specialty cafés. Every student gets hands-on machine time each Saturday, not just demonstration time.",
    publicId: images.facilities.espressoLab,
    alt: "Professional espresso machines in the Jowam training lab",
  },
  {
    title: "Brewing Studio",
    description:
      "A dedicated manual brewing station equipped with V60, Aeropress, Chemex, and French press gear. Students rotate through every method, building a full repertoire of brew skills.",
    publicId: images.facilities.brewingStudio,
    alt: "Manual brewing studio with various coffee equipment",
  },
  {
    title: "Online Classroom",
    description:
      "Live-streamed theory sessions built for low-bandwidth connections. Join from anywhere in Kenya — every session is recorded so you can catch up within the same week if you miss one. Practicals are held at our CBD campus on Loita Street.",
    publicId: images.facilities.onlineClassroom,
    alt: "Online learning setup for Jowam theory sessions",
  },
];

export function Facilities() {
  return (
    <section className="bg-dark py-20 text-cream">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
            Our Facilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Where You Will Train
          </h2>
          <p className="mt-4 text-base text-cream/70">
            Professional equipment in a focused learning environment. We invested in the same
            tools the industry uses so there is no adjustment period when you step into a real
            café bar.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl">
              <div className="relative h-48">
                <Image src={cloudinaryUrl(item.publicId, { width: 600 })} alt={item.alt} fill className="object-cover" />
              </div>
              <div className="bg-coffee/40 p-4">
                <h3 className="font-bold text-cream">{item.title}</h3>
                <p className="mt-1 text-sm text-cream/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
