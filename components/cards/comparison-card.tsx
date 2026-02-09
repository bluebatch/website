"use client";
import { motion } from "framer-motion";
import { ReactNode, createContext, useContext } from "react";

// Context to pass card type to children
type CardType = "before" | "after";
const CardTypeContext = createContext<CardType>("before");

// Icons
function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-500 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-400 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// Styles
const cardStyles = {
  before: {
    card: "bg-gray-50 border-gray-200",
    headline: "bg-red-600 text-white",
    footer: "border-gray-200",
    listText: "text-gray-700",
  },
  after: {
    card: "bg-primary-800 border-primary-700",
    headline: "bg-green-600 text-white",
    footer: "border-green-400 text-white",
    listText: "text-white",
  },
};

// Sub-components
export function ComparisonHeadline({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const type = useContext(CardTypeContext);
  const headlineClass = cardStyles[type].headline;
  return (
    <span
      className={`inline-block px-4 py-2 rounded-md text-lg md:text-xl font-bold ${headlineClass} ${className}`}
    >
      {children}
    </span>
  );
}

export function ComparisonList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={`mt-4 space-y-3 ${className}`}>{children}</ul>;
}

export function ComparisonListItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const type = useContext(CardTypeContext);
  const Icon = type === "before" ? XIcon : CheckIcon;
  const textClass = cardStyles[type].listText;
  return (
    <li className={`flex items-start gap-3 ${textClass} ${className}`}>
      <span className="mt-0.5">
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function ComparisonFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const type = useContext(CardTypeContext);
  const footerClass = cardStyles[type].footer;
  return (
    <div
      className={`mt-4 pt-4 border-t text-xl font-bold ${footerClass} ${className}`}
    >
      {children}
    </div>
  );
}

// Card wrappers
export function BeforeCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const styles = cardStyles.before;

  return (
    <CardTypeContext.Provider value="before">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        className={`border p-6 shadow-md ${styles.card} ${className}`}
      >
        {children}
      </motion.div>
    </CardTypeContext.Provider>
  );
}

export function AfterCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const styles = cardStyles.after;

  return (
    <CardTypeContext.Provider value="after">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        className={`border p-6 shadow-md ${styles.card} ${className}`}
      >
        {children}
      </motion.div>
    </CardTypeContext.Provider>
  );
}

// Main component - container for Before/After cards
export default function ComparisonCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}
