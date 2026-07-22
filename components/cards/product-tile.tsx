import Image from "next/image";
import Link from "next/link";
import { ReactNode, Children, isValidElement } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { resolveHref } from "@/lib/get-canonical-path";
import SimpleGrid from "@/components/layout/simple-grid";

// Sammelkarten-Design: dunkle Karte mit animiertem Verlaufs-Rand und
// Lichtreflex. Die Feature-Balken fahren auf Desktop erst beim Hover von
// unten hoch (auf Touch-Geräten sind sie immer sichtbar).

// --- Image sub-component (full-bleed at the top, optional badge) ---

interface ProductTileImageProps {
  src: string;
  alt: string;
  badge?: string;
  className?: string;
}

export function ProductTileImage({
  src,
  alt,
  badge,
  className = "",
}: ProductTileImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden">
      <Image src={src} alt={alt} fill className={`object-cover ${className}`} />
      {badge && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gray-950/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-secondary-400" />
          {badge}
        </span>
      )}
    </div>
  );
}

// --- Text sub-components ---

export function ProductTileTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-bold text-white">{children}</h3>;
}

export function ProductTileStat({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 text-xl font-bold text-secondary-400">
      {children}
    </span>
  );
}

export function ProductTileRole({ children }: { children: ReactNode }) {
  return <p className="text-xs text-gray-400">{children}</p>;
}

export function ProductTileDescription({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm text-gray-400 line-clamp-2">{children}</p>;
}

// --- Feature bars: slide up from below on hover (desktop only) ---

export function ProductTileFeatures({ children }: { children: ReactNode }) {
  // Der äußere Container behält immer seine natürliche Höhe (transform ändert
  // das Layout nicht) — die Karte bleibt beim Hover gleich hoch, der Inhalt
  // fährt nur in den reservierten, leeren Bereich hinein.
  return (
    <div className="overflow-hidden">
      <div className="space-y-3 pt-5 transition-all duration-300 ease-out md:translate-y-[110%] md:opacity-0 md:group-hover/tile:translate-y-0 md:group-hover/tile:opacity-100">
        {children}
      </div>
    </div>
  );
}

interface ProductTileFeatureProps {
  children: ReactNode;
  /** Füllstand des Balkens in Prozent (0-100) */
  value?: number;
}

export function ProductTileFeature({
  children,
  value = 85,
}: ProductTileFeatureProps) {
  return (
    <div>
      <p className="text-xs text-gray-300">{children}</p>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full origin-left rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 transition-transform delay-150 duration-500 md:scale-x-0 md:group-hover/tile:scale-x-100"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// --- Footer sub-component (call-to-action label, pinned to the bottom) ---

export function ProductTileFooter({ children }: { children: ReactNode }) {
  return (
    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-white">
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover/tile:translate-x-1" />
    </span>
  );
}

// --- Main component ---

interface ProductTileProps {
  href: string;
  children: ReactNode;
  className?: string;
  resolve?: boolean;
}

function ProductTile({
  href,
  children,
  className = "",
  resolve = true,
}: ProductTileProps) {
  const childArray = Children.toArray(children);
  const find = (type: unknown) =>
    childArray.find((child) => isValidElement(child) && child.type === type);

  const image = find(ProductTileImage);
  const title = find(ProductTileTitle);
  const stat = find(ProductTileStat);
  const rest = childArray.filter(
    (child) => child !== image && child !== title && child !== stat,
  );

  return (
    <Link
      href={resolve ? resolveHref(href) : href}
      className={`product-tile-border group/tile block rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_var(--color-primary-500)] ${className}`}
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary-500), var(--color-secondary-500), var(--color-primary-500))",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 5s ease infinite",
      }}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-2px)] bg-gray-900">
        {/* Lichtreflex: läuft einmal pro Hover durch (siehe globals.css) */}
        <span className="product-tile-sheen pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0" />
        {image}
        <div className="flex flex-1 flex-col p-6">
          {(title || stat) && (
            <div className="flex items-baseline justify-between gap-2">
              {title}
              {stat}
            </div>
          )}
          {rest}
        </div>
      </div>
    </Link>
  );
}

ProductTile.Image = ProductTileImage;
ProductTile.Title = ProductTileTitle;
ProductTile.Stat = ProductTileStat;
ProductTile.Role = ProductTileRole;
ProductTile.Description = ProductTileDescription;
ProductTile.Features = ProductTileFeatures;
ProductTile.Feature = ProductTileFeature;
ProductTile.Footer = ProductTileFooter;

export default ProductTile;

// --- Container component (convenience wrapper, accepts data via props) ---

export interface ProductTileItem {
  href: string;
  title: string;
  image: string;
  imageAlt?: string;
  badge?: string;
  role?: string;
  stat?: string;
  description?: string;
  features?: (string | { label: string; value: number })[];
  linkLabel?: string;
}

interface ProductTileGridProps {
  items: ProductTileItem[];
  cols?: 2 | 3 | 4;
  className?: string;
}

export function ProductTileGrid({
  items,
  cols = 3,
  className = "",
}: ProductTileGridProps) {
  return (
    <SimpleGrid cols={cols} className={className}>
      {items.map((item) => (
        <ProductTile key={item.href} href={item.href}>
          <ProductTileImage
            src={item.image}
            alt={item.imageAlt ?? item.title}
            badge={item.badge}
          />
          <ProductTileTitle>{item.title}</ProductTileTitle>
          {item.stat && <ProductTileStat>{item.stat}</ProductTileStat>}
          {item.role && <ProductTileRole>{item.role}</ProductTileRole>}
          {item.description && (
            <ProductTileDescription>{item.description}</ProductTileDescription>
          )}
          {item.features && item.features.length > 0 && (
            <ProductTileFeatures>
              {item.features.map((feature, index) => {
                const label =
                  typeof feature === "string" ? feature : feature.label;
                const value =
                  typeof feature === "string"
                    ? Math.max(92 - index * 14, 40)
                    : feature.value;
                return (
                  <ProductTileFeature key={label} value={value}>
                    {label}
                  </ProductTileFeature>
                );
              })}
            </ProductTileFeatures>
          )}
          <ProductTileFooter>
            {item.linkLabel ?? "Details ansehen"}
          </ProductTileFooter>
        </ProductTile>
      ))}
    </SimpleGrid>
  );
}
