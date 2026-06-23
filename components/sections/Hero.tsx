import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      {/* Video background: add <source src="/hero.mp4" type="video/mp4" /> and replace poster with a local image before launch */}
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange">
          Jowam Coffee Training Centre
        </p>
        <h1 className="text-5xl font-bold leading-tight text-cream sm:text-6xl lg:text-7xl">
          Coffee Education That Fits Your Schedule
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
          Daytime classes, evening online theory, Saturday hands-on practicals —
          flexible barista training for modern learners in Nairobi.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/apply">Enroll Now</Button>
          <Button
            href="/courses"
            variant="ghost"
            className="ring-1 ring-cream/40 text-cream hover:bg-cream/10 hover:text-cream"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
