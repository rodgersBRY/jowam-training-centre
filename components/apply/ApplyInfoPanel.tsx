import { site, nextIntake } from "@/lib/data/site";
import { Card } from "@/components/ui/Card";
import { PhoneIcon, MailIcon, AddressIcon } from "@/components/ui/icons";

const heading = "text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-brand-orange";
const row = "flex items-start gap-2.5 text-[0.9rem] text-brand-brown";
const iconWrap = "mt-0.5 shrink-0 text-brand-orange";

/**
 * Sidebar reference panel for the Apply page: contact details, response-time
 * expectations, and the next intake date. Sits alongside RegistrationForm.
 */
export function ApplyInfoPanel() {
  return (
    <Card className="divide-y divide-line">
      <section className="p-5 md:p-6">
        <h3 className={heading}>Contact Information</h3>
        <div className="mt-4 space-y-3">
          {site.contact.phones.map((p) => (
            <p key={p.raw} className={row}>
              <PhoneIcon className={iconWrap} size={18} />
              <a href={`tel:+${p.raw}`} className="hover:text-roast">
                {p.display}
              </a>
            </p>
          ))}
          <p className={row}>
            <MailIcon className={iconWrap} size={18} />
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-roast break-all"
            >
              {site.contact.email}
            </a>
          </p>
          <p className={row}>
            <AddressIcon className={iconWrap} size={18} />
            <span>{site.address.full}</span>
          </p>
        </div>
      </section>

      <section className="p-5 md:p-6">
        <h3 className={heading}>Response Times</h3>
        <p className="mt-4 text-[0.9rem] text-brand-brown">
          We respond to applications within 24 hours on business days.
        </p>
      </section>

      <section className="p-5 md:p-6">
        <h3 className={heading}>Intake Times</h3>
        <p className="mt-4 text-[0.9rem] text-brand-brown">
          Next intake:{" "}
          <span className="font-semibold text-roast">{nextIntake}</span>
        </p>
        <p className="mt-2 text-[0.9rem] text-brand-brown">
          Intakes run weekly, every Monday.
        </p>
      </section>
    </Card>
  );
}
