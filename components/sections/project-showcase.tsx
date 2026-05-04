import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

/**
 * project-showcase
 *
 * Static homepage section. Centered headline + 2-column layout:
 *   - Left  (60%): media (image OR video)
 *   - Right (40%): info card with tags, title, domain, description, metrics,
 *                   tech badges, status + timeline footer
 *
 * Sub-components are exported individually for Server-Component compatibility.
 *
 *   <ProjectShowcase>
 *     <ProjectShowcaseHeader>
 *       <ProjectShowcasePreHeadline>Flagship Projekte</ProjectShowcasePreHeadline>
 *       <ProjectShowcaseHeadline>Größten Erfolge</ProjectShowcaseHeadline>
 *       <ProjectShowcaseSubtitle>Stolze Präsentation...</ProjectShowcaseSubtitle>
 *     </ProjectShowcaseHeader>
 *
 *     <ProjectShowcaseGrid>
 *       <ProjectShowcaseMedia type="video" src="/videos/demo.mp4" />
 *
 *       <ProjectShowcaseInfo>
 *         <ProjectShowcaseInfoTags>
 *           <ProjectShowcaseInfoTag>United Kingdom</ProjectShowcaseInfoTag>
 *           <ProjectShowcaseInfoTag variant="solid">Audit System Development</ProjectShowcaseInfoTag>
 *         </ProjectShowcaseInfoTags>
 *         <ProjectShowcaseInfoTitle>AMZONICS — Amazon PPC Audit System</ProjectShowcaseInfoTitle>
 *         <ProjectShowcaseInfoDomain href="https://amzonics.com">amzonics.com</ProjectShowcaseInfoDomain>
 *         <ProjectShowcaseInfoDescription>...</ProjectShowcaseInfoDescription>
 *
 *         <ProjectShowcaseInfoMetrics>
 *           <ProjectShowcaseInfoMetric value="75%" label="Reduction in audit time" />
 *           <ProjectShowcaseInfoMetric value="95%" label="Accuracy improvement" />
 *           <ProjectShowcaseInfoMetric value="3x"  label="Faster report generation" />
 *           <ProjectShowcaseInfoMetric value="40+" label="Client campaigns audited" />
 *         </ProjectShowcaseInfoMetrics>
 *
 *         <ProjectShowcaseInfoTechList label="Technologien:">
 *           <ProjectShowcaseInfoTechBadge>React</ProjectShowcaseInfoTechBadge>
 *           <ProjectShowcaseInfoTechBadge>Node.js</ProjectShowcaseInfoTechBadge>
 *         </ProjectShowcaseInfoTechList>
 *
 *         <ProjectShowcaseInfoFooter>
 *           <ProjectShowcaseInfoFooterRow label="Status">Live in Production</ProjectShowcaseInfoFooterRow>
 *           <ProjectShowcaseInfoFooterRow label="Timeline">3 months</ProjectShowcaseInfoFooterRow>
 *         </ProjectShowcaseInfoFooter>
 *       </ProjectShowcaseInfo>
 *     </ProjectShowcaseGrid>
 *   </ProjectShowcase>
 */

interface ContainerProps {
  children: ReactNode;
}

interface MediaProps {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  width?: number;
  height?: number;
  ringClassName?: string;
}

interface TagProps {
  children: ReactNode;
  variant?: "outline" | "solid";
}

interface DomainProps {
  href: string;
  children: ReactNode;
}

interface MetricProps {
  value: ReactNode;
  label: ReactNode;
}

interface TechListProps {
  label?: ReactNode;
  children: ReactNode;
}

interface FooterRowProps {
  label: ReactNode;
  children: ReactNode;
}

interface CtaProps {
  href: string;
  children?: ReactNode;
}

// ---------- Header ----------

export function ProjectShowcaseHeader({ children }: ContainerProps) {
  return <div className="mx-auto max-w-3xl text-center">{children}</div>;
}

export function ProjectShowcasePreHeadline({ children }: ContainerProps) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
      {children}
    </p>
  );
}

export function ProjectShowcaseHeadline({ children }: ContainerProps) {
  // No explicit text color — inherits from <ContentWrapper> so it works on
  // both light and dark backgrounds.
  return (
    <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      {children}
    </h2>
  );
}

export function ProjectShowcaseSubtitle({ children }: ContainerProps) {
  // Inherits text color, dims via opacity so it works on light AND dark BG.
  return (
    <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
      {children}
    </p>
  );
}

// ---------- Grid (one glassy card, 60/40 split on lg+) ----------
// The Grid IS the card: glass background + gradient border via mask-composite,
// so Media and Info appear as one continuous surface on a dark wrapper.

export function ProjectShowcaseGrid({ children }: ContainerProps) {
  return (
    <div
      className="relative mt-10 grid grid-cols-1 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl lg:grid-cols-5 items-stretch"
      style={{
        boxShadow:
          "0 0 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Content layer */}
      <div className="contents">{children}</div>

      {/* Inner glow overlay (top-left to bottom-right white sheen) */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />

      {/* Gradient border via mask-composite */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        style={{
          padding: "2px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}

// ---------- Media (left column, spans 3/5) ----------

export function ProjectShowcaseMedia({
  type,
  src,
  alt = "",
  poster,
  width = 1200,
  height = 800,
  // ringClassName kept in props for backwards compatibility but no longer used
  // since the parent Grid owns the border now.
  ringClassName: _ringClassName,
}: MediaProps) {
  return (
    <div className="relative z-0 bg-black/20 lg:col-span-3">
      {type === "video" ? (
        <video
          className="block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-full w-full object-cover"
        />
      )}
    </div>
  );
}

// ---------- Info card (right column, spans 2/5) ----------
// Solid white surface (dark in dark mode) — sits inside the glass Grid so
// you get the dark-glass video on the left and a clean readable info zone
// on the right, all under one unified glass border.

export function ProjectShowcaseInfo({ children }: ContainerProps) {
  return (
    <div className="relative z-10 flex flex-col gap-4 bg-white p-6 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:col-span-2 lg:p-8">
      {children}
    </div>
  );
}

export function ProjectShowcaseInfoTags({ children }: ContainerProps) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export function ProjectShowcaseInfoTag({
  children,
  variant = "outline",
}: TagProps) {
  const styles =
    variant === "solid"
      ? "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-500/20 dark:text-primary-200 dark:border-primary-400/30"
      : "bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}

export function ProjectShowcaseInfoTitle({ children }: ContainerProps) {
  // Inherits text color from wrapper (white on dark)
  return (
    <h3 className="text-2xl md:text-3xl font-bold leading-snug">{children}</h3>
  );
}

export function ProjectShowcaseInfoDomain({ href, children }: DomainProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 hover:underline dark:text-primary-300 dark:hover:text-white"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656-5.656"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.172 13.828a4 4 0 01-5.656-5.656l3-3a4 4 0 015.656 5.656"
        />
      </svg>
      {children}
    </Link>
  );
}

export function ProjectShowcaseInfoDescription({ children }: ContainerProps) {
  return (
    <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
      {children}
    </p>
  );
}

export function ProjectShowcaseInfoMetrics({ children }: ContainerProps) {
  return (
    <div className="grid grid-cols-2 gap-3">{children}</div>
  );
}

export function ProjectShowcaseInfoMetric({ value, label }: MetricProps) {
  return (
    <div className="rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-700/50">
      <div className="text-2xl font-bold text-primary-600 dark:text-primary-300">
        {value}
      </div>
      <div className="mt-0.5 text-xs leading-tight text-gray-600 dark:text-gray-300">
        {label}
      </div>
    </div>
  );
}

export function ProjectShowcaseInfoTechList({
  label = "Technologien:",
  children,
}: TechListProps) {
  return (
    <div className="mt-1">
      <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

export function ProjectShowcaseInfoTechBadge({ children }: ContainerProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </span>
  );
}

export function ProjectShowcaseInfoFooter({ children }: ContainerProps) {
  return (
    <div className="mt-1 space-y-1 border-t border-gray-100 pt-3 dark:border-gray-700">
      {children}
    </div>
  );
}

export function ProjectShowcaseInfoFooterRow({
  label,
  children,
}: FooterRowProps) {
  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      <span className="font-medium text-gray-700 dark:text-gray-200">
        {label}:
      </span>{" "}
      <span>{children}</span>
    </div>
  );
}

// ---------- Detail-page CTA (bottom of Info card) ----------

export function ProjectShowcaseInfoCta({
  href,
  children = "Projekt ansehen",
}: CtaProps) {
  return (
    <Link
      href={href}
      className="group mt-2 inline-flex items-center gap-1.5 self-start bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400"
    >
      {children}
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </Link>
  );
}

// ---------- Root ----------

export default function ProjectShowcase({ children }: ContainerProps) {
  return <section className="w-full">{children}</section>;
}

// Compound namespace (Client Components only)
export const ProjectShowcaseCompound = {
  Root: ProjectShowcase,
  Header: ProjectShowcaseHeader,
  PreHeadline: ProjectShowcasePreHeadline,
  Headline: ProjectShowcaseHeadline,
  Subtitle: ProjectShowcaseSubtitle,
  Grid: ProjectShowcaseGrid,
  Media: ProjectShowcaseMedia,
  Info: ProjectShowcaseInfo,
  InfoTags: ProjectShowcaseInfoTags,
  InfoTag: ProjectShowcaseInfoTag,
  InfoTitle: ProjectShowcaseInfoTitle,
  InfoDomain: ProjectShowcaseInfoDomain,
  InfoDescription: ProjectShowcaseInfoDescription,
  InfoMetrics: ProjectShowcaseInfoMetrics,
  InfoMetric: ProjectShowcaseInfoMetric,
  InfoTechList: ProjectShowcaseInfoTechList,
  InfoTechBadge: ProjectShowcaseInfoTechBadge,
  InfoFooter: ProjectShowcaseInfoFooter,
  InfoFooterRow: ProjectShowcaseInfoFooterRow,
  InfoCta: ProjectShowcaseInfoCta,
};
