import type { Metadata } from "next";
import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RegistrationForm } from "@/components/enroll/RegistrationForm";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Enroll — Online Registration",
  description:
    "Register for a Jowam course online. A mobile-first, secure registration form with M-PESA installment options.",
  path: "/enroll",
});

export default async function EnrollPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;

  return (
    <>
      <section className="section-y bg-paper">
        <Container className="max-w-180">
          <SectionHeading
            eyebrow="Registration"
            title="Enroll at Jowam"
            lead="Committed to joining? Complete your registration below. Just exploring? Message us on WhatsApp first — no obligation."
          />

          <div className="mt-6 rounded-[12px] border border-line bg-white p-5 text-[0.9rem] text-brand-brown">
            <p className="font-semibold text-roast">
              Payment &amp; next steps
            </p>
            <ul className="mt-2 space-y-1.5">
              <li>Pay in full or in 2–3 M-PESA installments.</li>
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
            <RegistrationForm defaultCourse={course} />
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
