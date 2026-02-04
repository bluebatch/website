import Link from "next/link";
import { getAllBlogs } from "@/data/blogs";
import ContentWrapper from "@/components/ContentWrapper";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <ContentWrapper>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Blog
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Insights, updates, and stories from our team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
              {blog.title}
            </h2>
            <p className="mt-3 text-gray-600">{blog.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary-600 group-hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
