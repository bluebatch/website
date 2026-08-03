// Kompaktes KPI-Band für den Hero (unter GeoSummary/CTA in Hero2Column).
// Ersetzt das inline nachgebaute `heroStats.map()`-Muster mit
// `grid-cols-2 sm:grid-cols-4`-Kacheln. Für Stat-Reihen im Body-Bereich
// stattdessen StatsList nutzen.

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroStatBandProps {
  stats: HeroStat[];
  className?: string;
}

export default function HeroStatBand({
  stats,
  className = "",
}: HeroStatBandProps) {
  return (
    <div
      className={`mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur"
        >
          <div className="text-2xl font-bold text-primary-700 md:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
