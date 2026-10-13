import { Check } from "lucide-react";

// Gezeichnete Urkunde „Nachweis KI-Kompetenz nach Art. 4 EU AI Act" für die
// Coaching-Seiten. Beschriftet wie das, was die Mitarbeiter bekommen: ein
// Schulungsnachweis mit Siegel, kein amtliches Zertifikat. In der großen
// Variante liegt die Teilnehmerliste schräg dahinter.
//
// <CertificateMock />           Urkunde plus Teilnehmerliste
// <CertificateMock compact />   kleinere Urkunde ohne Liste

interface CertificateMockProps {
  /** Kleinere Urkunde ohne Teilnehmerliste (für Paket-Seiten) */
  compact?: boolean;
  className?: string;
}

const gold = "#b8892f";

// Zackenrand des Siegels: abwechselnd äußerer und innerer Radius
const rosette = Array.from({ length: 48 }, (_, i) => {
  const a = (i / 48) * Math.PI * 2;
  const r = i % 2 === 0 ? 50 : 45.5;
  return `${(60 + r * Math.sin(a)).toFixed(2)},${(56 - r * Math.cos(a)).toFixed(2)}`;
}).join(" ");

function Seal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden>
      <defs>
        <linearGradient id="cert-seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d58a" />
          <stop offset="0.55" stopColor="#d4a545" />
          <stop offset="1" stopColor="#a8741f" />
        </linearGradient>
        <path
          id="cert-seal-ring"
          d="M60,56 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
        />
      </defs>
      <path d="M46 88 L34 134 L45 126 L54 136 L61 94 Z" className="fill-primary-700" />
      <path d="M74 88 L86 134 L75 126 L66 136 L59 94 Z" className="fill-primary-800" />
      <polygon points={rosette} fill="url(#cert-seal-gold)" />
      <circle cx="60" cy="56" r="42" fill="none" stroke="#fff6dc" strokeWidth="1" opacity="0.7" />
      <circle cx="60" cy="56" r="27" fill="#b98a2e" stroke="#fff6dc" strokeWidth="1.2" />
      <text fontSize="7.2" fontWeight="700" fill="#5c3f0c" letterSpacing="0.6">
        <textPath href="#cert-seal-ring" textLength="214" lengthAdjust="spacing">
          SCHULUNGSNACHWEIS · ART. 4 EU AI ACT ·
        </textPath>
      </text>
      <path
        d="M48 57 L56 65 L73 47"
        fill="none"
        stroke="#fffaf0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`absolute h-5 w-5 ${className}`} aria-hidden>
      <path d="M2 20 V2 H20" fill="none" stroke={gold} strokeWidth="1.4" />
      <path d="M6 20 V6 H20" fill="none" stroke={gold} strokeWidth="0.7" opacity="0.6" />
      <circle cx="2" cy="2" r="1.8" fill={gold} />
    </svg>
  );
}

const participants = [
  "A. Schneider",
  "M. Weber",
  "J. Krüger",
  "S. Yılmaz",
  "T. Becker",
  "L. Wagner",
  "K. Hoffmann",
  "P. Neumann",
];

function ParticipantSheet() {
  return (
    <div
      aria-hidden
      className="absolute right-5 top-0 h-[82%] w-[72%] rotate-[4deg] rounded-md bg-white px-4 pb-4 pt-2.5 shadow-xl ring-1 ring-gray-200 sm:right-4 sm:px-5"
    >
      <div className="flex items-center justify-end gap-2 border-b border-gray-200 pb-2">
        <span className="text-[10px] text-gray-400">KI-Kompetenz ·</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">
          Teilnehmerliste
        </span>
      </div>
      <ul className="mt-2 space-y-2">
        {participants.map((name) => (
          <li key={name} className="flex items-center justify-between gap-2 text-[11px] text-gray-600">
            <span className="truncate">{name}</span>
            <span className="flex items-center gap-1.5">
              <span className="hidden text-gray-400 sm:inline">14.11.</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CertificateMock({ compact = false, className = "" }: CertificateMockProps) {
  return (
    <div
      className={`relative mx-auto w-full ${
        compact ? "max-w-[400px]" : "max-w-[540px] pb-4 pr-10 pt-10 sm:pr-16"
      } ${className}`}
    >
      {!compact && <ParticipantSheet />}

      <figure
        className={`relative rounded-md bg-[#fffdf6] shadow-[0_30px_60px_-20px_rgba(0,33,74,0.45)] ring-1 ring-[#eadfc4] ${
          compact ? "p-2" : "-rotate-[1.5deg] p-2.5 sm:p-3"
        }`}
        aria-label="Muster eines Zertifikats: Nachweis KI-Kompetenz nach Art. 4 EU AI Act"
      >
        <div className="rounded-[3px] border-2 p-1" style={{ borderColor: `${gold}99` }}>
          <div
            className={`relative border text-center ${compact ? "px-4 py-5" : "px-5 py-7 sm:px-8 sm:py-9"}`}
            style={{ borderColor: `${gold}66` }}
          >
            <Corner className="left-1.5 top-1.5" />
            <Corner className="right-1.5 top-1.5 rotate-90" />
            <Corner className="bottom-1.5 right-1.5 rotate-180" />
            <Corner className="bottom-1.5 left-1.5 -rotate-90" />

            <p
              className="text-[10px] font-semibold uppercase tracking-[0.35em]"
              style={{ color: "#8a6420" }}
            >
              Zertifikat
            </p>
            <p
              className={`mt-2 font-serif font-bold leading-tight text-primary-900 ${
                compact ? "text-xl" : "text-xl sm:text-3xl"
              }`}
            >
              Nachweis KI‑Kompetenz
            </p>
            <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
              nach Art. 4 EU AI Act · Verordnung (EU) 2024/1689
            </p>

            <div className="mx-auto my-4 flex max-w-[200px] items-center gap-2" aria-hidden>
              <span className="h-px flex-1" style={{ backgroundColor: `${gold}80` }} />
              <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: gold }} />
              <span className="h-px flex-1" style={{ backgroundColor: `${gold}80` }} />
            </div>

            <p className="text-[11px] text-gray-500">Hiermit wird bestätigt, dass</p>
            <p
              className={`mx-auto mt-1 inline-block border-b px-4 pb-1 font-serif italic text-gray-900 ${
                compact ? "text-xl" : "text-2xl sm:text-[28px]"
              }`}
              style={{ borderColor: `${gold}80` }}
            >
              Anna Schneider
            </p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-600">
              Kanzlei Müller
            </p>
            <p className="mx-auto mt-3 max-w-[340px] text-[11px] leading-relaxed text-gray-600 sm:text-xs">
              an der KI-Kompetenzschulung teilgenommen hat.
            </p>

            {!compact && (
              <p className="mx-auto mt-3 max-w-[360px] text-[10px] leading-relaxed text-gray-400 sm:text-[11px]">
                Funktionsweise und Grenzen · Umgang mit Mandantendaten · falsche Ergebnisse erkennen ·
                Dokumentation, Zuständigkeit und Freigabe
              </p>
            )}

            <div className={`flex items-end justify-between gap-2 ${compact ? "mt-4" : "mt-6"}`}>
              <div className="w-[34%] text-left">
                <p className="border-b border-gray-300 pb-1 font-serif text-[13px] text-gray-800">
                  14.11.2026
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-400">Datum</p>
              </div>
              <Seal className={`shrink-0 ${compact ? "-mb-2 h-20" : "-mb-3 h-20 sm:h-28"}`} />
              <div className="w-[34%] text-right">
                <svg viewBox="0 0 120 34" className="ml-auto h-6 w-full max-w-[110px] border-b border-gray-300 pb-0.5" aria-hidden>
                  <path
                    d="M4 24 C 14 4, 22 32, 34 16 S 52 6, 58 22 S 74 30, 82 14 S 100 8, 116 12"
                    fill="none"
                    stroke="#1e3a6e"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-400">Schulungsleitung</p>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
