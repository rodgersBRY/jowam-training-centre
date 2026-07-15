import type { Metadata } from "next";
import { posts } from "@/lib/data/blog";
import { images } from "@/lib/data/images";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PostCard } from "@/components/blog/PostCard";
import { Reveal } from "@/components/interactive/Reveal";
import { WhatsAppButton } from "@/components/interactive/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Guides on barista training, coffee careers, and brewing in Kenya.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        image={images.story}
        tagline="The Jowam Journal"
        title="Coffee is always teaching us something"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      {/* Post grid */}
      <section className="section-y bg-paper">
        <Container>
          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0"
            role="list"
          >
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <PostCard post={post} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I have a question about Jowam courses." />
    </>
  );
}
