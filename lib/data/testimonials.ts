export type Testimonial = {
  name: string;
  quote: string;
  course: string;
  /** Where the graduate works now (social proof — CONTENT-SEO §4). */
  workplace: string;
  /** Cloudinary public ID for the portrait, or null for an initial avatar. */
  image: string | null;
};

/**
 * Static testimonials — never a carousel (DESIGN §6). Maximum three per
 * page. Replace with real graduate quotes and portraits before launch.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Brian Otieno",
    quote:
      "I walked in never having touched an espresso machine. Five weeks later I was pulling clean shots and pouring rosettas. I had a job before the course even ended.",
    course: "Professional Barista Course",
    workplace: "Barista, Nairobi CBD café",
    image: null,
  },
  {
    name: "Aisha Mwangi",
    quote:
      "The roasting course is the real thing — actual green coffee, an actual roaster, and profiles I still use today. Jowam took me from curious to confident.",
    course: "Professional Roasting Course",
    workplace: "Production Roaster, specialty roastery",
    image: null,
  },
  {
    name: "Kevin Kariuki",
    quote:
      "I'd been on the bar for a year but had gaps. The refresher sharpened my milk work and speed in two weeks. Worth every shilling.",
    course: "Basic Refresher Training",
    workplace: "Senior Barista, hotel coffee bar",
    image: null,
  },
];
