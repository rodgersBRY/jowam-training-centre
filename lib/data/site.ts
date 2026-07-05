/**
 * Canonical site identity — the single source of truth for NAP.
 * Used identically across footer, schema, and metadata (CONTENT-SEO §9).
 */
export const site = {
  name: "Jowam Coffee Training Centre",
  shortName: "Jowam",
  tagline: "Barista & Coffee Roasting Training in Nairobi CBD",
  description:
    "Premium hands-on barista and coffee roasting training in Nairobi CBD. Monthly intakes, transparent pricing, M-PESA installments, and named expert instructors.",
  // Set to the production origin before launch.
  url: "https://jowamtrainingcentre.co.ke",
  legalPreparedBy: "Zubariq Ventures",

  contact: {
    phones: [
      { display: "+254 722 938 905", raw: "254722938905" },
      { display: "+254 722 762 945", raw: "254722762945" },
    ],
    whatsapp: "254722938905",
    email: "info@jowamtrainingcentre.co.ke",
  },

  address: {
    building: "Pension Towers, 4th Floor",
    street: "Loita Street",
    locality: "Nairobi CBD",
    region: "Nairobi",
    country: "KE",
    full: "Pension Towers, 4th Floor, Loita Street, Nairobi CBD",
    // Approx coordinates for Pension Towers, Loita Street.
    geo: { lat: -1.2841, lng: 36.8155 },
    mapEmbed:
      "https://www.google.com/maps?q=Pension+Towers+Loita+Street+Nairobi&output=embed",
  },

  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/jowam_coffee_training_centre/",
      icon: "instagram" as const,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/JowamCoffeeTrainingCentre/",
      icon: "facebook" as const,
    },
  ],

  nav: [
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/**
 * The next monthly intake label shown in the header pill and on key pages.
 * Update this once per month (CONTENT-SEO §2).
 */
export const nextIntake = "August 2026";

/** Pre-filled WhatsApp deep link with an optional message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
