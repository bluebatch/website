import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import Button from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function LatestBlogPosts() {
  const posts = await getBlogPosts();
  const latest = posts.slice(0, 3);

  return (
    <ContentWrapper>
      <IntroBox>
        <IntroBox.PreHeadline>Blog</IntroBox.PreHeadline>
        <IntroBox.Headline>Letzte Blog-Beiträge</IntroBox.Headline>
        <IntroBox.Subline>Hier gehts zu den letzten Blogposts</IntroBox.Subline>
      </IntroBox>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href="/blog">Alle Artikel ansehen</Button>
      </div>
    </ContentWrapper>
  );
}
