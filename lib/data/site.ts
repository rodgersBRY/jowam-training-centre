// PLACEHOLDER — replace with real content before launch.

export const site = {
  name: "Jowam Coffee Training Centre",
  tagline: "Learn Anywhere. Practice Like a Professional.",
  contact: {
    phone: "+254 700 000 000", // PLACEHOLDER
    whatsapp: "+254700000000", // PLACEHOLDER (digits only, used in wa.me link)
    email: "hello@example.com", // PLACEHOLDER
    location: "Nairobi, Kenya", // PLACEHOLDER
  },
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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
