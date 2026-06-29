export const site = {
  name: "Jowam Coffee Training Centre",
  tagline: "Learn Anywhere. Practice Like a Professional.",
  contact: {
    phones: [
      { display: "+254 722 938 905", raw: "254722938905" },
      { display: "+254 722 762 945", raw: "254722762945" },
    ],
    whatsapp: "254722938905",
    email: "info@jowamtrainingcentre.com",
    location: "Pension Towers, 4th Floor, Loita Street, Nairobi CBD",
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
