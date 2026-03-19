import Link from "next/link";
import Image from "next/image";

const tools = [
  { key: "n8n", label: "n8n", href: "/was-ist-n8n", logo: "/tools/N8n-logo.png" },
  { key: "make", label: "Make", href: "/tools/make", logo: "/tools/make.svg" },
  { key: "zapier", label: "Zapier", href: "/tools/zapier", logo: "/tools/zapier.svg" },
  { key: "navision", label: "Navision", href: "/tools/navision", logo: "/tools/ms-dynamics-nav.png" },
  { key: "easybill", label: "Easybill", href: "/tools/easybill", logo: "/tools/easybill.png" },
] as const;

const sizeConfig = {
  lg: { card: "w-60 h-20 rounded-xl", image: "h-24 w-24", gap: "gap-4", label: "text-sm" },
  sm: { card: "w-40 h-14 rounded-lg", image: "h-14 w-14", gap: "gap-3", label: "text-xs" },
  xs: { card: "w-28 h-10 rounded-md", image: "h-10 w-10", gap: "gap-2", label: "text-xs" },
} as const;

interface ToolLinkProps {
  n8n?: boolean;
  make?: boolean;
  zapier?: boolean;
  navision?: boolean;
  easybill?: boolean;
  dark?: boolean;
  size?: "lg" | "sm" | "xs";
  className?: string;
}

export default function ToolLink({ dark, size = "lg", className = "", ...flags }: ToolLinkProps) {
  const active = tools.filter((t) => flags[t.key]);
  if (active.length === 0) return null;

  const s = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center ${s.gap} ${className}`}>
      <span
        className={`${s.label} font-semibold uppercase tracking-wide ${
          dark ? "text-secondary-500" : "text-primary-600"
        }`}
      >
        Genutzte Tools
      </span>
      <div className={`flex flex-wrap justify-center ${s.gap}`}>
        {active.map((tool) => (
          <Link
            key={tool.key}
            href={tool.href}
            className={`inline-flex items-center justify-center ${s.card} shadow-sm hover:shadow-md transition-all ${
              dark
                ? "bg-white hover:bg-gray-50 border border-white/40 hover:border-white/60"
                : "bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300"
            }`}
          >
            <Image
              src={tool.logo}
              alt={tool.label}
              width={96}
              height={96}
              className={`${s.image} object-contain`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
