"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface AnimatedCardWrapperProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCardWrapper({
  children,
  className = "",
}: AnimatedCardWrapperProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
