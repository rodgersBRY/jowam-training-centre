export type Course = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  price: number;
  curriculum: string[];
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: "basic-barista",
    title: "Basic Barista Course",
    summary:
      "The perfect starting point for anyone new to coffee. In two focused weeks you will learn to operate an espresso machine, steam milk, and prepare the drinks guests order most.",
    duration: "2 weeks",
    price: 25000,
    curriculum: [
      "Coffee origins and the bean-to-cup journey",
      "Introduction to espresso machines and grinders",
      "Pulling your first espresso shots",
      "Milk steaming and basic texturing",
      "Core drinks: Americano, latte, cappuccino, flat white",
      "Café hygiene and food safety basics",
      "Customer service fundamentals",
    ],
    outcomes: [
      "Operate a commercial espresso machine safely and confidently",
      "Prepare and serve the most common café drinks to a consistent standard",
      "Meet the expectations of entry-level barista roles in Kenya",
      "Build a foundation for the Professional Barista Course",
    ],
  },
  {
    slug: "professional-barista",
    title: "Professional Barista Course",
    summary:
      "A comprehensive five-week programme that takes you from barista basics to full professional competency — covering espresso science, manual brewing, latte art, and café operations.",
    duration: "5 weeks",
    price: 45000,
    curriculum: [
      "Coffee origins, varietals, and processing methods",
      "Espresso extraction science and grinder calibration",
      "Advanced milk texturing and microfoam technique",
      "Latte art: heart, tulip, and rosetta patterns",
      "Manual brewing: V60, Aeropress, French press, and Chemex",
      "Coffee cupping and sensory evaluation",
      "Workflow, bar organisation, and speed under pressure",
      "Café operations and stock management",
      "Customer service excellence and upselling",
      "Health, hygiene, and food safety certification",
    ],
    outcomes: [
      "Work confidently as a professional barista in any café environment",
      "Execute signature latte art patterns on every pour",
      "Calibrate an espresso grinder and dial in a shot from scratch",
      "Lead a café bar during peak service hours",
      "Receive a Jowam Certificate of Completion recognised by industry partners",
    ],
  },
  {
    slug: "coffee-roasting",
    title: "Coffee Roasting",
    summary:
      "A deep-dive into the craft of coffee roasting. Over five weeks you will learn to evaluate green coffee, develop roast profiles, operate a drum roaster, and produce market-ready batches.",
    duration: "5 weeks",
    price: 50000,
    curriculum: [
      "Green coffee: sourcing, grading, and defect analysis",
      "East African coffee origins and flavour characteristics",
      "Roasting chemistry — the Maillard reaction and development time",
      "Drum roaster operation and safety procedures",
      "Building and documenting roast profiles",
      "Roast colour analysis and quality control",
      "Cupping for roast evaluation and consistency",
      "Packaging, shelf life, and degassing",
      "Blending principles for espresso and filter",
      "Setting up and managing a small roasting operation",
    ],
    outcomes: [
      "Operate a drum roaster independently and safely",
      "Develop, document, and reproduce roast profiles",
      "Evaluate roast quality through cupping and colour grading",
      "Source and assess green coffee for quality and traceability",
      "Launch or manage a small-scale coffee roasting business",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return `KES ${price.toLocaleString("en-KE")}`;
}
