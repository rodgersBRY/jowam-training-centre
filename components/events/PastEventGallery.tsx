import Image from "next/image";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { formatEventDate, type Event } from "@/lib/data/events";

export function PastEventGallery({ event }: { event: Event }) {
  if (!event.gallery?.length) return null;

  return (
    <div>
      <div className="mb-6">
        <p className="text-small font-semibold uppercase tracking-[0.12em] text-brand-orange">
          {formatEventDate(event.date)}
        </p>
        <h3 className="mt-1 text-h3 font-bold text-roast">{event.title}</h3>
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 *:mb-4">
        {event.gallery.map((publicId) => (
          <div
            key={publicId}
            className="break-inside-avoid overflow-hidden rounded-card border border-line"
          >
            <Image
              src={cloudinaryUrl(publicId, { width: 700, height: 0, crop: "fit" })}
              alt={`Photo from ${event.title}`}
              width={700}
              height={500}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
