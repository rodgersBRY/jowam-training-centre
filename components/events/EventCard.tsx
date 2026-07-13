import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { whatsappLink } from "@/lib/data/site";
import { formatEventDate, type Event } from "@/lib/data/events";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="flex flex-col">
      <div className="relative aspect-3/4 overflow-hidden rounded-t-card">
        <Image
          src={cloudinaryUrl(event.poster, { width: 600, height: 800 })}
          alt={`Poster for ${event.title}`}
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-small font-semibold uppercase tracking-[0.12em] text-brand-orange">
          {formatEventDate(event.date)}
        </p>
        <h3 className="mt-2 text-h3 font-bold text-roast">{event.title}</h3>
        <p className="mt-3 flex-1 text-small leading-relaxed text-brand-brown">
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
    </Card>
  );
}
