import { ReactNode } from "react";

// GEO-Kurzbeschreibung (site-structure.md, Grundsatz "GEO-Kurzbeschreibung
// im Hero"): der erste Absatz jeder Seite, geschrieben für AI-Crawler
// (AI Overviews, ChatGPT, Perplexity) UND Menschen.
//
// Spezifikation (Recherche-Stand 07/2026):
// - 40-60 Wörter, 2-3 Sätze — das Format, das LLMs am zuverlässigsten
//   als Antwort extrahieren.
// - Answer-first: Satz 1 beantwortet "Was ist das und für wen?".
//   Kein Kontext-Vorlauf, keine Rhetorik.
// - Konkrete Zahlen und Entitäten nennen (Ersparnis, Dauer, Toolnamen) —
//   LLMs sind Fakten-Extraktoren.
// - Entitäten ausschreiben statt Pronomen ("Der Mail Agent ...", nicht
//   "Er ..."), damit der Absatz auch aus dem Kontext gerissen eindeutig ist.
//
// Steht direkt unter der H1. `data-geo="summary"` markiert den Absatz
// maschinenlesbar (und testbar).

interface GeoSummaryProps {
  children: ReactNode;
  /** center für zentrierte Hero-Layouts, left für Hero2Column */
  align?: "left" | "center";
  className?: string;
}

export default function GeoSummary({
  children,
  align = "left",
  className = "",
}: GeoSummaryProps) {
  return (
    <p
      data-geo="summary"
      className={`text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed ${
        align === "center" ? "mx-auto max-w-3xl text-center" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
}
