export type FaqItem = {
  question: string;
  answer: string;
  /** Optional grouping; used to pull course-specific FAQs. */
  scope?: "general" | "cost" | "schedule" | "certificate";
};

/**
 * Sitewide FAQ content (CONTENT-SEO §4 FAQ). Rendered on /faq and, in
 * preview form, on the homepage. Marked up with FAQPage schema.
 */
export const faqs: FaqItem[] = [
  {
    question: "How much do the courses cost?",
    answer:
      "The Professional Barista Course is KES 45,000, the Professional Roasting Course is KES 50,000, and the Basic Refresher Training is KES 25,000. Prices are published openly and can be paid in full or in M-PESA installments.",
    scope: "cost",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes. Every course can be paid in full or split into two or three M-PESA installments. Use the installment calculator on any course page to see the exact split.",
    scope: "cost",
  },
  {
    question: "When is the next intake?",
    answer:
      "We run a new intake every month. The current next intake date is shown in the header and on every course page.",
    scope: "schedule",
  },
  {
    question: "How long are the courses?",
    answer:
      "The Professional Barista and Professional Roasting courses each run for 5 weeks. The Basic Refresher Training runs for 2 weeks.",
    scope: "schedule",
  },
  {
    question: "What are the entry requirements?",
    answer:
      "No prior experience is required for the Professional Barista or Roasting courses — we start from the fundamentals. The Basic Refresher Training is designed for people who already have some barista experience.",
    scope: "general",
  },
  {
    question: "What are the class times?",
    answer:
      "Classes run on weekdays during business hours, with practical sessions on Saturdays. Exact timetables are shared on enrollment so you can plan around work.",
    scope: "schedule",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes. On successful completion you receive a Jowam certificate recognised by industry partners, awarded after your practical assessment.",
    scope: "certificate",
  },
  {
    question: "Will this help me get a job?",
    answer:
      "Our training is built around what employers actually need on the bar and in the roastery. Graduates go on to barista, senior barista, and production roasting roles, and many use the skills to start their own coffee businesses.",
    scope: "general",
  },
  {
    question: "Where are you located?",
    answer:
      "Jowam Coffee Training Centre is at Pension Towers, 4th Floor, Loita Street, in Nairobi CBD — easy to reach by matatu or on foot from the city centre.",
    scope: "general",
  },
];
