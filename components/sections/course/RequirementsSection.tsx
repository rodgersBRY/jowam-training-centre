import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";
import type { Course } from "@/lib/data/courses";

/** Renders as an inline block — sits inside the course page's main content column. */
export function RequirementsSection({ course }: { course: Course }) {
  return (
    <div>
      <SectionHeading eyebrow="Before you apply" title="Course requirements" />
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {course.requirements.map((req) => (
          <li key={req} className="flex gap-3 text-brand-brown">
            <CheckIcon size={20} className="mt-0.5 shrink-0 text-brand-orange" />
            {req}
          </li>
        ))}
      </ul>
    </div>
  );
}
