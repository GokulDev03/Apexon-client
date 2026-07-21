import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { BLOG_POSTS, getBlogBySlug, getRelatedBlogPosts } from "@/data/blogs";
import { formatDate } from "@/utils/formatDate";
import { articleSchema, breadcrumbSchema } from "@/seo/jsonld";
import { siteConfig } from "@/config/site.config";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.seo.title, description: post.seo.description, path: `/blog/${post.slug}`, image: post.coverImage });
}

/** Renders markdown-ish content. Swap for a proper markdown renderer (e.g. `next-mdx-remote`) once the CMS is wired up. */
function ArticleBody({ content }: { content: string }) {
  const blocks = content.trim().split("\n\n");
  return (
    <div className="prose prose-ink mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.replace("## ", "")}</h2>;
        }
        if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
          return <p key={i}><strong>{block.replaceAll("**", "")}</strong></p>;
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(post.slug, 3);

  return (
    <PageLayout path={`/blog/${post.slug}`} labels={{ [post.slug]: post.title }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }], siteConfig.url)
          ),
        }}
      />

      <Section tone="light" className="pt-8">
        <Container className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <div className="flex justify-center">
            <Badge tone="brand">{post.category}</Badge>
          </div>
          <h1 className="font-display text-4xl tracking-tight md:text-5xl">{post.title}</h1>
          <p className="text-sm text-ink-500">
            {post.author.name} · {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
          </p>
        </Container>
      </Section>

      <Container className="mb-10">
        <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-ink-100">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      </Container>

      <Section tone="light" className="pt-0">
        <Container>
          <ArticleBody content={post.content} />
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="mx-auto flex max-w-2xl items-center gap-4 rounded-card border border-ink-200 bg-white p-6 shadow-soft">
          <div className="h-12 w-12 shrink-0 rounded-full bg-ink-200" />
          <div>
            <p className="font-medium text-ink-900">{post.author.name}</p>
            <p className="text-sm text-ink-500">{post.author.bio}</p>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="light">
          <Container className="flex flex-col gap-8">
            <h2 className="text-center font-display text-2xl text-ink-900">Related Articles</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} {...r} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FooterCTASection title="Have a project in mind?" />
    </PageLayout>
  );
}
