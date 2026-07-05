"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { cn } from "@/lib/utils/cn";

export type GalleryPhoto = {
  publicId: string;
  alt: string;
  category: string;
};

/**
 * Masonry gallery with a native <dialog> lightbox. Keyboard operable:
 * Enter/Space opens, Esc closes (native), close button returns focus.
 * Filter chips narrow by category.
 */
export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(photos.map((p) => p.category))),
  ];
  const shown =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  const open = useCallback((photo: GalleryPhoto) => {
    setActive(photo);
    dialogRef.current?.showModal();
    // focus the close button once the dialog is open
    requestAnimationFrame(() => closeRef.current?.focus());
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setActive(null);
  }, []);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = () => setActive(null);
    dlg.addEventListener("close", onCancel);
    return () => dlg.removeEventListener("close", onCancel);
  }, []);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "rounded-pill border px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-150",
              filter === c
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-line text-brand-brown hover:border-brand-orange",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 *:mb-4">
        {shown.map((photo) => (
          <button
            key={photo.publicId + photo.alt}
            type="button"
            onClick={() => open(photo)}
            className="block w-full break-inside-avoid overflow-hidden rounded-[12px] border border-line transition-transform duration-150 hover:-translate-y-0.5"
          >
            <Image
              src={cloudinaryUrl(photo.publicId, {
                width: 700,
                height: 0,
                crop: "fit",
              })}
              alt={photo.alt}
              width={700}
              height={500}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="m-auto max-h-[90vh] max-w-[92vw] rounded-[12px] bg-transparent p-0 backdrop:bg-[rgb(36_27_21/0.8)]"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {active && (
          <figure className="relative">
            <Image
              src={cloudinaryUrl(active.publicId, {
                width: 1400,
                height: 0,
                crop: "fit",
              })}
              alt={active.alt}
              width={1400}
              height={1000}
              className="h-auto max-h-[82vh] w-auto rounded-[12px] object-contain"
            />
            <figcaption className="mt-2 text-center text-[0.9rem] text-paper">
              {active.alt}
            </figcaption>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-pill bg-roast/80 text-paper"
            >
              ✕
            </button>
          </figure>
        )}
      </dialog>
    </div>
  );
}
