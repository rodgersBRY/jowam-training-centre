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

export const events: Event[] = [];

export function getUpcomingEvents(now = new Date()): Event[] {
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEventsWithGallery(now = new Date()): Event[] {
  return events
    .filter((e) => new Date(e.date) < now && (e.gallery?.length ?? 0) > 0)
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
