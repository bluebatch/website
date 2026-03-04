import { ReactNode } from "react";

interface TypoProps {
  children: ReactNode;
  className?: string;
  disableMargin?: boolean;
  id?: string;
}

function H1({
  children,
  className = "",
  disableMargin = false,
  id,
}: TypoProps) {
  const marginClasses = disableMargin ? "" : "mb-6";
  return (
    <h1
      id={id}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold ${marginClasses} leading-tight ${className}`}
    >
      {children}
    </h1>
  );
}

function H2({
  children,
  className = "",
  disableMargin = false,
  id,
}: TypoProps) {
  const marginClasses = disableMargin ? "" : "mb-5 mt-10";
  return (
    <h2
      id={id}
      className={`text-3xl md:text-4xl font-bold ${marginClasses} leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

function H3({
  children,
  className = "",
  disableMargin = false,
  id,
}: TypoProps) {
  const marginClasses = disableMargin ? "" : "mb-4 mt-8";
  return (
    <h3
      id={id}
      className={`text-xl md:text-2xl font-semibold ${marginClasses} leading-snug ${className}`}
    >
      {children}
    </h3>
  );
}

function H4({
  children,
  className = "",
  disableMargin = false,
  id,
}: TypoProps) {
  const marginClasses = disableMargin ? "" : "mb-3 mt-6";
  return (
    <h4
      id={id}
      className={`text-lg md:text-xl font-semibold ${marginClasses} leading-snug ${className}`}
    >
      {children}
    </h4>
  );
}

interface ParagraphProps extends TypoProps {
  textColor?: "muted";
  size?: "sm";
  spacing?: "lg" | "none";
}

function Paragraph({
  children,
  className = "",
  textColor,
  size,
  spacing,
}: ParagraphProps) {
  const colorClass = textColor === "muted" ? "text-gray-600" : "text-gray-700";
  const sizeClass = size === "sm" ? "text-sm" : "text-base";
  const spacingClass =
    spacing === "lg" ? "mb-6" : spacing === "none" ? "mb-0" : "mb-4";

  return (
    <p
      className={`${sizeClass} ${colorClass} leading-relaxed ${spacingClass} ${className}`}
    >
      {children}
    </p>
  );
}

function List({ children, className = "" }: TypoProps) {
  return (
    <ul className={`list-disc pl-6 space-y-2 text-gray-700 ${className}`}>
      {children}
    </ul>
  );
}

function ListItem({ children, className = "" }: TypoProps) {
  return <li className={className}>{children}</li>;
}

const Typo = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  List,
  ListItem,
};

export default Typo;
