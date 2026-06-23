import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// PLACEHOLDER: replace with real training photos before launch.
const photos = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Coffee training session",
    caption: "PLACEHOLDER caption",
  },
  {
    src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
    alt: "Espresso machine training",
    caption: "PLACEHOLDER caption",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Latte art practice",
    caption: "PLACEHOLDER caption",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    alt: "Students learning",
    caption: "PLACEHOLDER caption",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
    alt: "Barista skills",
    caption: "PLACEHOLDER caption",
  },
  {
    src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&q=80",
    alt: "Coffee brewing",
    caption: "PLACEHOLDER caption",
  },
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
              key={photo.src}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-cream">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
