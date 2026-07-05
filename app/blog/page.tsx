import type { Metadata } from "next";
import { posts } from "@/lib/data/blog";
import { pageMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";
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
      {/* Hero header */}
      <section className="bg-roast section-y">
        <Container>
          <p className="text-small font-semibold uppercase tracking-[0.12em] text-brand-orange mb-4">
            Jowam Coffee Training Centre
          </p>
          <h1 className="text-(length:--text-hero) font-bold leading-[1.05] text-paper mb-6">
            Coffee Training Blog
          </h1>
          <p className="measure text-(length:--text-body) text-roast-text leading-[1.65]">
            Practical guides on barista training, coffee careers, salary
            expectations, and brewing craft — written for anyone pursuing coffee
            professionally in Kenya.
          </p>
        </Container>
      </section>

      {/* Post grid */}
      <section className="section-y bg-paper">
        <Container>
          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0"
            role="list"
          >
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WhatsAppButton message="Hi, I have a question about Jowam courses." />
    </>
  );
}
