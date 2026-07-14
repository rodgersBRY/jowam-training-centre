import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FloatingTag } from "@/components/ui/FloatingTag";
import { CalendarIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { whatsappLink } from "@/lib/data/site";
import { formatEventDate, type Event } from "@/lib/data/events";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="flex flex-col">
      <div className="relative aspect-auto overflow-hidden rounded-t-card">
        <Image
          src={cloudinaryUrl(event.poster)}
          alt={`Poster for ${event.title}`}
          width={700}
          height={200}
          className="h-full w-full object-cover"
        />
        <FloatingTag icon={CalendarIcon}>
          {formatEventDate(event.date)}
        </FloatingTag>
      </div>

      <div className="flex flex-1 flex-col p-2">
        <h3 className="flex-1 text-h5 font-bold text-roast">{event.title}</h3>
        <div className="mt-5">
          <ButtonLink
            variant="whatsapp"
            href={whatsappLink(event.whatsappMessage)}
            external
            className="rounded justify-center"
          >
            <WhatsAppIcon />
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
