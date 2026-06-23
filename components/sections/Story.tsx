import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Story() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-coffee sm:text-4xl">
              Where Jowam Began
            </h2>
            {/* PLACEHOLDER: replace with real brand story before launch */}
            <div className="mt-4 space-y-4 text-coffee/80">
              <p>
                PLACEHOLDER — Jowam Coffee Training Centre was founded with a simple belief: quality
                coffee education should be accessible to anyone, regardless of their schedule.
              </p>
              <p>
                PLACEHOLDER — From our first classroom in Nairobi, we set out to build a training
                programme that mirrors the real demands of the coffee industry while giving students
                the flexibility modern life requires.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-auto lg:h-[400px]">
            {/* PLACEHOLDER: replace with real brand/story photo before launch */}
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
              alt="Jowam Coffee Training Centre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
