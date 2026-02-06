import { ReactNode } from "react";

interface PhaseCardProps {
  children: ReactNode;
  className?: string;
}

interface HeaderProps {
  children: ReactNode;
}

interface TitleProps {
  children: ReactNode;
}

interface BadgeProps {
  children: ReactNode;
}

interface SubtitleProps {
  children: ReactNode;
}

interface DescriptionProps {
  children: ReactNode;
}

interface DetailsProps {
  children: ReactNode;
}

interface DetailItemProps {
  children: ReactNode;
  label: string;
  variant?: "default" | "highlight";
}

export function PhaseCardHeader({ children }: HeaderProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-3">{children}</div>
  );
}

export function PhaseCardTitle({ children }: TitleProps) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{children}</h3>
  );
}

export function PhaseCardBadge({ children }: BadgeProps) {
  return (
    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

export function PhaseCardSubtitle({ children }: SubtitleProps) {
  return (
    <p className="text-lg font-semibold text-gray-700 mb-2">{children}</p>
  );
}

export function PhaseCardDescription({ children }: DescriptionProps) {
  return <p className="text-gray-600 mb-4">{children}</p>;
}

export function PhaseCardDetails({ children }: DetailsProps) {
  return <div className="space-y-2 text-sm">{children}</div>;
}

export function PhaseCardDetailItem({
  children,
  label,
  variant = "default",
}: DetailItemProps) {
  const labelClass =
    variant === "highlight"
      ? "font-semibold text-primary-600"
      : "font-semibold text-gray-700";

  return (
    <p>
      <span className={labelClass}>{label}:</span>{" "}
      <span className="text-gray-600">{children}</span>
    </p>
  );
}

export default function PhaseCard({ children, className = "" }: PhaseCardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}
