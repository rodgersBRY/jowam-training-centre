import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { images } from "@/lib/data/images";

const practicals = [
  {
    skill: "Espresso Extraction",
    description: "Dial in grind size, dose, and yield on professional machines.",
  },
  {
    skill: "Milk Steaming",
    description: "Master temperature, texture, and microfoam technique.",
  },
  {
    skill: "Latte Art",
    description: "Pour rosettas, tulips, and hearts under instructor guidance.",
  },
  {
    skill: "Brewing Methods",
    description: "V60, Chemex, AeroPress — manual brewing fundamentals.",
  },
];

export function SaturdayPractical() {
  return (
    <section className="bg-coffee py-20 text-cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
              Every Saturday
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Hands-On Practical Training
            </h2>
            <p className="mt-4 text-cream/70">
              All Jowam students attend Saturday practicals — mandatory hands-on sessions where
              theory becomes skill. Every week you are behind a real espresso machine.
            </p>
            <ul className="mt-8 space-y-4">
              {practicals.map((item) => (
                <li key={item.skill} className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <div>
                    <p className="font-semibold text-cream">{item.skill}</p>
                    <p className="text-sm text-cream/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/admissions">Learn about intake</Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-125">
            <Image
              src={cloudinaryUrl(images.saturdayPractical, { width: 800 })}
              alt="Barista training session at Jowam Coffee Training Centre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
