import Link from "next/link";
import { getBlogBySlug, getAllBlogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/ContentWrapper";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <ContentWrapper>
      <Link
        href="/blogs"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Back to Blogs
      </Link>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <span>{blog.author}</span>
          <span>•</span>
          <time>{blog.date}</time>
        </div>

        <div className="mt-8 text-gray-700 leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>
      </article>
    </ContentWrapper>
  );
}
