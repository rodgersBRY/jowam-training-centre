/**
 * Weekly intake schedule — a new cohort starts every Monday.
 */
const MONDAY = 1;

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** The next intake Monday on or after `from` (defaults to now). Returns `from` itself if it's already a Monday. */
export function getNextIntakeDate(from: Date = new Date()): Date {
  const today = startOfDay(from);
  const daysUntilMonday = (MONDAY - today.getDay() + 7) % 7;
  return new Date(today.getTime() + daysUntilMonday * 24 * 60 * 60 * 1000);
}

/** e.g. "July 13, 2026" */
export function formatIntakeDate(date: Date): string {
  return date.toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
