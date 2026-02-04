import { ReactNode } from "react";

interface VideoBoxContainerProps {
  children: ReactNode;
  borderColor?: string;
  cornerSize?: number;
  className?: string;
}

export default function VideoBoxContainer({
  children,
  borderColor = "border-blue-500",
  cornerSize = 20,
  className = "",
}: VideoBoxContainerProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Main content container */}
      <div className="relative w-full overflow-hidden rounded-lg">
        {children}
      </div>

      {/* Corner-less border effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${borderColor.replace('border-', 'via-')} to-transparent`}
          style={{
            maskImage: `linear-gradient(to right, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
            WebkitMaskImage: `linear-gradient(to right, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
          }}
        />

        {/* Bottom border */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${borderColor.replace('border-', 'via-')} to-transparent`}
          style={{
            maskImage: `linear-gradient(to right, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
            WebkitMaskImage: `linear-gradient(to right, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
          }}
        />

        {/* Left border */}
        <div
          className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent ${borderColor.replace('border-', 'via-')} to-transparent`}
          style={{
            maskImage: `linear-gradient(to bottom, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
          }}
        />

        {/* Right border */}
        <div
          className={`absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent ${borderColor.replace('border-', 'via-')} to-transparent`}
          style={{
            maskImage: `linear-gradient(to bottom, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent ${cornerSize}px, black ${cornerSize}px, black calc(100% - ${cornerSize}px), transparent calc(100% - ${cornerSize}px))`,
          }}
        />
      </div>
    </div>
  );
}
