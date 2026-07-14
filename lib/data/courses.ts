export type SyllabusWeek = {
  /** 1-based week number, rendered as the timeline marker. */
  week: number;
  title: string;
  modules: string[];
};

export type Course = {
  slug: string;
  title: string;
  /** Short label for cards and nav. */
  shortTitle: string;
  summary: string;
  /** One-line hook used on cards and hero strips. */
  tagline: string;
  duration: string;
  weeks: number;
  /** In-person (weekday) course fee. */
  price: number;
  /**
   * Online delivery option. Present only for courses offered online. The fee
   * includes the weekly in-person Saturday practicals.
   */
  online?: { price: number };
  certificate: string;
  /** What a prospective student needs before joining this course. */
  requirements: string[];
  /** Pre-filled WhatsApp enquiry message for this course. */
  whatsappMessage: string;
  syllabus: SyllabusWeek[];
  outcomes: string[];
  careerOutcomes: string[];
  /** Target SEO keywords (CONTENT-SEO §4). */
  keywords: string[];
};

export const courses: Course[] = [
  {
    slug: "professional-barista-course",
    title: "Professional Barista Course",
    shortTitle: "Professional Barista",
    tagline: "From first shot to full professional competency in five weeks.",
    summary:
      "A comprehensive five-week programme that takes you from barista basics to full professional competency — espresso science, manual brewing, latte art, and café operations, taught hands-on on professional equipment.",
    duration: "5 weeks",
    weeks: 5,
    price: 45000,
    online: { price: 35000 },
    certificate: "Professional Barista Certificate",
    requirements: [
      "No prior barista experience required — we start from the fundamentals",
      "Minimum age 18",
      "Comfortable standing and working on your feet for practical sessions",
      "Valid ID or passport for enrollment",
    ],
    whatsappMessage:
      "Hi, I'd like to enroll in the Professional Barista Course.",
    syllabus: [
      {
        week: 1,
        title: "Coffee foundations",
        modules: [
          "Introduction to coffee",
          "Coffee processing",
          "Roasting",
          "Cupping",
        ],
      },
      {
        week: 2,
        title: "Brewing & machine operations",
        modules: [
          "Filter coffee brewing",
          "Grinder and espresso machine operations",
          "Grinder calibration",
          "Progressive espresso extraction",
        ],
      },
      {
        week: 3,
        title: "Milk & latte art",
        modules: [
          "Milk and pitcher selection",
          "Milk texturing",
          "Latte art",
        ],
      },
      {
        week: 4,
        title: "The drinks menu",
        modules: ["Espresso-based drinks", "Cold drinks"],
      },
      {
        week: 5,
        title: "Bar operations & service",
        modules: [
          "Workspace management",
          "Cleaning, maintenance & troubleshooting",
          "Customer service",
        ],
      },
    ],
    outcomes: [
      "Work confidently as a professional barista in any café environment",
      "Execute signature latte art patterns on every pour",
      "Calibrate an espresso grinder and dial in a shot from scratch",
      "Lead a café bar during peak service hours",
    ],
    careerOutcomes: [
      "Barista and senior barista roles in cafés, hotels, and restaurants",
      "Head barista and bar supervisor positions",
      "Foundation for opening your own coffee bar",
    ],
    keywords: [
      "professional barista course Nairobi",
      "barista course price Kenya",
      "latte art training Nairobi",
    ],
  },
  {
    slug: "professional-roasting-course",
    title: "Professional Coffee Roasting Course",
    shortTitle: "Professional Roasting",
    tagline: "Master green coffee, roast profiles, and the drum roaster.",
    summary:
      "A deep dive into the craft of coffee roasting. Over five weeks you will learn to evaluate green coffee, develop and document roast profiles, operate a drum roaster, and produce market-ready batches.",
    duration: "5 weeks",
    weeks: 5,
    price: 50000,
    online: { price: 40000 },
    certificate: "Professional Roasting Certificate",
    requirements: [
      "No prior roasting experience required — we start from the fundamentals",
      "Minimum age 18",
      "Comfortable working around heat and roasting equipment",
      "Valid ID or passport for enrollment",
    ],
    whatsappMessage:
      "Hi, I'd like to enroll in the Professional Roasting Course.",
    syllabus: [
      {
        week: 1,
        title: "Introduction to coffee",
        modules: ["Introduction to coffee"],
      },
      {
        week: 2,
        title: "Green coffee assessment",
        modules: ["Green coffee assessment"],
      },
      {
        week: 3,
        title: "Sensory analysis",
        modules: ["Sensory analysis"],
      },
      {
        week: 4,
        title: "Coffee roasting",
        modules: ["Coffee roasting"],
      },
      {
        week: 5,
        title: "The business of roasting",
        modules: ["Costing and management", "Marketing and branding"],
      },
    ],
    outcomes: [
      "Operate a drum roaster independently and safely",
      "Develop, document, and reproduce roast profiles",
      "Evaluate roast quality through cupping and colour grading",
      "Source and assess green coffee for quality and traceability",
    ],
    careerOutcomes: [
      "Production roaster roles with specialty coffee businesses",
      "Quality control and green-buying positions",
      "Launch or manage a small-scale roasting business",
    ],
    keywords: [
      "coffee roasting course Kenya",
      "coffee roasting training Nairobi",
      "roasting classes Nairobi",
    ],
  },
  {
    slug: "basic-refresher-training",
    title: "Basic Refresher Training",
    shortTitle: "Basic Refresher",
    tagline: "Sharpen the essentials in two focused weeks.",
    summary:
      "A two-week programme for working baristas sharpening their skills and employers upskilling café staff. Fast, practical, and focused on the fundamentals that matter most on the bar.",
    duration: "2 weeks",
    weeks: 2,
    price: 23000,
    certificate: "Jowam Certificate of Completion",
    requirements: [
      "Some prior barista or café experience recommended",
      "Minimum age 18",
      "Valid ID or passport for enrollment",
    ],
    whatsappMessage: "Hi, I'd like to enroll in the Basic Refresher Training.",
    syllabus: [
      {
        week: 1,
        title: "Espresso & milk refresh",
        modules: [
          "Espresso machine and grinder refresh",
          "Dialling in and shot consistency",
          "Milk steaming and texturing tune-up",
          "Core drinks to a consistent standard",
        ],
      },
      {
        week: 2,
        title: "Service, hygiene & assessment",
        modules: [
          "Speed and workflow on the bar",
          "Café hygiene and food safety refresh",
          "Customer service fundamentals",
          "Practical assessment",
        ],
      },
    ],
    outcomes: [
      "Operate a commercial espresso machine safely and confidently",
      "Serve the most common café drinks to a consistent standard",
      "Refresh speed and workflow for peak service",
    ],
    careerOutcomes: [
      "Return to the bar with renewed confidence",
      "Meet employer standards for café staff",
      "Corporate and café group training available on request",
    ],
    keywords: [
      "barista refresher course Nairobi",
      "short barista course Kenya",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return `KES ${price.toLocaleString("en-KE")}`;
}
