import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import type { BlogPost } from "@/lib/data/blog";
import { formatPostDate } from "@/lib/data/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Card interactive className="flex flex-col p-6 gap-4">
      {/* Meta line */}
      <p className="text-small text-brand-orange font-semibold uppercase tracking-widest">
        {formatPostDate(post.date)}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readMinutes}{" "}
        min read
      </p>

      {/* Title */}
      <h2 className="text-(length:--text-h3) font-bold leading-tight text-roast font-display">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-(length:--text-body) text-brand-brown leading-[1.65] flex-1">
        {post.description}
      </p>

      {/* CTA */}
      <div>
        <ButtonLink href={`/blog/${post.slug}`} variant="ghost">
          Read article →
        </ButtonLink>
      </div>
    </Card>
  );
}
