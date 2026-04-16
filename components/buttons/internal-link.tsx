import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { resolveHref } from "@/lib/get-canonical-path";
import Button from "@/components/ui/button";

type Variant = "arrow" | "underline" | "underline-subtle" | "plain";

const variants: Record<Variant, string> = {
  arrow:
    "inline-flex items-center gap-1.5 text-primary-600 font-medium hover:text-primary-800 active:text-primary-900 transition-colors group/link",
  underline:
    "underline underline-offset-4 hover:text-primary-700 transition-colors",
  "underline-subtle":
    "text-white/70 underline underline-offset-4 hover:text-white transition-colors text-sm",
  plain: "hover:text-primary-700 transition-colors",
};

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  resolve?: boolean;
}

export default function InternalLink({
  href,
  children,
  variant = "arrow",
  className = "",
  resolve = true,
}: InternalLinkProps) {
  const target = resolve ? resolveHref(href) : href;
  return (
    <Link href={target} className={`${variants[variant]} ${className}`}>
      {children}
      {variant === "arrow" && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      )}
    </Link>
  );
}

interface InternalLinkLabelProps {
  children: ReactNode;
  className?: string;
}

export function InternalLinkLabel({
  children,
  className = "",
}: InternalLinkLabelProps) {
  return (
    <Button className={`cursor-pointer ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
}
