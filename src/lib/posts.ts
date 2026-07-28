import postsData from "@/content/posts.json";

export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string;
  bodyHtml: string;
  images: { src: string; alt: string }[];
  featuredImage: string | null;
  sourceEditor: "elementor" | "gutenberg";
}

export const allPosts = postsData as Post[];

export function getPostsByCategory(category: string): Post[] {
  return allPosts
    .filter((p) => p.categories.includes(category))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
