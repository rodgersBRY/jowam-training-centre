"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { PastEventGallery } from "@/components/events/PastEventGallery";
import { Reveal } from "@/components/interactive/Reveal";
import { getUpcomingEvents, getPastEventsWithGallery } from "@/lib/data/events";

/**
 * Client component so upcoming/past status is computed from the browser's
 * live clock at every visit, not frozen at build time. Uses the shared,
 * UTC-midnight-safe helpers from lib/data/events.ts (see e6a05dd) rather than
 * re-deriving the split inline.
 */
export function EventsClientView() {
  const upcoming = getUpcomingEvents();
  const past = getPastEventsWithGallery();

  return (
    <>
      <section className="section-y bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Events & Competitions"
              title="What's coming up"
              lead="Join us for exciting coffee events, competitions, and special programmes at Jowam."
              align="center"
            />
          </Reveal>
          {upcoming.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {upcoming.map((event, i) => (
                <Reveal key={`${event.date}-${event.title}`} delay={(i % 4) * 80}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-body text-brand-brown">
              Stay tuned — more events coming soon.
            </p>
          )}
        </Container>
      </section>

      {past.length > 0 && (
        <section className="section-y bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="In the past"
                title="Event recaps"
                lead="Highlights and photos from our previous events and competitions."
                align="center"
              />
            </Reveal>
            <div className="mt-12 space-y-16">
              {past.map((event) => (
                <Reveal key={`${event.date}-${event.title}`}>
                  <PastEventGallery event={event} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
