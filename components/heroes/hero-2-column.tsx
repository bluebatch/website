import { ReactNode } from "react";
import Image from "next/image";

interface Hero2ColumnProps {
  children: ReactNode;
}

interface ImageProps {
  src: string;
  alt?: string;
  type?: "video" | "image";
  className?: string;
}

interface PreHeadlineProps {
  children: ReactNode;
}

interface HeadlineProps {
  children: ReactNode;
}

interface DescriptionProps {
  children: ReactNode;
}

interface SubtextProps {
  children: ReactNode;
}

interface CallToActionProps {
  children: ReactNode;
}

interface TextColumnProps {
  children: ReactNode;
}

interface MediaColumnProps {
  children: ReactNode;
}

// Sub-components exported separately for Server Component compatibility
export function Hero2ColumnImage({
  src,
  alt = "",
  type = "video",
  className = "",
}: ImageProps) {
  return (
    <div className={className}>
      {type === "video" ? (
        <video className="w-full rounded-lg" autoPlay muted loop playsInline>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full"
        />
      )}
    </div>
  );
}

export function Hero2ColumnPreHeadline({ children }: PreHeadlineProps) {
  return (
    <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 uppercase tracking-wide">
      {children}
    </h3>
  );
}

export function Hero2ColumnHeadline({ children }: HeadlineProps) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
      {children}
    </h1>
  );
}

export function Hero2ColumnDescription({ children }: DescriptionProps) {
  return (
    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
      {children}
    </p>
  );
}

export function Hero2ColumnSubtext({ children }: SubtextProps) {
  return <p className="text-xs md:text-sm text-gray-500 mt-4">{children}</p>;
}

export function Hero2ColumnCallToAction({ children }: CallToActionProps) {
  return <div className="flex flex-col sm:flex-row gap-4 mb-4">{children}</div>;
}

export function Hero2ColumnTextColumn({ children }: TextColumnProps) {
  return <div>{children}</div>;
}

export function Hero2ColumnMediaColumn({ children }: MediaColumnProps) {
  return <div>{children}</div>;
}

// Main layout component
export default function Hero2Column({ children }: Hero2ColumnProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {children}
    </div>
  );
}

// Namespace object for compound-style imports (works in Client Components only)
export const Hero2ColumnCompound = {
  Root: Hero2Column,
  Image: Hero2ColumnImage,
  PreHeadline: Hero2ColumnPreHeadline,
  Headline: Hero2ColumnHeadline,
  Description: Hero2ColumnDescription,
  Subtext: Hero2ColumnSubtext,
  CallToAction: Hero2ColumnCallToAction,
  TextColumn: Hero2ColumnTextColumn,
  MediaColumn: Hero2ColumnMediaColumn,
};
