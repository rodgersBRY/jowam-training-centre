"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { whatsappLink } from "@/lib/data/site";
import type { Event } from "@/lib/data/events";

const STORAGE_KEY = "jowam_event_modal_dismissed";
const SUPPRESS_MS = 24 * 60 * 60 * 1000;

export function EventModal({ event }: { event: Event }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (new Date(event.date) < new Date()) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && Date.now() - Number(raw) < SUPPRESS_MS) return;

    dialogRef.current?.showModal();
  }, [event.date]);

  function close() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="m-auto w-fit max-w-[95vw] overflow-visible rounded-card bg-paper p-0 shadow-2xl backdrop:bg-[rgb(36_27_21/0.8)]"
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
    >
      <div className="animate-modal-in relative overflow-visible">
        <div className="relative">
          <Image
            src={cloudinaryUrl(event.poster, {
              width: 700,
              height: 933,
              crop: "fit",
            })}
            alt={event.title}
            width={700}
            height={933}
            className="block max-h-[92vh] w-auto max-w-[95vw] rounded-card object-contain"
            priority
          />

          {/* Floating WhatsApp CTA — overflows the poster's bottom-right corner */}
          <a
            href={whatsappLink(event.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register on WhatsApp"
            className="absolute -bottom-5 -right-5 inline-flex h-18 w-18 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_30px_rgb(36_27_21/0.3)] transition-transform duration-150 ease-brand hover:scale-105 active:scale-95"
          >
            <span
              className="absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-ping motion-safe:[animation-duration:1.8s]"
              aria-hidden="true"
            />
            <WhatsAppIcon size={32} className="relative" />
          </a>
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-pill bg-roast/70 text-paper transition-colors hover:bg-roast"
        >
          <CloseIcon />
        </button>
      </div>
    </dialog>
  );
}
