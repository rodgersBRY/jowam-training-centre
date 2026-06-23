import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// PLACEHOLDER: replace with real facilities content and photos before launch.
const items = [
  {
    title: "Espresso Lab",
    description: "PLACEHOLDER — Professional-grade espresso machines used by working baristas.",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Espresso training lab",
  },
  {
    title: "Brewing Studio",
    description: "PLACEHOLDER — Full range of manual brewing equipment for specialty coffee.",
    src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&q=80",
    alt: "Coffee brewing studio",
  },
  {
    title: "Online Classroom",
    description: "PLACEHOLDER — Live-streamed theory sessions accessible from anywhere in Kenya.",
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
    alt: "Online learning setup",
  },
];

export function Facilities() {
  return (
    <section className="bg-dark py-20 text-cream">
      <Container>
        <SectionHeading
          eyebrow="Our Facilities"
          title="Where You Will Train"
          intro="PLACEHOLDER — State-of-the-art equipment in a welcoming environment designed for focused learning."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl">
              <div className="relative h-48">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
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
