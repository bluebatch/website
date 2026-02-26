"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export default function LogoCarousel({
  logos,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: LogoCarouselProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  const animationDuration = speedMap[speed];
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `scroll ${animationDuration} linear infinite`,
          animationDirection: animationDirection,
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`logo-1-${index}`}
            className="bg-white flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 60}
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
