import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FloatingTag } from "@/components/ui/FloatingTag";
import { ClockIcon, PriceTagIcon } from "@/components/ui/icons";
import { formatPrice, type Course } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

/**
 * Shared course card — used on the homepage course strip and the courses
 * listing page so both surfaces stay visually identical.
 */
export function CourseCard({ course }: { course: Course }) {
  const imgId = courseImages[course.slug];

  return (
    <Card interactive className="flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Link
          href={`/courses/${course.slug}`}
          aria-label={`View the ${course.title}`}
          className="group block h-full w-full focus-visible:outline-none"
        >
          {imgId ? (
            <Image
              src={cloudinaryUrl(imgId, { width: 720, height: 405 })}
              alt={`Students training in the ${course.title} at Jowam Coffee Training Centre`}
              width={720}
              height={405}
              className="h-full w-full object-cover transition-transform duration-400 ease-brand group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-roast" />
          )}
        </Link>
        <FloatingTag icon={PriceTagIcon}>{formatPrice(course.price)}</FloatingTag>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/courses/${course.slug}`} className="hover:text-brand-orange">
          <h3 className="text-h3 font-bold text-roast">{course.title}</h3>
        </Link>

        <div className="mt-2 flex items-center gap-1.5 text-small text-brand-brown">
          <ClockIcon size={16} className="text-brand-orange" />
          <span className="font-medium">{course.duration}</span>
        </div>

        <div className="mt-5 flex flex-1 items-end gap-3">
          <ButtonLink
            variant="primary"
            href={`/apply-now?course=${course.slug}`}
            className="flex-1 px-4 py-2.5 text-[0.9rem]"
          >
            Apply
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            href={`/courses/${course.slug}`}
            className="flex-1 px-4 py-2.5 text-[0.9rem]"
          >
            More info
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
