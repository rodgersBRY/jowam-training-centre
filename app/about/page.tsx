import type { Metadata } from "next";
import { Story } from "@/components/sections/Story";
import { Mission } from "@/components/sections/Mission";
import { Philosophy } from "@/components/sections/Philosophy";
import { Facilities } from "@/components/sections/Facilities";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jowam Coffee Training Centre — our story, mission, teaching philosophy, and world-class training facilities in Nairobi.",
  keywords: [
    "about Jowam Coffee Training Centre",
    "barista school Nairobi",
    "coffee education Kenya",
    "coffee training facilities",
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Story />
      <Mission />
      <Philosophy />
      <Facilities />
    </div>
  );
}
