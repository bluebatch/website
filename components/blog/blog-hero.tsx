import { ReactNode } from "react";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
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
  image?: string;
  linkedIn?: string;
};

function BlogHeroAuthor({ children, image, linkedIn }: BlogHeroAuthorProps) {
  const avatar = image ? (
    <Image
      src={image}
      alt={typeof children === "string" ? children : "Author"}
      width={32}
      height={32}
      className="w-8 h-8 rounded-full object-cover"
    />
  ) : (
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
  );

  const nameElement = linkedIn ? (
    <Link
      href={linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:text-primary-600 transition-colors inline-flex items-center gap-1"
    >
      {children}
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </Link>
  ) : (
    <span className="font-medium">{children}</span>
  );

  return (
    <>
      <div className="flex items-center gap-2">
        {avatar}
        {nameElement}
      </div>
      <span className="text-gray-400">&bull;</span>
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
