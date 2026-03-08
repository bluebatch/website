import fs from "fs";
import path from "path";
import type { BlogTagId } from "@/lib/blog-tags";
import { getAuthor } from "@/lib/blog-authors";

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
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const dirs = entries.filter(
    (e) =>
      e.isDirectory() &&
      fs.existsSync(path.join(blogDir, e.name, "page.tsx")),
  );

  const posts: BlogPost[] = [];

  for (const dir of dirs) {
    const mod = await import(`@/app/blog/${dir.name}/page`);
    if (!mod.blogMeta) continue;

    const rawTitle =
      typeof mod.metadata?.title === "string" ? mod.metadata.title : "";
    const title = rawTitle.replace(/ \| Bluebatch$/, "");

    const author = getAuthor(mod.blogMeta.author);

    posts.push({
      slug: mod.blogMeta.slug,
      title,
      description: mod.metadata?.description ?? "",
      author: author.name,
      authorImage: author.image,
      authorLinkedIn: author.linkedIn,
      date: mod.blogMeta.date,
      image: mod.blogMeta.image,
      tags: mod.blogMeta.tags,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
