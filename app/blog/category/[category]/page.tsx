import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { BlogCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { BLOG_POSTS, getAllCategories } from "@/data/blogs";
import { slugify } from "@/utils/slugify";

interface Props { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: slugify(category) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = getAllCategories().find((c) => slugify(c) === category);
  if (!label) return {};
  return buildMetadata({ title: `${label} Articles`, description: `Browse all articles in ${label}.`, path: `/blog/category/${category}` });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const label = getAllCategories().find((c) => slugify(c) === category);
  if (!label) notFound();

  const posts = BLOG_POSTS.filter((p) => slugify(p.category) === category);

  return (
    <PageLayout path={`/blog/category/${category}`} labels={{ [category]: label }}>
      <Hero eyebrow="Category" title={label} />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </Container>
      </Section>
    </PageLayout>
  );
}
