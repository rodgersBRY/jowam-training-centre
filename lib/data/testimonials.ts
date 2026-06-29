export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Grace Wanjiru",
    role: "Barista, Java House Westgate",
    quote:
      "Before Jowam I had been trying to break into specialty coffee for two years. Six weeks later I had my first job offer. The Saturday practical sessions made the difference — real machines, real pressure, real feedback.",
  },
  {
    name: "Daniel Omondi",
    role: "Owner, Sip & Co. Coffee Bar, Kisumu",
    quote:
      "I sent three of my staff through the Barista Fundamentals course and the improvement was immediate. Consistency improved, waste dropped, and my customers noticed the quality. Best training investment I have made.",
  },
  {
    name: "Faith Achieng",
    role: "Lead Barista, Nairobi Chai — Cohort 12 Graduate",
    quote:
      "What I loved was that nobody made me feel behind. The instructors meet you where you are and push you forward. I went from knowing nothing to running a café bar in under two months.",
  },
];
