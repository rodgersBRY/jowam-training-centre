import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FlexibleLearningPaths } from "@/components/sections/FlexibleLearningPaths";
import { WhyJowam } from "@/components/sections/WhyJowam";
import { CoursesOverview } from "@/components/sections/CoursesOverview";
import { SaturdayPractical } from "@/components/sections/SaturdayPractical";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Jowam Coffee Training Centre — Flexible Barista Training in Nairobi",
  description:
    "Flexible coffee education in Nairobi, Kenya. Daytime classes, evening online theory, Saturday hands-on practicals. Enroll today.",
  keywords: [
    "barista training Kenya",
    "coffee academy Nairobi",
    "barista course Kenya",
    "coffee training school Nairobi",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FlexibleLearningPaths />
      <WhyJowam />
      <CoursesOverview />
      <SaturdayPractical />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
