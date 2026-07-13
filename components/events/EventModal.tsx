"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { whatsappLink } from "@/lib/data/site";
import { formatEventDate, type Event } from "@/lib/data/events";

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
      className="m-auto w-full max-w-lg rounded-card bg-paper p-0 shadow-2xl backdrop:bg-[rgb(36_27_21/0.8)]"
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
    >
      <div className="animate-modal-in relative">
        <Image
          src={cloudinaryUrl(event.poster, { width: 600, height: 700, crop: "fit" })}
          alt={`Poster for ${event.title}`}
          width={600}
          height={700}
          className="h-auto w-full rounded-t-card object-cover"
          priority
        />
        <div className="p-6">
          <h2 className="text-h3 font-bold text-roast">{event.title}</h2>
          <p className="mt-1 text-small font-semibold text-brand-orange">
            {formatEventDate(event.date)}
          </p>
          <p className="mt-3 text-small leading-relaxed text-brand-brown">
            {event.description}
          </p>
          <div className="mt-5">
            <ButtonLink
              variant="whatsapp"
              href={whatsappLink(event.whatsappMessage)}
              external
              className="w-full justify-center"
            >
              <WhatsAppIcon /> Register on WhatsApp
            </ButtonLink>
          </div>
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
