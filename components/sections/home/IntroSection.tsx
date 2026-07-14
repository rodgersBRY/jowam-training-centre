import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data/site";
import { stockImages } from "@/lib/data/stock-images";

/** Brief "about the school" intro — sits right after the hero. */
export function IntroSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading eyebrow="About the school" title="A coffee school built on real equipment" />
            <p className="mt-6 text-(length:--text-body) leading-[1.65] text-brand-brown measure">
              {site.description}
            </p>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-card">
            <Image
              src={stockImages.introSection}
              alt="Baristas training on professional espresso equipment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
