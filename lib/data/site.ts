export const site = {
  name: "Jowam Coffee Training Centre",
  tagline: "Learn Anywhere. Practice Like a Professional.",
  contact: {
    phone: "+254 712 345 678",
    whatsapp: "+254712345678",
    email: "info@jowamcoffee.com",
    location: "Westlands, Nairobi, Kenya",
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
