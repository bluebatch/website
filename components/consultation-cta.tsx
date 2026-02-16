import { ReactNode } from "react";
import Image from "next/image";

interface ConsultationCtaProps {
  children: ReactNode;
  className?: string;
}

// Outer bounding box - sets the full height
export default function ConsultationCta({
  children,
  className = "",
}: ConsultationCtaProps) {
  return (
    <div className={`relative h-[700px] md:h-[500px] lg:h-[550px] mt-16 ${className}`}>
      {children}
    </div>
  );
}

// Background box - 80% height, sits at bottom
interface BackgroundBoxProps {
  className?: string;
}

export function ConsultationCtaBackgroundBox({
  className = "",
}: BackgroundBoxProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-[50%] md:h-[70%] bg-primary-800 ${className}`}
    />
  );
}

// Image - 50% width, right side, 100% height of bounding box
interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ConsultationCtaImage({
  src,
  alt = "Consultant",
  className = "",
}: ImageProps) {
  return (
    <div className={`absolute bottom-0 right-0 w-full h-[50%] md:w-1/2 md:h-full flex items-end justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={550}
        className="h-full w-auto object-contain object-bottom"
      />
    </div>
  );
}

// Text column - same height as background box (70%)
interface TextColumnProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationCtaTextColumn({
  children,
  className = "",
}: TextColumnProps) {
  return (
    <div className={`absolute left-0 top-0 md:bottom-0 md:top-auto w-full md:w-1/2 h-[50%] md:h-[70%] bg-primary-800 text-white p-6 md:p-8 lg:p-10 flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
}

// Pre-headline
interface PreHeadlineProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationCtaPreHeadline({
  children,
  className = "",
}: PreHeadlineProps) {
  return (
    <div className="mb-3">
      <span
        className={`text-xs uppercase tracking-[0.1em] text-primary-800 bg-secondary-400 px-3 py-1 font-semibold ${className}`}
      >
        {children}
      </span>
    </div>
  );
}

// Headline
interface HeadlineProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationCtaHeadline({
  children,
  className = "",
}: HeadlineProps) {
  return (
    <h2
      className={`text-[1.6rem] md:text-[2rem] lg:text-[2.6rem] font-bold italic leading-tight mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

// Checklist container
interface ChecklistProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationCtaChecklist({
  children,
  className = "",
}: ChecklistProps) {
  return <ul className={`space-y-2 mb-4 ${className}`}>{children}</ul>;
}

// Checklist item
interface ChecklistItemProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationCtaChecklistItem({
  children,
  className = "",
}: ChecklistItemProps) {
  return (
    <li className={`flex items-start gap-2 ${className}`}>
      <svg
        className="w-4 h-4 mt-0.5 text-secondary-400 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-gray-300 text-sm leading-snug">{children}</span>
    </li>
  );
}

// CTA Button wrapper
interface CtaButtonProps {
  children?: ReactNode;
  href?: string;
  className?: string;
}

export function ConsultationCtaButton({
  children = "Jetzt Beratung vereinbaren",
  href,
  className = "",
}: CtaButtonProps) {
  return (
    <div className={className}>
      <a
        href={href || "#"}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-800 hover:bg-gray-100 transition-colors text-sm font-medium"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {children}
      </a>
    </div>
  );
}

// Cyan circle - for later
interface CircleProps {
  className?: string;
}

export function ConsultationCtaCircle({ className = "" }: CircleProps) {
  return (
    <div
      className={`absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-secondary-400 ${className}`}
    />
  );
}
