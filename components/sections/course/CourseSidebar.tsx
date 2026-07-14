import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatPrice, type Course } from "@/lib/data/courses";
import { whatsappLink } from "@/lib/data/site";

/**
 * Slim sticky sidebar: price, Apply + Contact CTAs. Deliberately doesn't
 * duplicate the full in-flow Course Fee section (format toggle, what's
 * included, installment calculator) — those stay in the main column.
 */
export function CourseSidebar({ course }: { course: Course }) {
  return (
    <Card className="p-6 lg:sticky lg:top-20">
      <p className="text-small font-semibold uppercase tracking-widest text-brand-brown/70">
        Course fee
      </p>
      <p className="mt-1 text-price font-display font-extrabold leading-none text-roast">
        <span className="align-super text-[40%] font-bold">KES </span>
        {course.price.toLocaleString("en-KE")}
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <ButtonLink
          variant="primary"
          href={`/apply-now?course=${course.slug}`}
          className="justify-center"
        >
          Apply now
        </ButtonLink>
        <ButtonLink
          variant="whatsapp"
          href={whatsappLink(course.whatsappMessage)}
          external
          className="justify-center"
        >
          <WhatsAppIcon size={18} /> Contact us
        </ButtonLink>
      </div>
    </Card>
  );
}
