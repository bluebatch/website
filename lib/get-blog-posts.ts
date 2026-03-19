import fs from "fs";
import path from "path";
import type { BlogTagId } from "@/lib/blog-tags";
import { getAuthor } from "@/lib/blog-authors";
import { resolveHref } from "@/lib/get-canonical-path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorImage?: string;
  authorLinkedIn?: string;
  date: string;
  image: string;
  tags: BlogTagId[];
  href: string;
}

interface BlogDir {
  name: string;
  importPath: string;
}

function getBlogDirs(): BlogDir[] {
  const blogDir = path.join(process.cwd(), "app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const dirs: BlogDir[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    if (entry.name.startsWith("(")) {
      // Route group — scan inside for actual blog directories
      const groupDir = path.join(blogDir, entry.name);
      const groupEntries = fs.readdirSync(groupDir, { withFileTypes: true });
      for (const sub of groupEntries) {
        if (
          sub.isDirectory() &&
          fs.existsSync(path.join(groupDir, sub.name, "page.tsx"))
        ) {
          dirs.push({
            name: sub.name,
            importPath: `${entry.name}/${sub.name}`,
          });
        }
      }
    } else if (fs.existsSync(path.join(blogDir, entry.name, "page.tsx"))) {
      dirs.push({ name: entry.name, importPath: entry.name });
    }
  }

  return dirs;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const dirs = getBlogDirs();

  const posts: BlogPost[] = [];

  for (const dir of dirs) {
    const mod = await import(`@/app/blog/${dir.importPath}/page`);
    if (!mod.metaCustom || mod.metaCustom.publish !== true) continue;

    const rawTitle =
      typeof mod.metadata?.title === "string" ? mod.metadata.title : "";
    const title = rawTitle.replace(/ \| Bluebatch$/, "");

    const author = getAuthor(mod.metaCustom.author);

    const slug = mod.metaCustom.slug;
    posts.push({
      slug,
      title,
      description: mod.metadata?.description ?? "",
      author: author.name,
      authorImage: author.image,
      authorLinkedIn: author.linkedIn,
      date: mod.metaCustom.date,
      image: mod.metaCustom.image,
      tags: mod.metaCustom.tags,
      href: resolveHref(`/blog/${slug}`),
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
