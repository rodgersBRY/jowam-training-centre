/**
 * Central Cloudinary public-ID registry (CONTENT-SEO §8).
 * Format: "folder/filename" or bare public ID — no file extension.
 * Replace/extend as the client's real photo library grows.
 */
export const images = {
  // Homepage / course hero photography
  heroPoster: "Screenshot_2026-06-30_at_00.08.03_upk9ds",

  // About — story + facility
  story: "Screenshot_2026-06-30_at_00.08.03_upk9ds",
  saturdayPractical: "Screenshot_2026-06-30_at_00.08.28_g1h7t0",

  facilities: {
    espressoLab: "Screenshot_2026-06-30_at_00.59.32_gsmlz3",
    brewingStudio: "Screenshot_2026-06-30_at_00.10.38_dcblwh",
    onlineClassroom: "jowam/facility-online-classroom",
  },

  // Gallery — real class photos
  gallery: {
    espressoShots: "Screenshot_2026-06-30_at_01.18.59_i5jmbp",
    machineDrills: "Screenshot_2026-06-30_at_01.24.18_f7bxkz",
    latteArt: "Screenshot_2026-06-30_at_01.23.37_socglv",
    extractionModule: "Screenshot_2026-06-30_at_01.26.13_rqdk5n",
    manualBrewing: "Screenshot_2026-06-30_at_01.27.20_vboxzi",
    finalAssessment: "Screenshot_2026-06-30_at_00.08.45_zqtgg0",
  },
} as const;

/** Per-course hero image public IDs, keyed by course slug. */
export const courseImages: Record<string, string> = {
  "professional-barista-course": "Screenshot_2026-06-30_at_01.23.37_socglv",
  "professional-roasting-course": "Screenshot_2026-06-30_at_01.26.13_rqdk5n",
  "basic-refresher-training": "Screenshot_2026-06-30_at_01.24.18_f7bxkz",
};
