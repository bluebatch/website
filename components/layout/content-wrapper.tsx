import { ReactNode } from "react";
import { colorSchemeMap, type ColorScheme } from "@/lib/color-schemes";

interface ContentWrapperProps {
  children: ReactNode;
  fullscreen?: boolean;
  colorScheme?: ColorScheme;
  noPadding?: boolean;
  isFirstSection?: boolean;
  border?: "B" | "T" | "BT";
  bodyWidth?: "wide" | "small" | "narrow";
}

export default function ContentWrapper({
  children,
  fullscreen = false,
  colorScheme = "white",
  noPadding = false,
  isFirstSection = false,
  border,
  bodyWidth = "wide",
}: ContentWrapperProps) {
  const scheme = colorSchemeMap[colorScheme];

  const containerClasses = fullscreen
    ? `w-full border-l border-r border-gray-200`
    : `mx-auto max-w-7xl border-l border-r border-gray-200`;

  const paddingClasses = noPadding
    ? ``
    : `px-4 ${!isFirstSection ? "pt-16" : "pt-40"} pb-16 sm:px-6 lg:px-8`;

  const borderMap = {
    B: "border-b border-gray-200",
    T: "border-t border-gray-200",
    BT: "border-t border-b border-gray-200",
  };

  const borderClasses = border ? borderMap[border] : "";

  const bodyWidthClasses = {
    wide: "",
    small: "max-w-4xl mx-auto",
    narrow: "max-w-2xl mx-auto",
  };

  const contentWrapper =
    bodyWidth !== "wide" ? (
      <div className={bodyWidthClasses[bodyWidth]}>{children}</div>
    ) : (
      children
    );

  return (
    <div className={`w-full `}>
      <div
        className={`${containerClasses} ${scheme.bg} ${scheme.text} ${paddingClasses} ${borderClasses}`}
      >
        {contentWrapper}
      </div>
    </div>
  );
}
