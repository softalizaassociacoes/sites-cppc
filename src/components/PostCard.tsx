import Image from "next/image";
import Link from "next/link";
import { Post, formatDate } from "@/lib/posts";

export function PostCard({ post, basePath }: { post: Post; basePath: string }) {
  const image = post.featuredImage || post.images[0]?.src || null;
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-50">
        {image ? (
          <Image
            src={image}
            alt={post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-primary-300">
            <span className="font-serif-display text-4xl">CPPC</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-medium uppercase tracking-wide text-accent-600">
          {formatDate(post.date)}
        </time>
        <h3 className="mt-2 font-serif-display text-lg font-semibold leading-snug text-primary-900 group-hover:text-primary-700">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
