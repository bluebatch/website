"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import ContactButton from "@/components/buttons/contact-button";

interface HiringProps {
  children: ReactNode;
  className?: string;
}

interface HiringPositionProps {
  children: ReactNode;
  className?: string;
}

interface HiringTitleProps {
  children: ReactNode;
  className?: string;
}

interface HiringTypeProps {
  children: ReactNode;
  className?: string;
}

interface HiringLocationProps {
  children: ReactNode;
  className?: string;
}

interface HiringDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface HiringRequirementsProps {
  children: ReactNode;
  className?: string;
}

interface HiringTagsProps {
  children: ReactNode;
  className?: string;
}

interface HiringTagProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

interface HiringApplyProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HiringPosition({
  children,
  className = "",
}: HiringPositionProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function HiringTitle({ children, className = "" }: HiringTitleProps) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 mb-1 ${className}`}>
      {children}
    </h3>
  );
}

export function HiringType({ children, className = "" }: HiringTypeProps) {
  return (
    <p
      className={`text-sm font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-3 ${className}`}
    >
      {children}
    </p>
  );
}

export function HiringLocation({
  children,
  className = "",
}: HiringLocationProps) {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm text-gray-500 mb-4 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 shrink-0"
      >
        <path
          fillRule="evenodd"
          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </div>
  );
}

export function HiringDescription({
  children,
  className = "",
}: HiringDescriptionProps) {
  return (
    <p className={`text-gray-600 mb-4 leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
}

export function HiringRequirements({
  children,
  className = "",
}: HiringRequirementsProps) {
  return (
    <ul
      className={`text-sm text-gray-600 mb-6 space-y-1.5 list-none ${className}`}
    >
      {children}
    </ul>
  );
}

export function HiringRequirement({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={`flex items-start gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-secondary-600 shrink-0 mt-0.5"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function HiringTags({ children, className = "" }: HiringTagsProps) {
  return (
    <div className={`flex flex-wrap gap-2 mb-6 ${className}`}>{children}</div>
  );
}

export function HiringTag({
  children,
  className = "",
  variant = "primary",
}: HiringTagProps) {
  const variantStyles = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    accent: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function HiringApply({
  href = "/contact",
  children,
  className = "",
}: HiringApplyProps) {
  return (
    <div className={`mt-auto pt-4 ${className}`}>
      <ContactButton href={href} icon="mail" color="primary" size="sm">
        {children || "Jetzt bewerben"}
      </ContactButton>
    </div>
  );
}

function Hiring({ children, className = "" }: HiringProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      {children}
    </div>
  );
}

Hiring.Position = HiringPosition;
Hiring.Title = HiringTitle;
Hiring.Type = HiringType;
Hiring.Location = HiringLocation;
Hiring.Description = HiringDescription;
Hiring.Requirements = HiringRequirements;
Hiring.Requirement = HiringRequirement;
Hiring.Tags = HiringTags;
Hiring.Tag = HiringTag;
Hiring.Apply = HiringApply;

export default Hiring;
