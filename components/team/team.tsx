"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamProps {
  children: ReactNode;
  className?: string;
}

interface TeamMemberProps {
  children: ReactNode;
  className?: string;
}

interface TeamImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface TeamNameProps {
  children: ReactNode;
  className?: string;
}

interface TeamRoleProps {
  children: ReactNode;
  className?: string;
}

interface TeamDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface TeamTagsProps {
  children: ReactNode;
  className?: string;
}

interface TeamTagProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TeamMember({ children, className = "" }: TeamMemberProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function TeamImage({ src, alt, className = "" }: TeamImageProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`relative w-48 h-48 mx-auto mb-6 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-full shadow-lg border-4 border-white"
      />
    </motion.div>
  );
}

export function TeamName({ children, className = "" }: TeamNameProps) {
  return (
    <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function TeamRole({ children, className = "" }: TeamRoleProps) {
  return (
    <p
      className={`text-lg font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

export function TeamDescription({
  children,
  className = "",
}: TeamDescriptionProps) {
  return (
    <p className={`text-gray-600 mb-6 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function TeamTags({ children, className = "" }: TeamTagsProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {children}
    </div>
  );
}

export function TeamTag({
  children,
  className = "",
  variant = "primary",
}: TeamTagProps) {
  const variantStyles = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    accent: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 text-sm font-medium rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

function Team({ children, className = "" }: TeamProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${className}`}
    >
      {children}
    </div>
  );
}

// Attach sub-components for dot notation
Team.Member = TeamMember;
Team.Image = TeamImage;
Team.Name = TeamName;
Team.Role = TeamRole;
Team.Description = TeamDescription;
Team.Tags = TeamTags;
Team.Tag = TeamTag;

export default Team;
