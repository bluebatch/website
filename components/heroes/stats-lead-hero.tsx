import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
} from "react";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";

/**
 * StatsLeadHero
 *
 * Two-column hero with a square media tile on the right and a stats grid
 * stacked under the CTA on the left. Used on the mandantenkommunikation page
 * and other steuerberater pages that want stats up top rather than below.
 *
 * Self-wraps in <ContentWrapper colorScheme="white" isFirstSection>. The
 * media column is 1:1 on desktop, full-width below the text on mobile.
 *
 * Sub-Components: .PreHeadline, .Headline (renders <h1> always), .Description,
 * .Cta, .Stats, .Media.
 */

interface StatsLeadHeroProps {
  children: ReactNode;
}

// ---- Text-column sub-components ----

interface PreHeadlineProps {
  children: ReactNode;
}
function PreHeadline({ children }: PreHeadlineProps) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-700">
      {children}
    </p>
  );
}

interface HeadlineProps {
  children: ReactNode;
}
function Headline({ children }: HeadlineProps) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
      {children}
    </h1>
  );
}

interface DescriptionProps {
  children: ReactNode;
}
function Description({ children }: DescriptionProps) {
  return (
    <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
      {children}
    </p>
  );
}

interface CtaProps {
  children: ReactNode;
}
function Cta({ children }: CtaProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 sm:flex-row">{children}</div>
  );
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
    <div className={`grid grid-cols-1 gap-4 ${colsClass}`}>{children}</div>
  );
}

// ---- Media column ----

interface MediaProps {
  src: string;
  alt?: string;
  priority?: boolean;
}
function Media({ src, alt = "", priority = true }: MediaProps) {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
    </div>
  );
}

// ---- Main ----

function StatsLeadHero({ children }: StatsLeadHeroProps) {
  const childArr = Children.toArray(children);

  const find = (type: unknown) =>
    childArr.find(
      (c): c is ReactElement => isValidElement(c) && c.type === type,
    );

  const pre = find(PreHeadline);
  const headline = find(Headline);
  const desc = find(Description);
  const cta = find(Cta);
  const stats = find(Stats);
  const media = find(Media);

  return (
    <ContentWrapper colorScheme="white" isFirstSection>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          {pre}
          {headline}
          {desc}
          {cta}
          {stats}
        </div>
        {media}
      </div>
    </ContentWrapper>
  );
}

StatsLeadHero.PreHeadline = PreHeadline;
StatsLeadHero.Headline = Headline;
StatsLeadHero.Description = Description;
StatsLeadHero.Cta = Cta;
StatsLeadHero.Stats = Stats;
StatsLeadHero.Media = Media;

export default StatsLeadHero;
