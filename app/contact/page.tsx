import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data/site";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jowam Coffee Training Centre. We are based in Nairobi, Kenya and happy to answer any questions about our courses.",
  keywords: [
    "contact Jowam Coffee Training Centre",
    "coffee school Nairobi contact",
    "barista training enquiry Kenya",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-cream pt-24">
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="We Would Love to Hear From You"
                intro="Have a question about our courses or admission process? Reach out — we typically respond within one business day."
              />
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Phone
                  </dt>
                  {site.contact.phones.map((p) => (
                    <dd key={p.raw} className="mt-1 text-coffee">
                      <a href={`tel:${p.raw}`} className="transition-colors hover:text-orange">
                        {p.display}
                      </a>
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-orange">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 text-coffee">
                    <a
                      href={`https://wa.me/${site.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-orange"
                    >
                      Message us on WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Email
                  </dt>
                  <dd className="mt-1 text-coffee">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="transition-colors hover:text-orange"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Location
                  </dt>
                  <dd className="mt-1 text-coffee">{site.contact.location}</dd>
                </div>
              </dl>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-coffee/10">
              <h2 className="text-lg font-bold text-coffee">Send Us a Message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-20">
        <Container>
          <div className="overflow-hidden rounded-2xl ring-1 ring-coffee/10">
            <iframe
              title="Jowam Coffee Training Centre location"
              src="https://maps.google.com/maps?q=Jowam+Training+Centre&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-coffee/60">
            {site.contact.location}
          </p>
        </Container>
      </section>
    </div>
  );
}
