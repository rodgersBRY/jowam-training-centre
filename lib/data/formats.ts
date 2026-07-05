import { images } from "@/lib/data/images";
import { site } from "@/lib/data/site";

/** The two delivery formats a course can be taken in. */
export type ClassFormat = "in-person" | "online";

export type FormatInfo = {
  id: ClassFormat;
  label: string;
  blurb: string;
  whatsIncluded: string[];
  /** Cloudinary public id illustrating the format. */
  image: string;
};

const saturday =
  site.hours.find((h) => h.days.toLowerCase().startsWith("sat"))?.time ??
  "Saturdays";

/**
 * Format-agnostic copy, kept in one place so the course page and any future
 * surfaces stay consistent. Prices are per-course and live in courses.ts.
 */
export const formatInfo: Record<ClassFormat, FormatInfo> = {
  "in-person": {
    id: "in-person",
    label: "In-person",
    blurb:
      "Weekday classes at our Nairobi CBD facility, with full hands-on access to professional machines, grinders, and roasters throughout the course.",
    whatsIncluded: [
      "Weekday classes at the CBD facility",
      "Full hands-on equipment time",
      "All training materials and practice coffee",
    ],
    image: images.facilities.espressoLab,
  },
  online: {
    id: "online",
    label: "Online",
    blurb: `Learn live from anywhere, then get real machine and roaster time at our CBD facility during weekly in-person Saturday practicals (${saturday})`,
    whatsIncluded: [
      "Live online classes you can join from anywhere",
      `Weekly in-person Saturday practicals (${saturday}) — included`,
      "Same certificate and curriculum as the in-person course",
    ],
    image: images.facilities.onlineClassroom,
  },
};

export const formatLabels: Record<ClassFormat, string> = {
  "in-person": formatInfo["in-person"].label,
  online: formatInfo.online.label,
};
