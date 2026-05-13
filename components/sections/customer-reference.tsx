"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomerReferenceProps {
  children: ReactNode;
  className?: string;
}

interface StarsProps {
  count?: number;
  className?: string;
}

interface AttributionProps {
  name: string;
  role: string;
  icon?: ReactNode;
  className?: string;
}

interface QuoteProps {
  children: ReactNode;
  className?: string;
}

export function ReferenceStars({ count = 5, className = "" }: StarsProps) {
  return (
    <div
      className={`flex items-center gap-1 text-secondary-500 ${className}`}
      aria-label={`${count} von 5 Sternen`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.169c.969 0 1.371 1.24.588 1.81l-3.373 2.451a1 1 0 0 0-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.539 1.118l-3.373-2.451a1 1 0 0 0-1.175 0l-3.373 2.451c-.783.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.169a1 1 0 0 0 .95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export function ReferenceAttribution({
  name,
  role,
  icon,
  className = "",
}: AttributionProps) {
  return (
    <div className={`mt-5 flex items-start gap-4 ${className}`}>
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-100 text-primary-700 shadow-sm">
        {icon ?? (
          <span className="text-sm font-bold uppercase tracking-wide">
            {name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join("")}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-col pt-1">
        <span className="text-lg font-bold text-gray-900 md:text-xl">
          {name}
        </span>
        <span className="text-sm leading-snug text-gray-500">{role}</span>
      </div>
    </div>
  );
}

export function ReferenceQuote({ children, className = "" }: QuoteProps) {
  return (
    <blockquote
      className={`mt-6 text-base leading-relaxed text-gray-700 md:text-lg ${className}`}
    >
      <span aria-hidden="true">„</span>
      {children}
      <span aria-hidden="true">“</span>
    </blockquote>
  );
}

export default function CustomerReference({
  children,
  className = "",
}: CustomerReferenceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
      className={`relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}
