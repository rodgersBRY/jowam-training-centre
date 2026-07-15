import type { Metadata } from "next";
import { images } from "@/lib/data/images";
import { pageMetadata } from "@/lib/utils/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { EventsClientView } from "@/components/events/EventsClientView";

export const metadata: Metadata = pageMetadata({
  title: "Events & Competitions",
  description:
    "Upcoming coffee events, competitions, and special programmes at Jowam Coffee Training Centre in Nairobi.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        image={images.gallery.finalAssessment}
        tagline="Events"
        title="Events & Competitions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />
      <EventsClientView />
    </>
  );
}
