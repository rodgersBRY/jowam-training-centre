export type Course = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  curriculum: string[];
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: "barista-fundamentals",
    title: "Barista Fundamentals",
    summary:
      "Your entry point into professional coffee. This course builds the essential skills every barista needs — from understanding the bean to pulling a perfect espresso and serving customers with confidence.",
    duration: "4 weeks",
    curriculum: [
      "Coffee origins, varietals, and the bean-to-cup journey",
      "Espresso extraction science and grinder calibration",
      "Milk texturing, temperature, and consistency",
      "Manual brewing methods: V60, Aeropress, and French press",
      "Workflow, bar organisation, and speed drills",
      "Customer service standards and café etiquette",
      "Health, hygiene, and food safety basics",
    ],
    outcomes: [
      "Confidently operate a commercial espresso machine",
      "Understand and control the variables of coffee extraction",
      "Deliver consistent, high-quality drinks under pressure",
      "Meet entry-level standards expected by Kenyan coffee employers",
    ],
  },
  {
    slug: "espresso-and-latte-art",
    title: "Espresso & Latte Art",
    summary:
      "Built for working baristas ready to go beyond the basics. Master advanced espresso dialling, single-origin profiling, and develop the steady hands needed for signature latte art.",
    duration: "6 weeks",
    curriculum: [
      "Advanced espresso dialling — dose, yield, and time",
      "Single-origin espresso: profiling and flavour mapping",
      "Microfoam science — achieving perfect texture every pour",
      "Latte art foundations: heart, tulip, and rosetta",
      "Free-pour combinations and etching techniques",
      "Creating and documenting a signature drink menu",
      "Introduction to SCA competition standards",
    ],
    outcomes: [
      "Produce competition-grade espresso with consistency",
      "Execute five signature latte art patterns confidently",
      "Develop and document a personal dialling methodology",
      "Build a portfolio of original signature drinks",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
