import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { BlogCard } from "@/components/cards";
import { Newsletter } from "@/components/common/Newsletter";
import { BLOG_POSTS } from "@/data/blogs";
import { PageLayout } from "@/layouts/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Practical guides on software development, web development, pricing, and technology decisions — written from real project experience.",
  path: "/blog",
});

export default function BlogHubPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <PageLayout path="/blog">
      <Hero eyebrow="Blog" title="Ideas, guides, and lessons from the field" />
      <Section tone="muted">
        <Container className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mx-auto w-full max-w-md rounded-card border border-ink-200 bg-white p-8 text-center shadow-soft">
            <h3 className="mb-2 font-display text-xl text-ink-900">Get new articles by email</h3>
            <p className="mb-5 text-sm text-ink-600">No spam — just practical software and web development guidance.</p>
            <Newsletter />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
