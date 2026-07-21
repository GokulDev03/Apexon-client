import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowRight } from "lucide-react";

/** Homepage "Blog Preview" — blueprint Step 4.13. */
export function LatestBlogsSection() {
  const latest = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <Section tone="light">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="From the Blog" title="Ideas, guides, and lessons from the field" />
        {latest.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-ink-500">New articles are on the way.</p>
        )}
        <Button href="/blog" variant="secondary" icon={<ArrowRight size={16} />}>
          Visit Our Blog
        </Button>
      </Container>
    </Section>
  );
}
