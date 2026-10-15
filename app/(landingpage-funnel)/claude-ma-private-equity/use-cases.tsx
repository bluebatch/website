import { ChartColumn, FileSearch, Presentation } from "lucide-react";
import { ClaudeDesktopMock } from "@/components/mockups";
import { UseCase, UseCaseSection } from "../_engine/private-claude-sections";

// Beispiele aus PE-Fonds und M&A-Beratung: Portfolio-Monitoring, Due
// Diligence, Teaser. Codenamen und Zahlen in den Fenstern sind erfunden.

const BANNER = "Muster Capital · Private Claude";

const more = [
  "Käufer-Longlist",
  "Investment-Memo",
  "DD-Fragenlisten",
  "Q&A-Antworten",
  "SPA-Markup",
  "Übersetzung DE/EN",
];

export default function MaPrivateEquityUseCases() {
  return (
    <UseCaseSection
      preHeadline="Zum Beispiel im Deal-Team"
      headline="So arbeitet Ihr Team mit Claude"
      intro="Drei Aufgaben aus Fonds und M&A-Beratung. Claude liefert den ersten Entwurf, Ihr Team prüft und entscheidet."
      more={more}
    >
      <UseCase
        icon={ChartColumn}
        label="Portfolio-Analyse"
        title="Die Reportings aller Beteiligungen auf einen Blick"
        text="Claude liest die Monatsreportings Ihrer Beteiligungen, egal ob Excel oder PDF, vergleicht mit Budget und Vorjahr und schreibt die Abweichungen in Klartext auf. Fertig für das Investment Committee oder den Beirat."
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Fass die Septemberreportings der sechs Beteiligungen zusammen. Was
            weicht mehr als 10 % vom Budget ab?
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            6 Dateien gelesen · Reporting 09-2026
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Zwei Beteiligungen liegen deutlich unter Budget:</p>
            <ul>
              <li>
                <strong>Projekt Falke:</strong> Umsatz 14 % und EBITDA 22 %
                unter Budget. Laut Kommentar verschiebt ein Großkunde seine
                Abrufe ins erste Quartal.
              </li>
              <li>
                <strong>Projekt Eiche:</strong> EBITDA 11 % unter Budget,
                Leverage 4,6x bei einem Covenant von 5,0x.
              </li>
            </ul>
            <p>
              Die anderen vier liegen im Plan. Soll ich daraus eine Seite für
              das IC machen?
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={FileSearch}
        label="Due Diligence"
        title="Verträge aus dem Datenraum durchsehen"
        text="Claude prüft Dutzende Verträge auf die Klauseln, die für den Deal zählen: Change of Control, Kündigungsrechte, Exklusivität, Haftung. Jede Fundstelle mit Dokument und Seite, zum Nachprüfen."
        reverse
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Prüf die 38 Kundenverträge im Ordner auf Change-of-Control-Klauseln.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>38 Dateien gelesen</ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>7 Verträge regeln einen Kontrollwechsel:</p>
            <ul>
              <li>
                <strong>4 mit Sonderkündigungsrecht,</strong> darunter die zwei
                größten Kunden (Vertrag 03, S. 14 und Vertrag 11, S. 9).
              </li>
              <li>
                <strong>3 mit Zustimmungspflicht</strong> des Kunden vor einer
                Übertragung.
              </li>
            </ul>
            <p>
              Alle Fundstellen stehen in <strong>CoC-Analyse.xlsx</strong> im
              Ordner.
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={Presentation}
        label="Teaser und IM"
        title="Erste Entwürfe statt leerer Seite"
        text="Aus Jahresabschlüssen, Managementpräsentation und Ihren Notizen entwirft Claude Teaser, Information Memorandum oder Investment-Memo in Ihrer Struktur. Ihr Team schärft nach, statt bei null anzufangen."
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Mach aus den Abschlüssen 2023 bis 2025 und der
            Managementpräsentation einen anonymen Teaser für Projekt Nordstern.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>4 Dateien gelesen</ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Entwurf für eine Seite:</p>
            <ul>
              <li>
                <strong>Profil:</strong> Hersteller von Fördertechnik,
                Süddeutschland, rund 140 Mitarbeitende
              </li>
              <li>
                <strong>2025:</strong> Umsatz 38,2 Mio. €, EBITDA 5,1 Mio. €
                (13,4 %)
              </li>
              <li>
                <strong>Anlass:</strong> Nachfolge, vollständiger Verkauf
              </li>
            </ul>
            <p>
              Firmenname, Ort und Kunden sind nicht enthalten. Der Entwurf liegt
              als <strong>Teaser Nordstern.docx</strong> im Ordner.
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>
    </UseCaseSection>
  );
}
