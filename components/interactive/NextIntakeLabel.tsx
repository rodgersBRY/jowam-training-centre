"use client";

import { useEffect, useState } from "react";
import { intakeLabel } from "@/lib/utils/intake";

/**
 * Live intake label for statically generated pages.
 *
 * Course pages are SSG, so anything computed while rendering a server
 * component freezes at build time — which is how the badge ended up showing
 * an intake date weeks in the past. This renders the build-time `fallback`
 * during SSR (so the markup stays crawlable and correct without JS), then
 * recomputes from the browser's clock after mount so it is always current.
 *
 * Seeding state from `fallback` (rather than computing during the first
 * client render) keeps hydration identical to the server HTML.
 */
export function NextIntakeLabel({ fallback }: { fallback: string }) {
  const [label, setLabel] = useState(fallback);

  useEffect(() => {
    setLabel(intakeLabel());
  }, []);

  return <>{label}</>;
}
