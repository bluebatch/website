import {
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
  Children,
} from "react";

interface IntroBoxProps {
  children: ReactNode;
  textCentered?: boolean;
  size?: "wide" | "small" | "narrow";
  dark?: boolean;
}

interface SubComponentProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

function IntroBox({
  children,
  textCentered = true,
  size = "narrow",
  dark = false,
}: IntroBoxProps) {
  const sizeClasses = {
    wide: "",
    small: "max-w-4xl",
    narrow: "max-w-3xl",
  };

  const alignClasses = textCentered ? "text-center mx-auto" : "";

  // Only pass dark to IntroBox sub-components
  const childrenWithProps = Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      (child.type === PreHeadline ||
        child.type === Headline ||
        child.type === Subline ||
        child.type === Paragraph)
    ) {
      return cloneElement(child as ReactElement<any>, { dark } as any);
    }
    return child;
  });

  return (
    <div className={`${sizeClasses[size]} ${alignClasses}`}>
      {childrenWithProps}
    </div>
  );
}

function PreHeadline({
  children,
  className = "",
  dark = false,
}: SubComponentProps) {
  const defaultClass = "bg-gradient-to-r bg-clip-text text-transparent";
  const colorClasses = dark
    ? "from-secondary-400 via-secondary-600 to-secondary-300"
    : "from-primary-400 via-primary-700 to-primary-600";

  return (
    <h3
      className={`inline-block text-sm md:text-base font-semibold mb-4 uppercase tracking-wide ${defaultClass} ${colorClasses} ${className}`}
    >
      {children}
    </h3>
  );
}

function Headline({
  children,
  className = "",
  dark = false,
}: SubComponentProps) {
  const colorClasses = dark ? "text-white" : "text-gray-900";

  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${colorClasses} ${className}`}
    >
      {children}
    </h2>
  );
}

function Subline({
  children,
  className = "",
  dark = false,
}: SubComponentProps) {
  const colorClasses = dark ? "text-white" : "text-gray-600";

  return (
    <p className={`text-lg md:text-xl mb-4 ${colorClasses} ${className}`}>
      {children}
    </p>
  );
}

function Paragraph({
  children,
  className = "",
  dark = false,
}: SubComponentProps) {
  const colorClasses = dark ? "text-gray-200" : "text-gray-700";

  return (
    <p className={`text-base mb-12 font-medium ${colorClasses} ${className}`}>
      {children}
    </p>
  );
}

IntroBox.PreHeadline = PreHeadline;
IntroBox.Headline = Headline;
IntroBox.Subline = Subline;
IntroBox.Paragraph = Paragraph;

export default IntroBox;
