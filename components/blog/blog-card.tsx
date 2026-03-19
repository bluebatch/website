import Link from "next/link";
import Image from "next/image";
import { getTagsByIds } from "@/lib/blog-tags";
import type { BlogPost } from "@/lib/get-blog-posts";

interface BlogCardProps {
  post: BlogPost;
  highlight?: boolean;
}

export default function BlogCard({ post, highlight }: BlogCardProps) {
  const postTags = getTagsByIds(post.tags);

  return (
    <Link
      href={post.href}
      className={`group relative block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
        highlight ? "scale-105 lg:scale-110" : ""
      }`}
    >
      {/* Glassy gradient border on all cards */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        style={{
          padding: "2px",
          background: highlight
            ? "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(59,130,246,0.2), rgba(59,130,246,0.6))"
            : "linear-gradient(135deg, rgba(200,200,200,0.6), rgba(200,200,200,0.1))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Inner glow overlay on all cards */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

      {/* Badge */}
      {highlight && (
        <span
          className="absolute top-4 right-4 z-30 text-white text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur-md bg-primary-500/50 shadow-[0_8px_32px_rgba(59,130,246,0.3)]"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          Empfohlen
        </span>
      )}

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
          <div className="flex items-center gap-1.5">
            {post.authorImage ? (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={20}
                height={20}
                className="w-5 h-5 rounded-full object-cover"
              />
            ) : (
              <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
            <span>{post.author}</span>
          </div>
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
