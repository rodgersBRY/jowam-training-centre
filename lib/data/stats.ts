export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Graduates trained", value: 500, suffix: "+" },
  { label: "Completion rate", value: 94, suffix: "%" },
  { label: "Industry partners", value: 30, suffix: "+" },
];
