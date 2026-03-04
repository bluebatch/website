import Image from "next/image";
import { ReactNode, Children, isValidElement, cloneElement } from "react";
import { colorSchemeMap, type ColorScheme } from "@/lib/color-schemes";

type CardVariant = "default" | "danger" | "success";

type IconColor =
  | "primary"
  | "secondary"
  | "primary-gradient"
  | "white"
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "red"
  | "pink";

const variantStyles = {
  default: {
    card: "bg-white border-gray-200",
    footer: "border-primary-200",
  },
  danger: {
    card: "bg-red-50 border-red-200",
    footer: "border-red-200",
  },
  success: {
    card: "bg-green-50 border-green-200",
    footer: "border-green-200",
  },
};

const bgColorClasses: Record<IconColor, string> = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  "primary-gradient": "bg-gradient-to-br from-primary-400 to-primary-700",
  white: "bg-white",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  green: "bg-green-600",
  orange: "bg-orange-500",
  red: "bg-red-500",
  pink: "bg-pink-500",
};

const textColorClasses: Record<IconColor, string> = {
  primary: "text-primary-500",
  secondary: "text-secondary-500",
  "primary-gradient": "",
  white: "text-white",
  blue: "text-blue-500",
  purple: "text-purple-500",
  green: "text-green-600",
  orange: "text-orange-500",
  red: "text-red-500",
  pink: "text-pink-500",
};

// --- Shared size system ---

type VisualSize = "sm" | "md" | "lg" | "xl";

const visualSizeClasses: Record<VisualSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-16",
  xl: "size-28",
};

const bgCircleSizeClasses: Record<VisualSize, string> = {
  sm: "size-14",
  md: "size-16",
  lg: "size-24",
  xl: "size-40",
};

// --- Icon sub-component ---

interface SimpleCardIconProps {
  src?: string;
  alt?: string;
  color?: IconColor;
  background?: IconColor;
  size?: VisualSize;
  className?: string;
  children?: ReactNode;
}

const PrimaryGradientDefs = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient
        id="icon-primary-gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="var(--color-primary-400)" />
        <stop offset="100%" stopColor="var(--color-primary-700)" />
      </linearGradient>
    </defs>
  </svg>
);

export function SimpleCardIcon({
  src,
  alt = "",
  color = "primary",
  background,
  size = "md",
  className = "",
  children,
}: SimpleCardIconProps) {
  // Build the icon element
  let icon: ReactNode;

  if (children) {
    const needsGradientDefs = color === "primary-gradient";
    icon = (
      <div className={textColorClasses[color]}>
        {needsGradientDefs && <PrimaryGradientDefs />}
        {children}
      </div>
    );
  } else {
    icon = (
      <div
        className={`${visualSizeClasses[size]} ${bgColorClasses[color]}`}
        style={{
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
        role="img"
        aria-label={alt}
      />
    );
  }

  // Wrap in background circle if set
  if (background) {
    return (
      <div
        className={`${bgCircleSizeClasses[size]} rounded-full ${bgColorClasses[background]} flex items-center justify-center ${className}`}
      >
        {icon}
      </div>
    );
  }

  // No background — attach className directly
  if (children) {
    const needsGradientDefs = color === "primary-gradient";
    return (
      <div className={`${textColorClasses[color]} ${className}`}>
        {needsGradientDefs && <PrimaryGradientDefs />}
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${visualSizeClasses[size]} ${bgColorClasses[color]} ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
      role="img"
      aria-label={alt}
    />
  );
}

// --- Image sub-component ---

interface SimpleCardImageProps {
  src: string;
  alt: string;
  size?: VisualSize;
  className?: string;
}

export function SimpleCardImage({
  src,
  alt,
  size = "md",
  className = "",
}: SimpleCardImageProps) {
  return (
    <div
      className={`${visualSizeClasses[size]} relative flex items-center justify-center`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain ${className}`}
      />
    </div>
  );
}

// --- Footer sub-component ---

interface FooterProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

export function SimpleCardFooter({
  children,
  className = "",
  variant = "default",
}: FooterProps) {
  const footerBorderClass = variantStyles[variant].footer;

  return (
    <div
      className={`w-full mt-4 pt-4 pb-4 border-t ${footerBorderClass} ${className}`}
    >
      {children}
    </div>
  );
}

// --- Main component ---

interface SimpleCardProps {
  dark?: boolean;
  variant?: CardVariant;
  children?: ReactNode;
  className?: string;
  colorScheme?: ColorScheme;
  align?: "center" | "left";
}

function SimpleCard({
  children,
  dark = false,
  variant = "default",
  className = "",
  colorScheme,
  align = "center",
}: SimpleCardProps) {
  const variantClass = variantStyles[variant].card;
  const scheme = colorScheme ? colorSchemeMap[colorScheme] : null;
  const backgroundClass = scheme
    ? `${scheme.bg} ${scheme.text}`
    : variantClass;
  const darkClass = dark ? "border-secondary" : "";

  const childArray = Children.toArray(children);

  const iconChild = childArray.find(
    (child) => isValidElement(child) && child.type === SimpleCardIcon,
  );
  const imageChild = childArray.find(
    (child) => isValidElement(child) && child.type === SimpleCardImage,
  );
  const footerChild = childArray.find(
    (child) => isValidElement(child) && child.type === SimpleCardFooter,
  );

  const contentChildren = childArray.filter(
    (child) =>
      !(
        isValidElement(child) &&
        (child.type === SimpleCardIcon ||
          child.type === SimpleCardImage ||
          child.type === SimpleCardFooter)
      ),
  );

  const footerWithVariant =
    footerChild && isValidElement(footerChild)
      ? cloneElement(footerChild as React.ReactElement<FooterProps>, {
          variant,
        })
      : null;

  const hasVisual = iconChild || imageChild;

  return (
    <div
      className={`border flex flex-col ${align === "left" ? "items-start text-left px-6" : "items-center text-center px-4"} pb-8 shadow-md hover:shadow-lg ${hasVisual ? "pt-8" : "pt-6"} ${backgroundClass} ${darkClass} ${className}`}
    >
      {iconChild}
      {imageChild}
      <div className={footerWithVariant ? "flex-1" : ""}>
        {contentChildren}
      </div>
      {footerWithVariant}
    </div>
  );
}

SimpleCard.Icon = SimpleCardIcon;
SimpleCard.Image = SimpleCardImage;
SimpleCard.Footer = SimpleCardFooter;

export default SimpleCard;
