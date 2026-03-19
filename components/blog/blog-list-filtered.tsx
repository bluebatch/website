"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { blogTags } from "@/lib/blog-tags";
import type { BlogPost } from "@/lib/get-blog-posts";
import BlogCard from "@/components/blog/blog-card";

interface BlogListFilteredProps {
  posts: BlogPost[];
}

export default function BlogListFiltered({ posts }: BlogListFilteredProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTags = useMemo(() => {
    const param = searchParams.get("tags");
    return param ? param.split(",").filter(Boolean) : [];
  }, [searchParams]);

  const toggleTag = useCallback(
    (tagId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.get("tags")?.split(",").filter(Boolean) ?? [];

      const next = current.includes(tagId)
        ? current.filter((t) => t !== tagId)
        : [...current, tagId];

      if (next.length === 0) {
        params.delete("tags");
      } else {
        params.set("tags", next.join(","));
      }

      router.replace(`/blog?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  const filteredPosts = useMemo(() => {
    if (activeTags.length === 0) return posts;
    return posts.filter((post) =>
      activeTags.some((tag) => post.tags.includes(tag)),
    );
  }, [activeTags]);

  // Only show tags that are actually used by at least one blog post
  const usedTagIds = useMemo(() => {
    const ids = new Set<string>();
    posts.forEach((post) => post.tags.forEach((t) => ids.add(t)));
    return ids;
  }, []);

  const visibleTags = useMemo(
    () => blogTags.filter((tag) => usedTagIds.has(tag.id)),
    [usedTagIds],
  );

  return (
    <>
      {/* Tag Filter */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <svg
            className="w-5 h-5 text-gray-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-700">
            Filtern nach Thema
          </span>
          {activeTags.length > 0 && (
            <button
              onClick={() =>
                router.replace("/blog-workflow", { scroll: false })
              }
              className="ml-auto text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag) => {
            const isActive = activeTags.includes(tag.id);
            return (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                  isActive
                    ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary-400 hover:text-primary-600"
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          Keine Artikel für die gewählten Filter gefunden.
        </p>
      )}
    </>
  );
}
