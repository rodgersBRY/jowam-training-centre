import type { Metadata } from "next";
import { Intake } from "@/components/sections/Intake";
import { ApplicationProcess } from "@/components/sections/ApplicationProcess";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to Jowam Coffee Training Centre. Monthly intakes, flexible learning paths, and a straightforward application process.",
  keywords: [
    "apply barista course Kenya",
    "coffee school admissions Nairobi",
    "barista training enrol",
  ],
};

export default function AdmissionsPage() {
  return (
    <div className="pt-16">
      <Intake />
      <ApplicationProcess />
      <FinalCTA />
    </div>
  );
}
