// Kundenliste für Logo-Kacheln (CustomerTiles), Bewertungskarten
// (CustomerQuotes) und das Logo-Band (Customer / CustomerBand).
// Logos liegen unter public/customer/, geholt von den Websites der Kunden
// (Stand 2026-10-14).

export interface Kunde {
  /** Anzeigename, ohne Rechtsform-Ballast */
  name: string;
  /** Kurzbeschreibung unter dem Namen (Bewertungskarte, Text-Kachel) */
  branche: string;
  /** Ohne Logo zeigt die Kachel den Namen als Text, Band und Karten lassen den Kunden aus */
  logo?: {
    src: string;
    width: number;
    height: number;
    /** Optische Größe in Kachel und Band, je nach Proportion des Logos */
    scale?: "sm" | "md" | "lg";
    /** Logo ist nur eine Bildmarke ohne Schriftzug: Namen in der Kachel dazuschreiben */
    nurBildmarke?: boolean;
  };
  zitat?: string;
  /**
   * true erst, wenn der Kunde genau diesen Wortlaut freigegeben hat.
   * Sonst ist das Zitat ein Platzhalter und wird als „Entwurf" markiert.
   */
  zitatFreigegeben?: boolean;
}

export const kunden: Kunde[] = [
  {
    name: "Langrock Voß & Soyka",
    branche: "Partnerschaft von Rechtsanwälten",
    logo: { src: "/customer/langrock-voss-soyka.png", width: 1195, height: 200, scale: "md" },
    zitat:
      "Wir wollten Claude nutzen, aber nicht auf Kosten des Mandatsgeheimnisses. Mit dem Private Gateway war diese Frage nach einem Termin geklärt.",
  },
  {
    name: "Steuerberatung Schopp",
    branche: "Steuerberatung",
    logo: { src: "/customer/steuerberatung-schopp.svg", width: 351, height: 183, scale: "sm", nurBildmarke: true },
    zitat:
      "Die Einrichtung lief in einer Woche, seitdem arbeitet das ganze Team mit Claude. Was es kostet, sehen wir pro Person im Portal, ohne Überraschungen.",
  },
  {
    name: "Steinbach",
    branche: "Mittelstand",
    logo: { src: "/customer/steinbach.svg", width: 203, height: 26, scale: "sm" },
  },
  {
    name: "KEPPLER.Personalberatung",
    branche: "Personalberatung",
    logo: { src: "/customer/keppler-personalberatung.svg", width: 175, height: 48, scale: "md" },
    zitat:
      "Profile und Anschreiben gehen deutlich schneller. Das Coaching hat dafür gesorgt, dass nicht nur zwei Leute Claude nutzen, sondern alle.",
  },
  {
    name: "Dr. Hollitzer & Hiller",
    branche: "Fachkanzlei und Notariat",
    logo: { src: "/customer/hollitzer-hiller.svg", width: 681, height: 373, scale: "lg" },
    zitat:
      "Für uns zählte, dass Mandantendaten in der EU bleiben. Die Unterlagen für Datenschutz und Berufsgeheimnis kamen gleich mit, wir mussten nichts selbst zusammensuchen.",
  },
  {
    name: "TED Steuerberatungsgesellschaft",
    branche: "Steuerberatung",
    logo: { src: "/customer/ted-steuerberatung.svg", width: 721, height: 250, scale: "md" },
  },
  {
    name: "Roth Ingenieurtechnik",
    branche: "Ingenieurbüro",
    logo: { src: "/customer/roth-ing.png", width: 243, height: 119, scale: "md" },
  },
  {
    name: "Eisner Rechtsanwälte",
    branche: "Rechtsanwaltskanzlei",
    logo: { src: "/customer/eisner-rechtsanwaelte.png", width: 219, height: 200, scale: "lg" },
    zitat:
      "Schriftsätze entwerfen, Akten zusammenfassen, Fristen gegenprüfen: Claude ist bei uns im Alltag angekommen, und wir wissen, wo die Daten liegen.",
  },
  {
    name: "Sachverständigenbüro Beier & Partner",
    branche: "Sachverständige für Immobilienbewertung",
    logo: { src: "/customer/beier-und-partner.png", width: 292, height: 200, scale: "lg" },
    zitat:
      "Gutachtentexte vorbereiten und Unterlagen auswerten erledigt Claude zuverlässig. Wichtig war uns, dass dafür niemand ein privates Konto braucht.",
  },
  {
    name: "Rechtsanwalt Jens Reuter",
    branche: "Rechtsanwaltskanzlei",
    logo: { src: "/customer/rechtsanwalt-jens-reuter.svg", width: 158, height: 52, scale: "md" },
  },
  {
    name: "Rechtsanwalt Noll",
    branche: "Rechtsanwaltskanzlei",
    logo: { src: "/customer/rechtsanwalt-noll.png", width: 262, height: 101, scale: "md" },
  },
  // TODO: Logo beim Kunden anfragen, daltax.de ist nur eine Platzhalterseite
  {
    name: "DALTAX",
    branche: "Donau-Alpen Treuhand",
  },
];
