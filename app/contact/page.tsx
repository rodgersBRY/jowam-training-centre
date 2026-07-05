import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/data/site";
import { courses } from "@/lib/data/courses";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Location",
  description:
    "Visit Jowam Coffee Training Centre in Nairobi CBD. Call, WhatsApp, or send an enquiry about our barista and roasting courses.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Come and see us"
            lead="We're in the heart of Nairobi CBD. Call, message, or send a quick enquiry — whatever's easiest."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-(length:--text-h3) font-semibold text-roast">
                  Visit
                </h2>
                <address className="mt-2 not-italic text-brand-brown">
                  {site.address.full}
                </address>
              </div>

              <div>
                <h2 className="text-(length:--text-h3) font-semibold text-roast">
                  Call or email
                </h2>
                <ul className="mt-2 space-y-1.5 text-brand-brown">
                  {site.contact.phones.map((p) => (
                    <li key={p.raw}>
                      <a href={`tel:+${p.raw}`} className="hover:text-brand-orange">
                        {p.display}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="hover:text-brand-orange"
                    >
                      {site.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-(length:--text-h3) font-semibold text-roast">
                  Opening hours
                </h2>
                <ul className="mt-2 space-y-1 text-brand-brown">
                  {site.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-semibold">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-(length:--text-h3) font-semibold text-roast">
                  WhatsApp us about a course
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {courses.map((c) => (
                    <ButtonLink
                      key={c.slug}
                      variant="whatsapp"
                      href={whatsappLink(c.whatsappMessage)}
                      external
                      className="text-[0.9rem]"
                    >
                      <WhatsAppIcon size={18} />
                      {c.shortTitle}
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="rounded-card border border-line bg-paper p-6 md:p-8">
              <h2 className="text-(length:--text-h3) font-semibold text-roast">
                Send a quick enquiry
              </h2>
              <p className="mt-1 text-[0.9rem] text-brand-brown/80">
                We&rsquo;ll get back to you with intake dates and next steps.
              </p>
              <div className="mt-5">
                <EnquiryForm />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 overflow-hidden rounded-card border border-line">
            <iframe
              src={site.address.mapEmbed}
              title="Jowam Coffee Training Centre location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-110"
            />
          </div>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like to get in touch about your courses." />
    </>
  );
}
