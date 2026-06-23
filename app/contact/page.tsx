import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data/site";

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
    <div className="bg-cream pt-16">
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
                  <dd className="mt-1 text-coffee">
                    <a
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-orange"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
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

            {/* Contact form placeholder — Phase 3 */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-coffee/10">
              <h2 className="text-lg font-bold text-coffee">Send Us a Message</h2>
              {/* TODO Phase 3: replace this placeholder with <ContactForm /> */}
              <div className="mt-6 rounded-xl border-2 border-dashed border-coffee/20 p-8 text-center">
                <p className="text-sm text-coffee/50">Contact form — Phase 3</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
