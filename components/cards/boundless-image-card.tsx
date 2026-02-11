import { ReactNode } from "react";
import Image from "next/image";

// Sub-components
interface BoundlessImageCardImageProps {
  src: string;
  alt: string;
  fadeGradient?: boolean;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
}

function BoundlessImageCardImage({
  src,
  alt,
  fadeGradient = false,
  gradientFrom = "from-gray-900",
  gradientVia = "via-gray-900/20",
  gradientTo = "to-transparent",
  className = "",
}: BoundlessImageCardImageProps) {
  return (
    <div className={`relative h-full min-h-[400px] ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      {fadeGradient && (
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradientFrom} ${gradientVia} ${gradientTo}`}
        />
      )}
    </div>
  );
}

interface BoundlessImageCardContentProps {
  children: ReactNode;
  className?: string;
}

function BoundlessImageCardContent({
  children,
  className = "",
}: BoundlessImageCardContentProps) {
  return <div className={`p-8 lg:p-12 ${className}`}>{children}</div>;
}

// Main component
interface BoundlessImageCardProps {
  children: ReactNode;
  imagePosition?: "left" | "right";
  ratio?: "2-3" | "3-2" | "equal";
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  border?: boolean;
  background?: string;
}

function BoundlessImageCard({
  children,
  imagePosition = "right",
  ratio = "equal",
  className = "",
  rounded = true,
  shadow = true,
  border = true,
  background = "bg-white",
}: BoundlessImageCardProps) {
  const roundedClass = rounded ? "rounded-lg" : "";
  const shadowClass = shadow
    ? "shadow-sm hover:shadow-lg transition-shadow"
    : "";
  const borderClass = border ? "border border-gray-200" : "";

  // Determine grid template based on ratio
  let gridCols = "md:grid-cols-2"; // equal
  if (ratio === "2-3") {
    gridCols = "md:grid-cols-5";
  } else if (ratio === "3-2") {
    gridCols = "md:grid-cols-5";
  }

  const childrenArray = Array.isArray(children) ? children : [children];
  const imageChild = childrenArray.find(
    (child: any) => child?.type === BoundlessImageCardImage,
  );
  const contentChild = childrenArray.find(
    (child: any) => child?.type === BoundlessImageCardContent,
  );

  // Calculate column spans for non-equal ratios
  const contentColSpan =
    ratio === "2-3" ? "md:col-span-2" : ratio === "3-2" ? "md:col-span-3" : "";
  const imageColSpan =
    ratio === "2-3" ? "md:col-span-3" : ratio === "3-2" ? "md:col-span-2" : "";

  // On mobile, image always on top. On desktop, respect imagePosition
  const imageOrderClass = imagePosition === "left" ? "md:order-1" : "md:order-2";
  const contentOrderClass = imagePosition === "left" ? "md:order-2" : "md:order-1";

  return (
    <div
      className={`${background} ${roundedClass} ${shadowClass} ${borderClass} overflow-hidden ${className}`}
    >
      <div className={`grid grid-cols-1 ${gridCols} items-center`}>
        {/* Image always first on mobile (order-1), positioned by prop on desktop */}
        <div className={`${imageColSpan} h-full order-1 ${imageOrderClass}`}>
          {imageChild}
        </div>
        {/* Content always second on mobile (order-2), positioned by prop on desktop */}
        <div className={`${contentColSpan} order-2 ${contentOrderClass}`}>
          {contentChild}
        </div>
      </div>
    </div>
  );
}

// Attach sub-components
BoundlessImageCard.Image = BoundlessImageCardImage;
BoundlessImageCard.Content = BoundlessImageCardContent;

export default BoundlessImageCard;

// Named exports for sub-components
export { BoundlessImageCardImage, BoundlessImageCardContent };
