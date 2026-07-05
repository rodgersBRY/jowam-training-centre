import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, formatPostDate } from "@/lib/data/blog";
import { getCourseBySlug, formatPrice } from "@/lib/data/courses";
import { site } from "@/lib/data/site";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const course = getCourseBySlug(post.relatedCourse);
  const url = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: url,
          keywords: post.keywords.join(", "),
        }}
      />

      <article className="section-y bg-paper">
        <Container className="max-w-190">
          <p className="text-small font-semibold uppercase tracking-widest text-brand-orange">
            <Link href="/blog">Blog</Link>
          </p>
          <h1 className="mt-3 text-(length:--text-h2) font-bold leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-3 text-[0.9rem] text-brand-brown/70">
            {formatPostDate(post.date)} · {post.readMinutes} min read
          </p>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-(length:--text-h3) font-semibold text-roast">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-3 space-y-4">
                  {section.body.map((p, j) => (
                    <p key={j} className="measure text-brand-brown">
                      {p}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-brand-brown"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {course && (
            <Card interactive className="mt-14 p-6 md:p-8">
              <p className="text-(--text-small) font-semibold uppercase tracking-widest">
                Related course
              </p>
              <h2 className="mt-2 text-(length:--text-h3) font-semibold text-roast">
                {course.title}
              </h2>
              <p className="mt-2 text-brand-brown">
                {course.summary}
              </p>
              <p className="mt-4 font-display text-[1.5rem] font-extrabold text-roast">
                {formatPrice(course.price)}
              </p>
              <div className="mt-5">
                <ButtonLink variant="primary" href={`/courses/${course.slug}`}>
                  View the course <ArrowIcon />
                </ButtonLink>
              </div>
            </Card>
          )}
        </Container>
      </article>

      <WhatsAppButton message="Hi, I read your blog and I'd like to know more about your courses." />
    </>
  );
}
