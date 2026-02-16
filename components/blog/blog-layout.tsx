import { ReactNode } from "react";
import Typo from "@/components/typo";
import ContentWrapper from "../content-wrapper";

type BlogLayoutProps = {
  children: ReactNode;
};

function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <ContentWrapper noPadding>
      <div className="grid grid-cols-1 xl:grid-cols-[200px_1fr_300px] gap-6">
        {/* Left Sidebar - Hidden on Mobile */}
        <div className="hidden xl:block"></div>
        {children}
      </div>
    </ContentWrapper>
  );
}

type BlogLayoutContentProps = {
  children: ReactNode;
};

function BlogLayoutContent({ children }: BlogLayoutContentProps) {
  return <div className="overflow-hidden px-4 xl:px-0">{children}</div>;
}

type BlogLayoutNavigationProps = {
  children: ReactNode;
  title?: string;
};

function BlogLayoutNavigation({
  children,
  title = "Inhaltsverzeichnis",
}: BlogLayoutNavigationProps) {
  return (
    <div>
      <aside className="sticky top-30 p-6">
        <Typo.H3 className="mb-6">{title}</Typo.H3>
        <ol className="space-y-2 text-sm">{children}</ol>
      </aside>
    </div>
  );
}

type BlogLayoutNavigationItemProps = {
  idLink: string;
  children: ReactNode;
};

function BlogLayoutNavigationItem({
  idLink,
  children,
}: BlogLayoutNavigationItemProps) {
  return (
    <li>
      <a
        href={`#${idLink}`}
        className="text-primary-600 hover:text-primary-700"
      >
        {children}
      </a>
    </li>
  );
}

BlogLayout.Content = BlogLayoutContent;
BlogLayout.Navigation = BlogLayoutNavigation;
BlogLayout.NavigationItem = BlogLayoutNavigationItem;

export default BlogLayout;
