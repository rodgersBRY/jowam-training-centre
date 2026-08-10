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

/** True when today itself is an intake Monday — i.e. an intake is starting/ongoing right now. */
export function isIntakeStartingToday(from: Date = new Date()): boolean {
  return getNextIntakeDate(from).getTime() === startOfDay(from).getTime();
}

/**
 * The single source of truth for the intake badge copy — "Intake ongoing" on
 * an intake Monday, otherwise "Next intake: <date>". Used by both the
 * server-rendered fallback and the live client update so the two never drift.
 */
export function intakeLabel(from: Date = new Date()): string {
  return isIntakeStartingToday(from)
    ? "Intake ongoing"
    : `Next intake: ${formatIntakeDate(getNextIntakeDate(from))}`;
}
