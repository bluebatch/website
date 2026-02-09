import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  fullscreen?: boolean;
  variant?: "light" | "dark";
  noPadding?: boolean;
  isFirstSection?: boolean;
  background?: string;
  border?: "B" | "T" | "BT";
  bodyWidth?: "wide" | "small" | "narrow";
}

export default function ContentWrapper({
  children,
  fullscreen = false,
  variant = "light",
  noPadding = false,
  isFirstSection = false,
  background,
  border,
  bodyWidth = "wide",
}: ContentWrapperProps) {
  const baseClasses = "w-full";

  const variantClasses = {
    light: "bg-white text-gray-900",
    dark: "bg-gray-900 text-white",
  };

  const containerClasses = fullscreen
    ? `w-full border-l border-r border-gray-200 `
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
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div
        className={`${background} ${containerClasses} ${paddingClasses} ${borderClasses}`}
      >
        {contentWrapper}
      </div>
    </div>
  );
}
