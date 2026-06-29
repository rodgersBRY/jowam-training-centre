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
            <div className="mt-4 space-y-4 text-coffee/80">
              <p>
                Jowam Coffee Training Centre started on the 4th floor of Pension Towers on Loita Street in Nairobi CBD, with
                six students, two espresso machines, and one conviction — that quality coffee
                training should not cost a year of your salary or require you to quit your job to
                attend.
              </p>
              <p>
                We built our curriculum around Kenya&apos;s coffee reality: a growing specialty
                scene, employers who struggle to find consistently trained staff, and thousands of
                talented people who cannot access conventional full-time programmes. The result was
                a model that combines online theory with Saturday practicals — rigorous enough to
                matter, flexible enough to work.
              </p>
              <p>
                Today, Jowam graduates are behind the bars of some of Kenya&apos;s most respected
                coffee shops. We are proud of every one of them — and proud that their journeys
                began here.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-auto lg:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
              alt="Students training at Jowam Coffee Training Centre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
