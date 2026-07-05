"use client";

import { useState } from "react";
import {
  installmentPlans,
  splitInstallments,
  formatPrice,
  type InstallmentPlan,
} from "@/lib/utils/installments";
import { cn } from "@/lib/utils/cn";

/**
 * Installment calculator (DESIGN §6). Segmented control switches the plan;
 * the first-installment figure updates in the large price treatment with a
 * 200ms transition. Pure client-side arithmetic — no network.
 */
export function InstallmentCalculator({
  price,
  className,
}: {
  price: number;
  className?: string;
}) {
  const [plan, setPlan] = useState<InstallmentPlan>("full");
  const split = splitInstallments(price, plan);

  return (
    <div className={cn("", className)}>
      {/* Segmented control */}
      <div
        role="radiogroup"
        aria-label="Payment plan"
        className="inline-flex rounded-[999px] border border-[var(--color-line)] bg-[var(--color-paper)] p-1"
      >
        {installmentPlans.map((p) => {
          const active = plan === p;
          const label = splitInstallments(price, p).label;
          return (
            <button
              key={p}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setPlan(p)}
              className={cn(
                "rounded-[999px] px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-[150ms]",
                active
                  ? "bg-[var(--color-brand-orange)] text-white"
                  : "text-[var(--color-brand-brown)] hover:text-[var(--color-brand-orange)]"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Result */}
      <div className="mt-6">
        <p className="text-[var(--text-small)] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-brown)]/70">
          {plan === "full"
            ? "One payment"
            : `First of ${split.count} payments`}
        </p>
        <p
          className="mt-1 font-[family-name:var(--font-display)] font-extrabold leading-none text-[var(--color-roast)] transition-all duration-200"
          style={{ fontSize: "var(--text-price)" }}
        >
          <span className="align-super text-[40%] font-bold">KES </span>
          {split.first.toLocaleString("en-KE")}
        </p>
        {plan !== "full" && (
          <p className="mt-2 text-[0.95rem] text-[var(--color-brand-brown)]">
            then {split.count - 1} ×{" "}
            <strong>{formatPrice(split.each)}</strong> — total{" "}
            {formatPrice(split.total)}
          </p>
        )}
        <p className="mt-3 text-[0.85rem] text-[var(--color-brand-brown)]/70">
          Installments paid via M-PESA. No hidden fees.
        </p>
      </div>
    </div>
  );
}
