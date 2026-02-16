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
  src?: string;
  alt?: string;
  initials?: string;
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

interface TeamLinkedInProps {
  href: string;
  className?: string;
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
      className={`bg-white rounded-xl p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function TeamImage({
  src,
  alt,
  initials,
  className = "",
}: TeamImageProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`relative w-28 h-28 mx-auto mb-4 ${className}`}
    >
      {initials ? (
        <div className="w-full h-full rounded-full bg-primary-800 shadow-md border-3 border-white flex items-center justify-center">
          <span className="text-3xl font-bold text-white">{initials}</span>
        </div>
      ) : (
        <Image
          src={src!}
          alt={alt!}
          fill
          className="object-cover rounded-full shadow-md border-3 border-white"
        />
      )}
    </motion.div>
  );
}

export function TeamName({ children, className = "" }: TeamNameProps) {
  return (
    <h3 className={`text-lg font-bold text-gray-900 mb-1 ${className}`}>
      {children}
    </h3>
  );
}

export function TeamRole({ children, className = "" }: TeamRoleProps) {
  return (
    <p
      className={`text-sm font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-3 ${className}`}
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
    <p className={`text-gray-600 text-sm mb-4 leading-relaxed ${className}`}>
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
      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function TeamLinkedIn({ href, className = "" }: TeamLinkedInProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs text-primary-600 hover:text-primary-800 font-medium mt-3 transition-colors ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      LinkedIn
    </a>
  );
}

function Team({ children, className = "" }: TeamProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}
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
Team.LinkedIn = TeamLinkedIn;

export default Team;
