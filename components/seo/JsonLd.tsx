import { site } from "@/lib/data/site";
import { courses, type Course } from "@/lib/data/courses";
import type { FaqItem } from "@/lib/data/faq";

/** Render a JSON-LD script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema is trusted, static content generated on the server.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** EducationalOrganization — rendered sitewide in the root layout. */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    email: site.contact.email,
    telephone: `+${site.contact.phones[0].raw}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.building}, ${site.address.street}`,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.long,
    },
    sameAs: site.social.map((s) => s.href),
  };
}

/** Course schema with a price offer (CONTENT-SEO §8). */
export function courseSchema(course: Course): Record<string, unknown> {
  const url = `${site.url}/courses/${course.slug}`;

  const offer = (price: number) => ({
    "@type": "Offer",
    category: "Paid",
    price,
    priceCurrency: "KES",
    availability: "https://schema.org/InStock",
    url,
  });

  const onsiteInstance = {
    "@type": "CourseInstance",
    courseMode: "onsite",
    courseWorkload: course.duration,
    location: {
      "@type": "Place",
      name: site.name,
      address: site.address.full,
    },
  };

  const onlineInstance = {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: course.duration,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    url,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
    },
    offers: course.online
      ? [offer(course.price), offer(course.online.price)]
      : offer(course.price),
    hasCourseInstance: course.online
      ? [onsiteInstance, onlineInstance]
      : onsiteInstance,
  };
}

/** FAQPage schema for the FAQ content. */
export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** All courses as an ItemList for the courses hub. */
export function coursesListSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/courses/${c.slug}`,
      name: c.title,
    })),
  };
}
