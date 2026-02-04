"use client";

import { motion } from "framer-motion";
import React from "react";
import { ReactNode } from "react";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary/70 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// TopLabel Sub-component
interface TopLabelProps {
  children: ReactNode;
}

VideoBackgroundHero.TopLabel = function TopLabel({ children }: TopLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-secondary-500 font-semibold text-sm border border-secondary-500/30">
        {children}
      </span>
    </motion.div>
  );
};

// Headline Sub-component
interface HeadlineProps {
  children: ReactNode;
}

VideoBackgroundHero.Headline = function Headline({ children }: HeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8"
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
        {children}
      </h1>
    </motion.div>
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
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      className="relative inline-block"
    >
      <span className="bg-gradient-to-r from-secondary-500  to-secondary-800 bg-clip-text text-transparent animate-pulse">
        {children}
      </span>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary-500 to-primary-500"
      />
    </motion.span>
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
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-12"
    >
      {children}
    </motion.p>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.3 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
    >
      {children}
    </motion.div>
  );
};

// Stats Container Sub-component
interface StatsProps {
  children: ReactNode;
}

VideoBackgroundHero.Stats = function Stats({ children }: StatsProps) {
  const count = React.Children.count(children);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={`grid grid-cols-2 md:grid-cols-${count} gap-6  mx-auto"`}
    >
      {children}
    </motion.div>
  );
};

// Individual Stat Sub-component
interface StatProps {
  value: string;
  label: string;
  color?: string;
  index?: number;
}

VideoBackgroundHero.Stat = function Stat({
  value,
  label,
  color = "text-secondary-500",
  index = 0,
}: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
    >
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${color}`}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
};

export default VideoBackgroundHero;
