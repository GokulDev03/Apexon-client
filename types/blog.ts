export interface Author {
  name: string;
  slug: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readTimeMinutes: number;
  relatedServiceSlugs: string[];
  content: string; // markdown or rich text
  seo: {
    title: string;
    description: string;
  };
}
