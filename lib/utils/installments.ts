import { formatPrice } from "@/lib/data/courses";

export type InstallmentPlan = "full" | "2" | "3";

export type InstallmentSplit = {
  plan: InstallmentPlan;
  label: string;
  /** Number of payments. */
  count: number;
  /** First (or only) payment — the figure a hesitant prospect needs. */
  first: number;
  /** Each subsequent payment (equal to first for even splits). */
  each: number;
  total: number;
};

/**
 * Pure client-side installment arithmetic (DESIGN §6). No network calls.
 * Splits evenly; any remainder is added to the first payment so the total
 * always reconciles exactly.
 */
export function splitInstallments(
  price: number,
  plan: InstallmentPlan
): InstallmentSplit {
  const count = plan === "full" ? 1 : Number(plan);
  const base = Math.floor(price / count);
  const remainder = price - base * count;
  const first = base + remainder;

  const labels: Record<InstallmentPlan, string> = {
    full: "Pay in full",
    "2": "2 installments",
    "3": "3 installments",
  };

  return {
    plan,
    label: labels[plan],
    count,
    first,
    each: base,
    total: price,
  };
}

export const installmentPlans: InstallmentPlan[] = ["full", "2", "3"];

export { formatPrice };
