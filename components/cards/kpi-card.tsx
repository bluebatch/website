"use client";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

interface KpiCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  subtitle: string;
  variant?: "default" | "danger" | "success";
  className?: string;
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5,
  });

  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

const variantStyles = {
  default: {
    card: "bg-white border-primary-300",
    value: "text-secondary-500",
  },
  danger: {
    card: "bg-red-50 border-red-200",
    value: "text-red-600",
  },
  success: {
    card: "bg-green-50 border-green-200",
    value: "text-green-600",
  },
};

export default function KpiCard({
  value,
  prefix,
  suffix,
  subtitle,
  variant = "default",
  className = "",
}: KpiCardProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      className={`border flex flex-col items-center justify-center text-center p-6 shadow-md rounded-lg ${styles.card} ${className}`}
    >
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${styles.value}`}>
        <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
      </div>
      <p className="text-sm md:text-base text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

// Sub-components for flexible composition
interface KpiValueProps {
  children: ReactNode;
  className?: string;
}

function KpiValue({ children, className = "" }: KpiValueProps) {
  return (
    <div className={`text-4xl md:text-5xl font-bold mb-2 ${className}`}>
      {children}
    </div>
  );
}

interface KpiSubtitleProps {
  children: ReactNode;
  className?: string;
}

function KpiSubtitle({ children, className = "" }: KpiSubtitleProps) {
  return (
    <p className={`text-sm md:text-base text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

KpiCard.Value = KpiValue;
KpiCard.Subtitle = KpiSubtitle;
KpiCard.AnimatedNumber = AnimatedNumber;
