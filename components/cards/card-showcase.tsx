import { ReactNode } from "react";
import Image from "next/image";
import { AnimatedCardWrapper } from "./card-showcase-client";

// Sub-components
interface CardShowcaseImageProps {
  src: string;
  alt: string;
  className?: string;
}

function CardShowcaseImage({
  src,
  alt,
  className = "",
}: CardShowcaseImageProps) {
  return (
    <div
      className={`relative h-48 md:h-56 w-full overflow-hidden ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
    </div>
  );
}

interface CardShowcaseTitleProps {
  children: ReactNode;
  className?: string;
}

function CardShowcaseTitle({
  children,
  className = "",
}: CardShowcaseTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-white mb-2 ${className}`}>
      {children}
    </h3>
  );
}

interface CardShowcaseDescriptionProps {
  children: ReactNode;
  className?: string;
}

function CardShowcaseDescription({
  children,
  className = "",
}: CardShowcaseDescriptionProps) {
  return (
    <p className={`text-gray-400 text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

interface CardShowcaseItemProps {
  children: ReactNode;
  size?: "large" | "small";
  className?: string;
}

function CardShowcaseItem({
  children,
  size = "small",
  className = "",
}: CardShowcaseItemProps) {
  const sizeClass = size === "large" ? "md:col-span-3" : "md:col-span-2";

  return (
    <AnimatedCardWrapper
      className={`relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/80 ${sizeClass} ${className}`}
    >
      {children}
    </AnimatedCardWrapper>
  );
}

interface CardShowcaseContentProps {
  children: ReactNode;
  className?: string;
}

function CardShowcaseContent({
  children,
  className = "",
}: CardShowcaseContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

// Main component
interface CardShowcaseProps {
  children: ReactNode;
  className?: string;
}

function CardShowcase({ children, className = "" }: CardShowcaseProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-5 gap-4 ${className}`}>
      {children}
    </div>
  );
}

// Attach sub-components
CardShowcase.Item = CardShowcaseItem;
CardShowcase.Image = CardShowcaseImage;
CardShowcase.Content = CardShowcaseContent;
CardShowcase.Title = CardShowcaseTitle;
CardShowcase.Description = CardShowcaseDescription;

export default CardShowcase;
