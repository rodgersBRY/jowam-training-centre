/**
 * Reusable "why choose us" list — same underlying content, rendered with a
 * different presentation on the homepage and the About page.
 */
export type WhyChooseUsIcon = "user" | "coffee" | "calendar" | "repeat";

export type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: WhyChooseUsIcon;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Named expert instructors",
    description:
      "Learn directly from named, experienced baristas and roasters — not a rotating cast of trainers.",
    icon: "user",
  },
  {
    title: "Professional equipment",
    description:
      "Train on the same commercial espresso machines, grinders, and drum roasters used in working cafés and roasteries.",
    icon: "coffee",
  },
  {
    title: "Real depth, not a crash course",
    description:
      "Our flagship courses run five full weeks — enough time to build muscle memory, not just watch a demo.",
    icon: "calendar",
  },
  {
    title: "Weekly intakes",
    description:
      "A new intake starts every Monday, so you never have to wait months for a class to fill up.",
    icon: "repeat",
  },
];
