"use client";

import React, { ReactNode, isValidElement } from "react";
import { motion } from "framer-motion";

interface TimelineAsStepsProps {
  children: ReactNode;
  className?: string;
}

interface StepProps {
  children: ReactNode;
  value: number | string;
  index?: number;
  isLast?: boolean;
}

export function TimelineAsStepsStep({
  children,
  value,
  index = 0,
  isLast = false,
}: StepProps) {
  // Use index for animation timing (consistent delays regardless of value)
  const animationDelay = index * 0.1;

  return (
    <motion.div
      className="flex gap-4 md:gap-6"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        ease: "easeOut",
      }}
    >
      {/* Left side: Number dot and connecting line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Number dot */}
        <motion.div
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-secondary-500 to-primary-600 text-white font-bold text-sm md:text-lg shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.3,
            delay: animationDelay,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {value}
        </motion.div>
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 bg-gradient-to-b from-primary-400 to-primary-200 min-h-6 md:min-h-8 origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.3,
              delay: animationDelay + 0.15,
              ease: "easeOut",
            }}
          />
        )}
      </div>

      {/* Right side: Content */}
      <div className={`min-w-0 ${isLast ? "" : "pb-6 md:pb-8 "}`}>
        {children}
      </div>
    </motion.div>
  );
}

export default function TimelineAsSteps({
  children,
  className = "",
}: TimelineAsStepsProps) {
  const childArray = React.Children.toArray(children);
  const count = childArray.length;

  return (
    <div className={`flex flex-col ${className}`}>
      {childArray.map((child, idx) => {
        if (isValidElement<StepProps>(child)) {
          return React.cloneElement(child, {
            index: idx,
            isLast: idx === count - 1,
          });
        }
        return child;
      })}
    </div>
  );
}
