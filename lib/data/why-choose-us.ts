/**
 * Reusable "why choose us" list — same underlying content, rendered with a
 * different presentation on the homepage and the About page.
 */
export type WhyChooseUsIcon =
  | "user"
  | "coffee"
  | "calendar"
  | "repeat"
  | "award"
  | "globe"
  | "clock";

export type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: WhyChooseUsIcon;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Industry Certification",
    description:
      "Graduate with a certificate recognised by cafés and roasteries across Kenya — proof you can back up on day one of the job.",
    icon: "award",
  },
  {
    title: "Curriculum with international recognition",
    description:
      "Our syllabus is benchmarked against international barista and roasting standards, not just local shop practice.",
    icon: "globe",
  },
  {
    title: "Professional equipment",
    description:
      "Train on the same commercial espresso machines, grinders, and drum roasters used in working cafés and roasteries.",
    icon: "coffee",
  },
  {
    title: "Experienced & certified instructors",
    description:
      "Learn directly from named, experienced baristas and roasters — not a rotating cast of trainers.",
    icon: "user",
  },
  {
    title: "Flexible schedules and short courses",
    description:
      "Weekly intakes and both full and short-course formats mean you can start training around work or family commitments.",
    icon: "clock",
  },
];
