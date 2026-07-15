import Image from "next/image";
import type { CSSProperties } from "react";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

export type MarqueeImage = { publicId: string; alt: string };

/**
 * A continuous, edge-to-edge strip of photos that scrolls horizontally.
 * The list is duplicated so translateX(-50%) loops seamlessly; motion pauses
 * on hover and, under reduced motion (globals.css), stops and becomes a
 * normal hand-scrollable row. Purely CSS-driven — no client JS.
 */
export function PhotoMarquee({
  images,
  durationSeconds = 45,
}: {
  images: MarqueeImage[];
  durationSeconds?: number;
}) {
  const loop = [...images, ...images];

  return (
    <div className="marquee-viewport relative w-full overflow-hidden">
      <ul
        className="marquee-track flex list-none gap-4 p-0"
        style={{ "--marquee-duration": `${durationSeconds}s` } as CSSProperties}
      >
        {loop.map((img, i) => (
          <li
            key={i}
            className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-card bg-roast sm:h-64 sm:w-[22rem] md:h-72 md:w-96"
            aria-hidden={i >= images.length ? true : undefined}
          >
            <Image
              src={cloudinaryUrl(img.publicId, { width: 700, height: 520 })}
              alt={i < images.length ? img.alt : ""}
              width={700}
              height={520}
              className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-105"
            />
          </li>
        ))}
      </ul>

      {/* Soft paper fades at both edges so the strip dissolves into the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-paper to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-paper to-transparent sm:w-20"
      />
    </div>
  );
}
