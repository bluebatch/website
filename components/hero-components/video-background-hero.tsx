import React from "react";
import { ReactNode } from "react";
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
interface VideoBackgroundHeroProps {
  children: ReactNode;
  videoSrc: string;
  opacityBackground?: "white" | "black";
  overlayOpacity?: number;
}

function VideoBackgroundHero({
  children,
  videoSrc,
  overlayOpacity = 0.4,
  opacityBackground = "black",
}: VideoBackgroundHeroProps) {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center pt-32">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-${opacityBackground}`}
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

VideoBackgroundHero.TopLabel = function TopLabel({ children }: TopLabelProps) {
  return (
    <AnimatedTopLabel>
      <span className="inline-block px-6 py-2 bg-primary-300 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
        {children}
      </span>
    </AnimatedTopLabel>
  );
};

// Headline Sub-component
interface HeadlineProps {
  children: ReactNode;
}

VideoBackgroundHero.Headline = function Headline({ children }: HeadlineProps) {
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

VideoBackgroundHero.Highlight = function Highlight({
  children,
  delay = 0.5,
}: HighlightProps) {
  return (
    <AnimatedHighlight
      delay={delay}
      className="bg-gradient-to-r from-secondary-500  to-secondary-800 bg-clip-text text-transparent"
    >
      {children}
    </AnimatedHighlight>
  );
};

// Description Sub-component
interface DescriptionProps {
  children: ReactNode;
}

VideoBackgroundHero.Description = function Description({
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

VideoBackgroundHero.CallToAction = function CallToAction({
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

VideoBackgroundHero.Stats = function Stats({ children }: StatsProps) {
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

VideoBackgroundHero.Stat = function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  color = "text-secondary-500",
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

export default VideoBackgroundHero;
