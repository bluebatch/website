import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { resolveHref } from "@/lib/get-canonical-path";

// Angebots-/Preis-Karte: Titel, optionale Preis-Pill, Beschreibung und ein
// "Mehr erfahren"-Link. Die ganze Karte ist klickbar. Für Angebots-Grids auf
// Hub-Seiten (z.B. e.bootis, actaport). NICHT für Vergleichs-Matrizen mit
// Feature-Checklisten - das ist ein anderes Muster.

interface OfferCardProps {
  href: string;
  title: ReactNode;
  description: ReactNode;
  /** z.B. "500 €" - erscheint als Pill rechts vom Titel */
  price?: string;
  linkLabel?: string;
  /** hebt die Karte hervor (Rahmen + Ring) */
  highlight?: boolean;
  /** href über resolveHref auf die kanonische URL auflösen (Default: an) */
  resolve?: boolean;
  className?: string;
}

export default function OfferCard({
  href,
  title,
  description,
  price,
  linkLabel = "Mehr erfahren",
  highlight = false,
  resolve = true,
  className = "",
}: OfferCardProps) {
  return (
    <Link
      href={resolve ? resolveHref(href) : href}
      className={`group/offer flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-lg ${
        highlight
          ? "border-primary-500 bg-white ring-2 ring-primary-200"
          : "border-gray-200 bg-white"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover/offer:text-primary-600 transition-colors">
          {title}
        </h3>
        {price && (
          <span className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary-700">
            {price}
          </span>
        )}
      </div>
      <p className="mt-3 text-gray-600">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary-600">
        {linkLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/offer:translate-x-1" />
      </span>
    </Link>
  );
}
