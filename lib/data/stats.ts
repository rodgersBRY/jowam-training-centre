export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

/**
 * Headline proof points highlighted on the homepage. Static figures —
 * no animated counters (DESIGN §7). Update as the real numbers grow.
 */
export const stats: Stat[] = [
  { label: "Graduates trained", value: 500, suffix: "+" },
  { label: "Completion rate", value: 94, suffix: "%" },
  { label: "Industry partners", value: 30, suffix: "+" },
];
