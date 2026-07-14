export type BlogSection = {
  heading?: string;
  /** Paragraphs of body copy. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description + card excerpt. */
  description: string;
  /** ISO date. */
  date: string;
  readMinutes: number;
  keywords: string[];
  /** Slug of the course this article links to (CONTENT-SEO §5). */
  relatedCourse: string;
  sections: BlogSection[];
  /** Cover image (Cloudinary id or full URL). Falls back to a stock photo when unset. */
  image?: string;
};

/**
 * Launch blog set (CONTENT-SEO §5). Single source of truth — rendered by the
 * blog pages and listed in the sitemap. New articles publish monthly.
 */
export const posts: BlogPost[] = [
  {
    slug: "how-much-does-a-barista-course-cost-in-nairobi",
    title: "How much does a barista course cost in Nairobi?",
    description:
      "A clear breakdown of what barista training costs in Nairobi in 2026, what's included, and how M-PESA installment plans work.",
    date: "2026-07-01",
    readMinutes: 5,
    keywords: ["barista course cost Nairobi", "barista course price Kenya"],
    relatedCourse: "professional-barista-course",
    sections: [
      {
        body: [
          "If you're searching for a barista course in Nairobi, the first thing you want to know is the price — and how much you actually get for it. Course fees in Nairobi range widely, from short weekend workshops to full professional programmes, so it pays to compare like for like.",
          "At Jowam Coffee Training Centre, pricing is published openly. Our Professional Barista Course is KES 45,000 for five weeks, the Professional Roasting Course is KES 50,000 for five weeks, and the Basic Refresher Training is KES 25,000 for two weeks.",
        ],
      },
      {
        heading: "What the fee includes",
        body: [
          "A good course fee covers more than class time. At Jowam, your fee includes hands-on hours on professional espresso machines and grinders, all training materials, milk and coffee for practice, and a certificate on completion. There are no surprise extras.",
        ],
      },
      {
        heading: "Paying in installments",
        body: [
          "You don't have to pay everything up front. Every Jowam course can be split into two or three M-PESA installments. On a KES 45,000 course, that can mean a first payment of KES 15,000 to secure your place, with the balance spread across the course.",
        ],
      },
      {
        heading: "Is it worth it?",
        body: [
          "A five-week professional course pays for itself quickly once you're employed. Baristas in Nairobi's growing café scene are in steady demand, and trained roasters even more so. The right course is an investment in a career, not just a class.",
        ],
      },
    ],
  },
  {
    slug: "barista-salary-in-kenya-2026",
    title: "Barista salary in Kenya (2026)",
    description:
      "What baristas earn in Kenya in 2026, how experience and skills affect pay, and how to move up the ladder.",
    date: "2026-06-15",
    readMinutes: 6,
    keywords: ["barista salary Kenya", "how much do baristas earn Kenya"],
    relatedCourse: "professional-barista-course",
    sections: [
      {
        body: [
          "Coffee culture in Kenya has grown fast, and with it the demand for skilled baristas. If you're considering barista training, it's fair to ask what the job actually pays.",
        ],
      },
      {
        heading: "Typical earnings",
        body: [
          "Entry-level baristas in Nairobi typically start on a modest monthly wage plus tips, with pay rising steadily as skills and speed improve. Baristas who can pour consistent latte art, dial in espresso, and run a busy bar command noticeably higher pay than those who cannot.",
        ],
      },
      {
        heading: "What raises your pay",
        body: ["Three things move a barista's earnings the most:"],
        list: [
          "Skill and consistency — clean espresso and reliable milk work",
          "Speed under pressure during peak service",
          "Certification and a strong reference from a recognised trainer",
        ],
      },
      {
        heading: "Moving up",
        body: [
          "The best-paid coffee professionals rarely stop at barista. Head barista, café supervisor, trainer, and roaster roles all pay more — and all build on the same foundation you get in a professional barista course.",
        ],
      },
    ],
  },
  {
    slug: "how-to-become-a-barista-in-nairobi-with-no-experience",
    title: "How to become a barista in Nairobi with no experience",
    description:
      "A step-by-step guide to starting a barista career in Nairobi from zero — training, practice, and getting hired.",
    date: "2026-06-01",
    readMinutes: 6,
    keywords: [
      "how to become a barista Nairobi",
      "barista training no experience",
    ],
    relatedCourse: "professional-barista-course",
    sections: [
      {
        body: [
          "You don't need experience to become a barista — you need the right training and enough hands-on practice to build confidence. Here's how to start from scratch in Nairobi.",
        ],
      },
      {
        heading: "1. Learn the fundamentals properly",
        body: [
          "Start with a structured course that teaches espresso extraction, milk texturing, and the core drinks. Learning on real commercial equipment matters — home practice can't replicate a busy bar.",
        ],
      },
      {
        heading: "2. Put in the practice hours",
        body: [
          "Skill comes from reps. A good course gives you enough machine time to pour hundreds of drinks before you ever face a paying customer. That's how latte art and speed become second nature.",
        ],
      },
      {
        heading: "3. Get certified and get hired",
        body: [
          "A recognised certificate and a reference from your trainer open doors. Many Jowam graduates are hired before they even finish the course, because employers trust the standard of training.",
        ],
      },
    ],
  },
  {
    slug: "what-does-a-coffee-roaster-do-and-how-to-become-one-in-kenya",
    title: "What does a coffee roaster do — and how to become one in Kenya",
    description:
      "Inside the craft of coffee roasting: what roasters do day to day, the skills involved, and how to train as a roaster in Kenya.",
    date: "2026-05-15",
    readMinutes: 7,
    keywords: ["coffee roaster Kenya", "how to become a coffee roaster"],
    relatedCourse: "professional-roasting-course",
    sections: [
      {
        body: [
          "Kenya grows some of the world's most sought-after coffee, yet skilled roasters remain rare here. That makes roasting one of the most promising — and least contested — careers in Kenyan coffee.",
        ],
      },
      {
        heading: "What a roaster actually does",
        body: [
          "A roaster selects and grades green coffee, develops roast profiles, operates the roaster, and evaluates every batch through cupping. The goal is to bring out the best in each coffee and reproduce that result consistently.",
        ],
      },
      {
        heading: "The skills involved",
        body: ["Roasting blends craft and science. A professional roaster can:"],
        list: [
          "Grade green coffee and spot defects",
          "Read and adjust a roast curve in real time",
          "Cup roasts to evaluate development and consistency",
          "Manage packaging, degassing, and shelf life",
        ],
      },
      {
        heading: "Training as a roaster",
        body: [
          "Roasting can't be learned from videos alone — you need time on an actual drum roaster with real green coffee. Jowam's five-week Professional Roasting Course is built entirely around that hands-on experience.",
        ],
      },
    ],
  },
  {
    slug: "manual-brewing-methods-explained",
    title:
      "Manual brewing methods explained: V60, Chemex, AeroPress, French press",
    description:
      "A friendly guide to the four essential manual brewing methods — how each one works and what it does to the cup.",
    date: "2026-05-01",
    readMinutes: 7,
    keywords: ["manual brewing methods", "V60 Chemex AeroPress French press"],
    relatedCourse: "professional-barista-course",
    sections: [
      {
        body: [
          "Espresso is only half the story. Manual brewing lets you highlight the delicate flavours in great coffee — and mastering it makes you a more complete barista. Here are the four methods every professional should know.",
        ],
      },
      {
        heading: "V60",
        body: [
          "A cone-shaped pour-over that produces a clean, bright, tea-like cup. Control comes from your grind, water temperature, and pour technique — which is exactly why it's a favourite training tool.",
        ],
      },
      {
        heading: "Chemex",
        body: [
          "Similar to the V60 but with a thicker filter that removes more oils, giving an especially clean and crisp cup. Beautiful to serve and forgiving once you learn the pour.",
        ],
      },
      {
        heading: "AeroPress",
        body: [
          "A versatile immersion-and-pressure brewer that's fast, portable, and hard to get wrong. Great for a bold, full-bodied cup and endlessly tweakable.",
        ],
      },
      {
        heading: "French press",
        body: [
          "Full immersion with a metal filter for a rich, heavy body. The simplest method to learn and a great way to understand extraction before moving to more technical brewers.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-in-your-first-week-of-barista-training",
    title: "What to expect in your first week of barista training",
    description:
      "Nervous about starting? Here's exactly what happens in your first week of barista training at Jowam.",
    date: "2026-04-15",
    readMinutes: 5,
    keywords: ["barista training first week", "what to expect barista course"],
    relatedCourse: "professional-barista-course",
    sections: [
      {
        body: [
          "Starting something new is always a little nerve-wracking. If you're about to begin barista training, here's what your first week actually looks like — so you can walk in relaxed and ready.",
        ],
      },
      {
        heading: "Day one: coffee and the machine",
        body: [
          "You'll start with the basics of coffee itself — where it comes from and how it gets to the cup — then meet the espresso machine and grinder. No pressure, just getting comfortable with the tools.",
        ],
      },
      {
        heading: "Pulling your first shots",
        body: [
          "By mid-week you'll be pulling espresso and learning how grind, dose, and time change the shot. Expect to make mistakes — that's the point. Every good barista started exactly here.",
        ],
      },
      {
        heading: "Steaming milk",
        body: [
          "The first week usually ends with milk. Getting silky microfoam takes practice, and you'll get plenty of it. By Friday, most students have poured their first recognisable latte pattern.",
        ],
      },
      {
        heading: "The mindset",
        body: [
          "Come curious and patient. Skill builds through repetition, and our instructors are with you at every step. One week in, you'll already feel the difference.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Most recent posts first, newest `n` (default 5). */
export function getRecentPosts(n = 5): BlogPost[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
