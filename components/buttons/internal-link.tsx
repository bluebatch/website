import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import Button from "@/components/ui/button";

const baseClass =
  "inline-flex items-center gap-1.5 text-primary-600 font-medium hover:text-primary-800 active:text-primary-900 transition-colors group/link";

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function InternalLink({
  href,
  children,
  className = "",
}: InternalLinkProps) {
  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
