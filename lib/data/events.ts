export type Event = {
  title: string;
  /** ISO "YYYY-MM-DD" — drives upcoming vs past logic. */
  date: string;
  description: string;
  /** Cloudinary public ID for the event poster image. */
  poster: string;
  /** Pre-filled WhatsApp registration message. */
  whatsappMessage: string;
  /** Cloudinary public IDs of post-event photos. Leave empty until after the event. */
  gallery?: string[];
};

export const events: Event[] = [
  {
    title: "In-House Barista Competition",
    date: "2026-07-17",
    description:
      "Jowam Training Centre In house barista competition. Time to show what you've got. Barista, bring your A-game",
    poster: "WhatsApp_Image_2026-07-13_at_13.22.17_sknlve",
    whatsappMessage: "",
  },
];

function toDateOnly(d: Date): Date {
  return new Date(d.toISOString().slice(0, 10));
}

export function getUpcomingEvents(now = new Date()): Event[] {
  const today = toDateOnly(now);
  return events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEventsWithGallery(now = new Date()): Event[] {
  const today = toDateOnly(now);
  return events
    .filter((e) => new Date(e.date) < today && (e.gallery?.length ?? 0) > 0)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatEventDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
