import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import {
  AnimatedScrollIndicator,
  AnimatedTopLabel,
  AnimatedHeadline,
  AnimatedHighlight,
  AnimatedDescription,
  AnimatedCallToAction,
  AnimatedStats,
  AnimatedStat,
  AnimatedStatValue,
} from "./video-background-hero-client";

// Main Component
interface BackgroundHeroProps {
  children: ReactNode;
  videoSrc?: string;
  imageSrc?: string;
  opacityBackground?: "white" | "black";
  overlayOpacity?: number;
}

function BackgroundHero({
  children,
  videoSrc,
  imageSrc,
  overlayOpacity = 0.4,
  opacityBackground = "black",
}: BackgroundHeroProps) {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center pt-32">
      {/* Background Media */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      ) : null}

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${opacityBackground === "black" ? "bg-black" : "bg-white"}`}
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {children}
      </div>

      {/* Scroll Indicator */}
      <AnimatedScrollIndicator />
    </div>
  );
}

// TopLabel Sub-component
interface TopLabelProps {
  children: ReactNode;
}

BackgroundHero.TopLabel = function TopLabel({ children }: TopLabelProps) {
  return (
    <AnimatedTopLabel>
      <span className="inline-block px-6 py-2 bg-secondary-400 backdrop-blur-sm rounded-full text-primary-900 font-semibold text-sm">
        {children}
      </span>
    </AnimatedTopLabel>
  );
};

// Headline Sub-component
interface HeadlineProps {
  children: ReactNode;
}

BackgroundHero.Headline = function Headline({ children }: HeadlineProps) {
  return (
    <AnimatedHeadline>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
        {children}
      </h1>
    </AnimatedHeadline>
  );
};

// Highlight Sub-component for use inside Headline
interface HighlightProps {
  children: ReactNode;
  delay?: number;
}

BackgroundHero.Highlight = function Highlight({
  children,
  delay = 0.5,
}: HighlightProps) {
  return (
    <AnimatedHighlight
      delay={delay}
      className="bg-gradient-to-r from-secondary-500 to-primary-800 bg-clip-text text-transparent"
    >
      {children}
    </AnimatedHighlight>
  );
};

// Description Sub-component
interface DescriptionProps {
  children: ReactNode;
}

BackgroundHero.Description = function Description({
  children,
}: DescriptionProps) {
  return (
    <AnimatedDescription className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-12">
      {children}
    </AnimatedDescription>
  );
};

// CallToAction Sub-component
interface CallToActionProps {
  children: ReactNode;
}

BackgroundHero.CallToAction = function CallToAction({
  children,
}: CallToActionProps) {
  return (
    <AnimatedCallToAction className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
      {children}
    </AnimatedCallToAction>
  );
};

// Stats Container Sub-component
interface StatsProps {
  children: ReactNode;
}

BackgroundHero.Stats = function Stats({ children }: StatsProps) {
  const count = React.Children.count(children);
  return (
    <AnimatedStats
      className={`grid grid-cols-2 md:grid-cols-${count} gap-6 mx-auto`}
    >
      {children}
    </AnimatedStats>
  );
};

// Individual Stat Sub-component
interface StatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color?: string;
  index?: number;
}

BackgroundHero.Stat = function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  color = "text-primary-500",
  index = 0,
}: StatProps) {
  return (
    <AnimatedStat
      index={index}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
    >
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${color}`}>
        <AnimatedStatValue value={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </AnimatedStat>
  );
};

export default BackgroundHero;
