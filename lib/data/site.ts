import { getNextIntakeDate, formatIntakeDate } from "@/lib/utils/intake";

/**
 * Canonical site identity — the single source of truth for NAP.
 * Used identically across footer, schema, and metadata (CONTENT-SEO §9).
 */
export const site = {
  name: "Jowam Coffee Training Centre",
  shortName: "Jowam",
  tagline: "Professional Barista & Coffee Roasting Training",
  description:
    "Jowam Coffee Training Centre is Nairobi's hands-on home for professional barista and coffee roasting education — small classes, real espresso machines and drum roasters, named expert instructors, and a curriculum built around what employers actually look for. Weekly intakes, transparent pricing, and flexible installments make it easy to start.",
  // Set to the production origin before launch.
  url: "https://jowamtrainingcentre.co.ke",
  developer: {
    name: "Zubariq Ventures",
    whatsapp: "254712413243",
  },

  contact: {
    phones: [
      { display: "+254 722 938 905", raw: "254722938905" },
      { display: "+254 722 762 945", raw: "254722762945" },
      { display: "+254 715 063 117", raw: "254715063117" },
    ],
    whatsapp: "254715063117",
    email: "info@jowamtrainingcentre.co.ke",
  },

  address: {
    building: "Pension Towers, 4th Floor",
    street: "Loita Street",
    locality: "Nairobi",
    region: "Nairobi",
    country: "KE",
    full: "Pension Towers, 4th Floor, Loita Street, Nairobi",
    // Coordinates for Pension Towers, Loita Street.
    geo: { lat: -1.2836815663577816, long: 36.81789515767134 },
    mapEmbed:
      "https://www.google.com/maps?q=Jowam+Training+Centre&output=embed",
  },

  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
  ],

  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/jowam_coffee_training_centre/",
      icon: "instagram" as const,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@jowam.coffee.trai?is_from_webapp=1&sender_device=pc",
      icon: "tiktok" as const,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/JowamCoffeeTrainingCentre/",
      icon: "facebook" as const,
    },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/**
 * The next intake label shown in the header pill and on key pages. Intakes
 * run weekly, every Monday — computed automatically, nothing to update by
 * hand. Since pages are statically generated, this reflects "next Monday as
 * of the last deploy," not live per-request.
 */
export const nextIntake = formatIntakeDate(getNextIntakeDate());

/** Pre-filled WhatsApp deep link with an optional message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
