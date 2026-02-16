import { ReactNode } from "react";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import Image from "next/image";

type BlogHeroProps = {
  children: ReactNode;
};

function BlogHero({ children }: BlogHeroProps) {
  return (
    <ContentWrapper bodyWidth="narrow" isFirstSection>
      <div>{children}</div>
    </ContentWrapper>
  );
}

type BlogHeroHeadlineProps = {
  children: ReactNode;
};

function BlogHeroHeadline({ children }: BlogHeroHeadlineProps) {
  return (
    <Typo.H1 className="mb-6 text-left">
      {children}
    </Typo.H1>
  );
}

type BlogHeroMetaProps = {
  children: ReactNode;
};

function BlogHeroMeta({ children }: BlogHeroMetaProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
      {children}
    </div>
  );
}

type BlogHeroAuthorProps = {
  children: ReactNode;
};

function BlogHeroAuthor({ children }: BlogHeroAuthorProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <span className="font-medium">{children}</span>
      </div>
      <span className="text-gray-400">•</span>
    </>
  );
}

type BlogHeroReadTimeProps = {
  children: ReactNode;
};

function BlogHeroReadTime({ children }: BlogHeroReadTimeProps) {
  return (
    <>
      <div className="flex items-center gap-1.5">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{children}</span>
      </div>
      <span className="text-gray-400">•</span>
    </>
  );
}

type BlogHeroDateProps = {
  children: ReactNode;
  dateTime: string;
};

function BlogHeroDate({ children, dateTime }: BlogHeroDateProps) {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <time dateTime={dateTime}>{children}</time>
    </div>
  );
}

type BlogHeroImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

function BlogHeroImage({
  src,
  alt,
  width = 1200,
  height = 630,
}: BlogHeroImageProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl mb-12 border border-gray-200">
      <Image src={src} alt={alt} width={width} height={height} className="" />
    </div>
  );
}

BlogHero.Headline = BlogHeroHeadline;
BlogHero.Meta = BlogHeroMeta;
BlogHero.Author = BlogHeroAuthor;
BlogHero.ReadTime = BlogHeroReadTime;
BlogHero.Date = BlogHeroDate;
BlogHero.Image = BlogHeroImage;

export default BlogHero;
