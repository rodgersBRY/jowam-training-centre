import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Jowam Coffee Training Centre collects, uses, and protects your personal data under Kenya's Data Protection Act, 2019.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-y bg-paper">
      <Container className="max-w-190">
        <h1 className="text-(length:--text-h2) font-bold text-roast">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[0.9rem] text-brand-brown/70">
          This notice explains how {site.name} (&ldquo;we&rdquo;) collects and
          protects your personal data, in line with Kenya&rsquo;s Data
          Protection Act, 2019.
        </p>

        <div className="mt-10 space-y-8 text-brand-brown [&_h2]:mb-2 [&_h2]:text-(length:--text-h3) [&_h2]:font-semibold [&_h2]:text-roast [&_p]:measure [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_li]:measure">
          <section>
            <h2>Who we are</h2>
            <p>
              {site.name} is the data controller for the personal data collected
              through this website. You can reach us at {site.address.full}, by
              phone on {site.contact.phones[0].display}, or by email at{" "}
              {site.contact.email}.
            </p>
          </section>

          <section>
            <h2>What data we collect</h2>
            <p>
              When you submit our online registration form, we collect the
              information you provide, which may include:
            </p>
            <ul className="list-disc pl-5">
              <li>Your surname and other names</li>
              <li>Gender, date of birth, and nationality</li>
              <li>Phone number and email address</li>
              <li>ID or passport number</li>
              <li>Your highest education level and chosen course</li>
              <li>
                Emergency contact details (name, relationship, phone number)
              </li>
              <li>A passport photograph</li>
              <li>Your consent and the date of submission</li>
            </ul>
            <p>
              If you use our enquiry form, we collect only your name, phone
              number, and course of interest.
            </p>
          </section>

          <section>
            <h2>Why we collect it</h2>
            <p>
              We use this data solely to process your registration, administer
              your course, contact you about your enrolment and intake dates,
              issue your certificate, and meet our record-keeping obligations.
              We do not sell your personal data, and we do not use it for
              unrelated marketing without your consent.
            </p>
          </section>

          <section>
            <h2>How we store and protect it</h2>
            <p>
              Data is transmitted over secure, encrypted (HTTPS) connections and
              processed through access-controlled systems. Only authorised Jowam
              staff can access registration records. Passport photos are
              size-limited and compressed. We take reasonable technical and
              organisational measures to guard against unauthorised access,
              loss, or disclosure.
            </p>
          </section>

          <section>
            <h2>How long we keep it</h2>
            <p>
              We retain registration records for as long as necessary to
              administer your training and meet legal and administrative
              requirements, after which the data is securely deleted or
              anonymised.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>Under the Data Protection Act, 2019, you have the right to:</p>
            <ul className="list-disc pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data where the law allows</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent at any time</li>
              <li>
                Lodge a complaint with the Office of the Data Protection
                Commissioner
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              {site.contact.email}.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We may update this notice from time to time. The current version
              is always available on this page.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
