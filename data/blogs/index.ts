import { blog1 } from "./blog-1";
import { blog2 } from "./blog-2";
import { blog3 } from "./blog-3";

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export const blogs: Blog[] = [blog1, blog2, blog3];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogs(): Blog[] {
  return blogs;
}
