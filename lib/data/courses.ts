// PLACEHOLDER — replace with real content before launch.
// No pricing fields (per design spec: no pricing unless provided).

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
    title: "Barista Fundamentals", // PLACEHOLDER
    summary: "PLACEHOLDER — short course summary.",
    duration: "PLACEHOLDER — e.g. 4 weeks",
    curriculum: [
      "PLACEHOLDER curriculum item 1",
      "PLACEHOLDER curriculum item 2",
    ],
    outcomes: ["PLACEHOLDER outcome 1", "PLACEHOLDER outcome 2"],
  },
  {
    slug: "espresso-and-latte-art",
    title: "Espresso & Latte Art", // PLACEHOLDER
    summary: "PLACEHOLDER — short course summary.",
    duration: "PLACEHOLDER — e.g. 6 weeks",
    curriculum: [
      "PLACEHOLDER curriculum item 1",
      "PLACEHOLDER curriculum item 2",
    ],
    outcomes: ["PLACEHOLDER outcome 1", "PLACEHOLDER outcome 2"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
