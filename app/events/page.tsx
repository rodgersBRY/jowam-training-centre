import type { Metadata } from "next";
import { pageMetadata } from "@/lib/utils/metadata";
import { EventsClientView } from "@/components/events/EventsClientView";

export const metadata: Metadata = pageMetadata({
  title: "Events & Competitions",
  description:
    "Upcoming coffee events, competitions, and special programmes at Jowam Coffee Training Centre in Nairobi.",
  path: "/events",
});

export default function EventsPage() {
  return <EventsClientView />;
}
