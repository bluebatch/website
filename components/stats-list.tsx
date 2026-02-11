"use client";

import { ReactNode } from "react";
import SimpleGrid from "@/components/simple-grid";
import Typo from "@/components/typo";
import { AnimatedNumber } from "@/components/cards/kpi-card";

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  valueColor?: string;
}

interface StatsListProps {
  stats: Stat[];
  cols?: 2 | 3 | 4 | 5;
  textColor?: string;
  showBorders?: boolean;
  className?: string;
}

export default function StatsList({
  stats,
  cols = 4,
  textColor = "text-white",
  showBorders = true,
  className = "",
}: StatsListProps) {
  if (stats.length < 2 || stats.length > 5) {
    console.warn("StatsList: stats array should contain 2-5 items");
  }

  return (
    <SimpleGrid cols={cols} className={className}>
      {stats.map((stat, index) => (
        <div
          className={`text-center ${
            showBorders && index !== stats.length - 1
              ? "border-white md:border-r"
              : ""
          }`}
          key={stat.label}
        >
          <Typo.H2 className={stat.valueColor || "text-white"}>
            <AnimatedNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </Typo.H2>
          <Typo.Paragraph className={`text-sm md:text-base ${textColor} mt-2`}>
            {stat.label}
          </Typo.Paragraph>
        </div>
      ))}
    </SimpleGrid>
  );
}

// Sub-component for individual stat (optional, for more flexibility)
interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  valueColor?: string;
  textColor?: string;
  showBorder?: boolean;
}

export function StatItem({
  value,
  label,
  prefix = "",
  suffix = "",
  valueColor = "text-white",
  textColor = "text-white",
  showBorder = false,
}: StatItemProps) {
  return (
    <div
      className={`text-center ${showBorder ? "border-white md:border-r" : ""}`}
    >
      <Typo.H2 className={valueColor}>
        <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
      </Typo.H2>
      <Typo.Paragraph className={`text-sm md:text-base ${textColor} mt-2`}>
        {label}
      </Typo.Paragraph>
    </div>
  );
}

StatsList.Item = StatItem;
