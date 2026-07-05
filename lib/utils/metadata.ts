import type { Metadata } from "next";
import { site } from "@/lib/data/site";

/**
 * Build per-page metadata with sensible defaults (CONTENT-SEO §8).
 * `path` is the route path used for the canonical URL.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/" ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;
  return {
    // Absolute bypasses the layout title template so the site name isn't doubled.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
