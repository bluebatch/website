"use client";

import LogoCarousel from "./logo-carousel";
import Typo from "./typo";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselSectionProps {
  title?: string;
  subtitle?: string;
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function LogoCarouselSection({
  title = "Unsere Kunden vertrauen uns",
  subtitle,
  logos,
  direction = "left",
  speed = "normal",
  className = "",
}: LogoCarouselSectionProps) {
  return (
    <div className={`py-12 ${className}`}>
      <div className="text-center mb-8">
        <Typo.H3 className="text-gray-600!">{title}</Typo.H3>
        {subtitle && (
          <Typo.Paragraph className="text-gray-500 mt-2">
            {subtitle}
          </Typo.Paragraph>
        )}
      </div>
      <LogoCarousel logos={logos} direction={direction} speed={speed} />
    </div>
  );
}
