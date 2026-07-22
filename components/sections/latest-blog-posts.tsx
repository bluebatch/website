import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import Button from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { getBlogPosts } from "@/lib/get-blog-posts";

interface LatestBlogPostsProps {
  highlightSlug?: string;
}

export default async function LatestBlogPosts({
  highlightSlug,
}: LatestBlogPostsProps = {}) {
  const posts = await getBlogPosts();

  let display;

  if (highlightSlug) {
    const highlighted = posts.find((p) => p.slug === highlightSlug);
    const others = posts.filter((p) => p.slug !== highlightSlug).slice(0, 2);

    if (highlighted && others.length >= 2) {
      display = [others[0], highlighted, others[1]];
    } else if (highlighted) {
      display = [highlighted, ...others].slice(0, 3);
    } else {
      display = posts.slice(0, 3);
    }
  } else {
    display = posts.slice(0, 3);
  }

  return (
    <ContentWrapper>
      <IntroBox>
        <IntroBox.PreHeadline>Blog</IntroBox.PreHeadline>
        <IntroBox.Headline>Letzte Blog-Beiträge</IntroBox.Headline>
        <IntroBox.Subline>Hier gehts zu den letzten Blogposts</IntroBox.Subline>
      </IntroBox>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${highlightSlug ? "pt-6" : ""}`}>
        {display.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
            highlight={post.slug === highlightSlug}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href="/blog">Alle Artikel ansehen</Button>
      </div>
    </ContentWrapper>
  );
}
