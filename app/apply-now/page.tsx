import type { Metadata } from "next";
import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RegistrationForm } from "@/components/apply/RegistrationForm";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Apply Now — Online Registration",
  description:
    "Apply to a Jowam course online. A mobile-first, secure registration form with flexible installment options.",
  path: "/apply-now",
});

export default async function ApplyNowPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string; format?: string }>;
}) {
  const { course, format } = await searchParams;
  const defaultFormat = format === "online" ? "online" : "in-person";

  return (
    <>
      <section className="section-y bg-paper">
        <Container className="max-w-180">
          <SectionHeading
            eyebrow="Registration"
            title="Apply to Jowam"
            lead="Committed to joining? Complete your application below. Just exploring? Message us on WhatsApp first — no obligation."
          />

          <div className="mt-6 rounded-card border border-line bg-white p-5 text-[0.9rem] text-brand-brown">
            <p className="font-semibold text-roast">
              Payment &amp; next steps
            </p>
            <ul className="mt-2 space-y-1.5">
              <li>Pay in full or in 2–3 installments.</li>
              <li>
                Your registration number is assigned by admissions after you
                submit.
              </li>
              <li>
                Bring your ID or passport on day one to sign the registration in
                person.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <RegistrationForm
              defaultCourse={course}
              defaultFormat={defaultFormat}
            />
          </div>

          <p className="mt-8 text-center text-[0.85rem] text-brand-brown/70">
            Prefer to register in person? Visit us at {site.address.full}.
          </p>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I'd like help with my registration." />
    </>
  );
}
