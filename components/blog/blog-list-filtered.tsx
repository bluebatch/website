"use client";

import { useCallback, useEffect, useState } from "react";
import { blogTags } from "@/lib/blog-tags";
import type { BlogPost } from "@/lib/get-blog-posts";
import BlogCard from "@/components/blog/blog-card";

interface BlogListFilteredProps {
  posts: BlogPost[];
}

/**
 * Client-seitiger Tag-Filter für den Blog-Hub.
 *
 * Zwei Regeln, die aus einem früheren Fehlversuch stammen und beide eingehalten
 * werden müssen:
 *
 * 1. JEDER Post steht immer im DOM, auch wenn er gerade weggefiltert ist.
 *    Gefiltert wird nur über eine Klasse. Der Crawler in tests/helpers/crawl.ts
 *    sammelt Links direkt nach "domcontentloaded" ein; Posts, die ausschließlich
 *    über diesen Hub verlinkt sind, fielen sonst als Orphans durch.
 * 2. KEIN useSearchParams. Das kippt die Seite aus dem statischen Prerender und
 *    legt den Teilbaum hinter einen Suspense-Bailout, wodurch im initialen HTML
 *    genau die Post-Links fehlen, um die es in Regel 1 geht. Deep-Links wie
 *    /blog?tags=automatisierung werden deshalb nach dem Mount aus
 *    window.location gelesen.
 */

function parseTags(search: string): string[] {
  const raw = new URLSearchParams(search).get("tags");
  return raw ? raw.split(",").filter(Boolean) : [];
}

function hrefFor(tags: string[]): string {
  return tags.length === 0 ? "/blog" : `/blog?tags=${tags.join(",")}`;
}

export default function BlogListFiltered({ posts }: BlogListFilteredProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setActiveTags(parseTags(window.location.search));
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  // replaceState statt push: die URL bleibt teilbar, aber jedes Antippen eines
  // Tags soll keinen eigenen Eintrag in der Browser-History hinterlassen.
  const apply = useCallback((next: string[]) => {
    setActiveTags(next);
    window.history.replaceState(null, "", hrefFor(next));
  }, []);

  const toggle = (tagId: string) =>
    apply(
      activeTags.includes(tagId)
        ? activeTags.filter((t) => t !== tagId)
        : [...activeTags, tagId],
    );

  // Nur Tags anbieten, die mindestens ein Post auch trägt.
  const usedTagIds = new Set<string>();
  posts.forEach((post) => post.tags.forEach((t) => usedTagIds.add(t)));
  const visibleTags = blogTags.filter((tag) => usedTagIds.has(tag.id));

  const matches = (post: BlogPost) =>
    activeTags.length === 0 ||
    activeTags.some((tag) => post.tags.includes(tag));
  const matchCount = posts.filter(matches).length;

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
            <a
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                apply([]);
              }}
              className="ml-auto text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Filter zurücksetzen
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag) => {
            const isActive = activeTags.includes(tag.id);
            const next = isActive
              ? activeTags.filter((t) => t !== tag.id)
              : [...activeTags, tag.id];
            return (
              // Bleibt ein echter Link: teilbar, und ohne JavaScript landet man
              // auf /blog mit allen Posts statt auf einer toten Schaltfläche.
              <a
                key={tag.id}
                href={hrefFor(next)}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(tag.id);
                }}
                aria-current={isActive ? "true" : undefined}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary-400 hover:text-primary-600"
                }`}
              >
                {tag.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Blog Posts Grid: immer vollständig im DOM, gefiltert wird per Klasse */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className={matches(post) ? undefined : "hidden"}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {matchCount === 0 && (
        <p className="text-center text-gray-500 py-12">
          Keine Artikel für die gewählten Filter gefunden.
        </p>
      )}
    </>
  );
}
