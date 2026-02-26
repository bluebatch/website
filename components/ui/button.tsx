import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-8 py-4 font-semibold transition-all inline-flex items-center justify-center gap-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-secondary-600 to-primary-600 text-white hover:from-secondary-700 hover:to-primary-700 shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-lg",
    outline:
      "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
