"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SavingsCardProps {
  children: ReactNode;
  className?: string;
}

interface ItemProps {
  children: ReactNode;
  label: string;
  highlight?: boolean;
}

interface BadgeProps {
  children: ReactNode;
}

interface ItemsContainerProps {
  children: ReactNode;
}

export function SavingsBadge({ children }: BadgeProps) {
  return (
    <div className="bg-primary-950 px-6 py-4 text-center border-b-2 border-secondary-500">
      <span className="text-base md:text-lg font-bold text-white uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}

export function SavingsItems({ children }: ItemsContainerProps) {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
    </div>
  );
}

export function SavingsItem({ children, label, highlight = false }: ItemProps) {
  return (
    <div className="text-center">
      <div
        className={`text-3xl md:text-4xl font-bold mb-2 ${
          highlight ? "text-secondary-400" : "text-white"
        }`}
      >
        {children}
      </div>
      <div className="text-sm md:text-base text-white/70 uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  );
}

export default function SavingsCard({
  children,
  className = "",
}: SavingsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`mt-8 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 overflow-hidden shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
