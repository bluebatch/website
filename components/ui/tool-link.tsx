import Link from "next/link";
import Image from "next/image";

const tools = [
  { key: "n8n", label: "n8n", href: "/tools/n8n", logo: "/tools/N8n-logo.png" },
  { key: "navision", label: "Navision", href: "/tools/navision", logo: "/tools/ms-dynamics-nav.png" },
  { key: "easybill", label: "Easybill", href: "/tools/easybill", logo: "/tools/easybill.png" },
] as const;

interface ToolLinkProps {
  n8n?: boolean;
  navision?: boolean;
  easybill?: boolean;
  dark?: boolean;
  className?: string;
}

export default function ToolLink({ dark, className = "", ...flags }: ToolLinkProps) {
  const active = tools.filter((t) => flags[t.key]);
  if (active.length === 0) return null;

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <span
        className={`text-sm font-semibold uppercase tracking-wide ${
          dark ? "text-secondary-500" : "text-primary-600"
        }`}
      >
        Genutzte Tools
      </span>
      <div className="flex flex-wrap justify-center gap-4">
        {active.map((tool) => (
          <Link
            key={tool.key}
            href={tool.href}
            className={`inline-flex items-center justify-center w-60 h-20 rounded-xl shadow-sm hover:shadow-md transition-all ${
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
              className="h-24 w-24 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
