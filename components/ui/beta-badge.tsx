// „Beta"-Markierung für Funktionen und Connectors, die noch in der Beta sind
// (Mega-Menü, Überschriften, Feature-Zeilen, Portal-Mocks).
//
// <BetaBadge />            Standard, neben Text in Menü und Überschriften
// <BetaBadge size="xs" />  in kleinen Mock-Screenshots

interface BetaBadgeProps {
  size?: "xs" | "sm" | "md";
  className?: string;
}

const sizeClasses = {
  xs: "px-1.5 text-[9px]",
  sm: "px-2 text-[10px]",
  md: "px-2 text-[11px]",
};

export default function BetaBadge({ size = "sm", className = "" }: BetaBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full bg-amber-50 py-px align-middle font-semibold uppercase leading-normal tracking-wide text-amber-700 ring-1 ring-amber-200 ${sizeClasses[size]} ${className}`}
    >
      Beta
    </span>
  );
}
