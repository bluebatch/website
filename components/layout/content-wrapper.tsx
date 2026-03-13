import { ReactNode } from "react";
import { colorSchemeMap, type ColorScheme } from "@/lib/color-schemes";

interface ContentWrapperProps {
  children: ReactNode;
  colorScheme?: ColorScheme;
  noPadding?: boolean;
  isFirstSection?: boolean;
  bodyWidth?: "full" | "wide" | "small" | "narrow";
}

export default function ContentWrapper({
  children,
  colorScheme = "white",
  noPadding = false,
  isFirstSection = false,
  bodyWidth = "wide",
}: ContentWrapperProps) {
  const scheme = colorSchemeMap[colorScheme];

  const paddingClasses = noPadding
    ? ``
    : `px-4 ${!isFirstSection ? "pt-16" : "pt-40"} pb-16 sm:px-6 lg:px-8`;

  const bodyWidthClasses = {
    full: "",
    wide: "max-w-7xl mx-auto",
    small: "max-w-4xl mx-auto",
    narrow: "max-w-2xl mx-auto",
  };

  return (
    <div className={`w-full ${scheme.bg} ${scheme.text}`}>
      <div className={`${bodyWidthClasses[bodyWidth]} ${paddingClasses}`}>
        {children}
      </div>
    </div>
  );
}
