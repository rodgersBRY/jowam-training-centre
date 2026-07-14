import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { images } from "@/lib/data/images";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { AddressIcon, PhoneIcon, MailIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Location",
  description:
    "Visit Jowam Coffee Training Centre in Nairobi. Call, WhatsApp, or send an enquiry about our barista and roasting courses.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={images.facilities.espressoLab}
        tagline="Contact"
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Come and see us"
            lead="We're in the heart of Nairobi. Call, message, or send a quick enquiry — whatever's easiest."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="flex items-center gap-2 text-(length:--text-h3) font-semibold text-roast">
                  <AddressIcon />
                  Visit
                </h2>
                <address className="mt-2 not-italic text-brand-brown">
                  {site.address.full}
                </address>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-(length:--text-h3) font-semibold text-roast">
                  <PhoneIcon />
                  <MailIcon />
                  Call or email
                </h2>
                <ul className="mt-2 space-y-1.5 text-brand-brown">
                  {site.contact.phones.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={`tel:+${p.raw}`}
                        className="hover:text-brand-orange"
                        data-umami-event="phone-call-click"
                      >
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
            </div>

            {/* Contact message form */}
            <div className="rounded-card border border-line bg-paper p-6 md:p-8">
              <h2 className="text-(length:--text-h3) font-semibold text-roast">
                Send us a message
              </h2>
              <p className="mt-1 text-[0.9rem] text-brand-brown/80">
                Have a question about our courses or admissions? We typically
                reply within one business day.
              </p>
              <div className="mt-5">
                <ContactForm />
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
