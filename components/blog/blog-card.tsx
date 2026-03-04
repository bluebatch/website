import Link from "next/link";
import Image from "next/image";
import { getTagsByIds } from "@/lib/blog-tags";
import type { BlogPost } from "@/lib/get-blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const postTags = getTagsByIds(post.tags);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>{post.author}</span>
          <span>&bull;</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {postTags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
