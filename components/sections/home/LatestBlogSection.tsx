import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/interactive/Reveal";
import { getRecentPosts, formatPostDate } from "@/lib/data/blog";
import { stockImages } from "@/lib/data/stock-images";

/**
 * Latest 5 posts, tying into /blog. The most recent post is shown large
 * (spans 2 cols / 2 rows), the other 4 listed smaller beside it.
 */
export function LatestBlogSection() {
  const [featured, ...rest] = getRecentPosts(5);
  if (!featured) return null;

  const imageFor = (slug: string, i: number) =>
    stockImages.blogPosts[i % stockImages.blogPosts.length] ??
    stockImages.blogFallback;

  return (
    <section className="section-y bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="From the blog"
            title="Latest from the training floor"
            lead="Guides on barista training, coffee careers, and brewing — written for anyone pursuing coffee professionally in Kenya."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Featured post — larger */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col overflow-hidden rounded-card border border-line md:col-span-2 md:row-span-4"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={featured.image ?? imageFor(featured.slug, 0)}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-400 ease-brand group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-small font-semibold uppercase tracking-widest text-brand-orange">
                {formatPostDate(featured.date)} · {featured.readMinutes} min
                read
              </p>
              <h3 className="mt-3 text-h3 font-bold text-roast">
                {featured.title}
              </h3>
              <p className="mt-3 flex-1 text-brand-brown leading-relaxed">
                {featured.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-orange text-small group-hover:-translate-y-px transition-transform duration-150">
                Read article <ArrowIcon size={16} />
              </span>
            </div>
          </Link>

          {/* Remaining posts — smaller */}
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-4 overflow-hidden rounded-card border border-line p-3"
            >
              <div className="relative aspect-square w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image ?? imageFor(post.slug, i + 1)}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover transition-transform duration-400 ease-brand group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-start">
                <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-brand-orange">
                  {formatPostDate(post.date)}
                </p>

                <h4 className="mt-1 text-[0.95rem] font-bold leading-snug text-roast">
                  {post.title}
                </h4>

                {/* <p>{post.description}</p> */}
              </div>
            </Link>
          ))}
        </Reveal>

        <div className="mt-10 flex justify-center">
          <ButtonLink variant="secondary" href="/blog">
            Visit the blog <ArrowIcon />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
