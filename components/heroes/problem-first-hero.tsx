import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
} from "react";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";

/**
 * ProblemFirstHero
 *
 * Two-stage hero: a pain-quote on a dark gradient on top, a solution block
 * with stats below. Used on the datev-jira-task-orchestration page and the
 * other steuerberater pages that lead with a pain statement.
 *
 * Stage 1 wraps in <ContentWrapper colorScheme="gradient-dark" isFirstSection>
 * with a 2-column layout (text + optional image).
 *
 * Stage 2 wraps in <ContentWrapper colorScheme="white" bodyWidth="small">
 * with a centered solution headline, description, CTA, plus an optional Stats
 * row below.
 *
 * Accent color is `secondary-400` (Türkis) for the pain label and quote
 * decorations.
 *
 * Sub-Components: .PainLabel, .PainHeadline, .PainDescription, .PainImage,
 * .SolutionLabel, .SolutionHeadline, .SolutionDescription, .SolutionCta,
 * .Stats.
 */

interface ProblemFirstHeroProps {
  children: ReactNode;
}

// ---- Pain (Stage 1) ----

interface PainLabelProps {
  children: ReactNode;
}
function PainLabel({ children }: PainLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary-400">
      {children}
    </div>
  );
}

interface PainHeadlineProps {
  children: ReactNode;
}
function PainHeadline({ children }: PainHeadlineProps) {
  return (
    <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
      <span
        aria-hidden="true"
        className="mr-2 text-5xl leading-none text-secondary-400"
      >
        &ldquo;
      </span>
      {children}
      <span
        aria-hidden="true"
        className="ml-1 text-5xl leading-none text-secondary-400"
      >
        &rdquo;
      </span>
    </h1>
  );
}

interface PainDescriptionProps {
  children: ReactNode;
}
function PainDescription({ children }: PainDescriptionProps) {
  return (
    <p className="mt-6 text-lg text-gray-200 md:text-xl">{children}</p>
  );
}

interface PainImageProps {
  src: string;
  alt?: string;
  priority?: boolean;
}
function PainImage({ src, alt = "", priority = true }: PainImageProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

// ---- Solution (Stage 2) ----

interface SolutionLabelProps {
  children: ReactNode;
}
function SolutionLabel({ children }: SolutionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
      {children}
    </div>
  );
}

interface SolutionHeadlineProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}
function SolutionHeadline({
  children,
  as: Tag = "h2",
}: SolutionHeadlineProps) {
  return (
    <Tag className="mt-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
      {children}
    </Tag>
  );
}

interface SolutionDescriptionProps {
  children: ReactNode;
}
function SolutionDescription({ children }: SolutionDescriptionProps) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
      {children}
    </p>
  );
}

interface SolutionCtaProps {
  children: ReactNode;
}
function SolutionCta({ children }: SolutionCtaProps) {
  return <div className="mt-8 flex justify-center">{children}</div>;
}

interface StatsProps {
  children: ReactNode;
}
function Stats({ children }: StatsProps) {
  const count = Children.count(children);
  const colsClass =
    count <= 2
      ? "sm:grid-cols-2"
      : count === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div
      className={`mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 ${colsClass}`}
    >
      {children}
    </div>
  );
}

// ---- Main ----

function ProblemFirstHero({ children }: ProblemFirstHeroProps) {
  const childArr = Children.toArray(children);

  const find = (type: unknown) =>
    childArr.find(
      (c): c is ReactElement => isValidElement(c) && c.type === type,
    );

  const painLabel = find(PainLabel);
  const painHeadline = find(PainHeadline);
  const painDesc = find(PainDescription);
  const painImage = find(PainImage);

  const solutionLabel = find(SolutionLabel);
  const solutionHeadline = find(SolutionHeadline);
  const solutionDesc = find(SolutionDescription);
  const solutionCta = find(SolutionCta);
  const stats = find(Stats);

  return (
    <>
      {/* Stage 1: Pain on dark gradient */}
      <ContentWrapper colorScheme="gradient-dark" isFirstSection>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            {painLabel}
            {painHeadline}
            {painDesc}
          </div>
          {painImage}
        </div>
      </ContentWrapper>

      {/* Stage 2: Solution on white */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <div className="text-center">
          {solutionLabel}
          {solutionHeadline}
          {solutionDesc}
          {solutionCta}
        </div>
        {stats}
      </ContentWrapper>
    </>
  );
}

ProblemFirstHero.PainLabel = PainLabel;
ProblemFirstHero.PainHeadline = PainHeadline;
ProblemFirstHero.PainDescription = PainDescription;
ProblemFirstHero.PainImage = PainImage;
ProblemFirstHero.SolutionLabel = SolutionLabel;
ProblemFirstHero.SolutionHeadline = SolutionHeadline;
ProblemFirstHero.SolutionDescription = SolutionDescription;
ProblemFirstHero.SolutionCta = SolutionCta;
ProblemFirstHero.Stats = Stats;

export default ProblemFirstHero;
