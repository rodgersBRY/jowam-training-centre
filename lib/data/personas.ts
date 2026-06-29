export type Persona = {
  title: string;
  description: string;
  relevance: string;
};

export const personas: Persona[] = [
  {
    title: "Working Professionals",
    description:
      "Employed full-time but ready to pivot into coffee — or build the skills to run a café on the side.",
    relevance:
      "Theory runs online in the evenings. Practicals are every Saturday, so your Monday-to-Friday job stays untouched.",
  },
  {
    title: "University Students",
    description:
      "Building marketable skills alongside your degree so you can earn while you study or hit the ground running after graduation.",
    relevance:
      "Flexible scheduling means no conflicts with lecture timetables, and the full course fits within a single semester break.",
  },
  {
    title: "Entrepreneurs",
    description:
      "Planning to open a café or coffee kiosk and want to understand the craft before hiring — or training — your team.",
    relevance:
      "We offer group enrolment for business owners bringing their staff, with tailored scheduling to minimise downtime.",
  },
  {
    title: "Hospitality Workers",
    description:
      "Already in hotels, restaurants, or food service and looking for a formal credential that earns you a promotion or moves you into specialty coffee.",
    relevance:
      "Your service background gives you a head start. Most hospitality workers complete Barista Fundamentals in three weeks.",
  },
];
