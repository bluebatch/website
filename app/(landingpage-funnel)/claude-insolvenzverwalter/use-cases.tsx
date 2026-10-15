import { FileText, Landmark, ListChecks } from "lucide-react";
import { ClaudeDesktopMock } from "@/components/mockups";
import { UseCase, UseCaseSection } from "../_engine/private-claude-sections";

// Beispiele aus der Insolvenzverwaltung. Claude bereitet vor, geprüft,
// bestritten, angefochten und unterschrieben wird vom Verwalter. Aktenzeichen,
// Namen und Zahlen in den Fenstern sind erfunden.

const BANNER = "Muster Insolvenzverwaltung · Private Claude";

const more = [
  "Entwürfe für Gutachten",
  "Insolvenzgeld-Listen",
  "Gläubigerpost beantworten",
  "Inventar und Verzeichnisse",
  "Zusammenfassungen für den Gläubigerausschuss",
];

export default function InsolvenzverwalterUseCases() {
  return (
    <UseCaseSection
      preHeadline="Zum Beispiel in der Insolvenzverwaltung"
      headline="So arbeitet Ihr Verfahrensteam mit Claude"
      intro="Drei Aufgaben, die in jedem Verfahren anfallen. Claude bereitet vor, Sie und Ihr Team prüfen und entscheiden."
      more={more}
    >
      <UseCase
        icon={ListChecks}
        label="Forderungsanmeldungen"
        title="Anmeldungen sichten, Tabelle vorbereiten"
        text="Claude liest die Forderungsanmeldungen eines Verfahrens, erfasst Gläubiger, Betrag und Rechtsgrund und markiert, was fehlt oder doppelt ist. Prüfen und bestreiten bleibt bei Ihnen."
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Lies die neuen Forderungsanmeldungen in 36 IN 123/26 und mach mir
            eine Übersicht für die Tabelle.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>48 Dateien gelesen</ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>48 Anmeldungen über zusammen 1,84 Mio. €. Auffällig:</p>
            <ul>
              <li>
                <strong>3 Dubletten:</strong> gleicher Gläubiger, gleiche
                Rechnungen, zweimal angemeldet.
              </li>
              <li>
                <strong>5 ohne Nachweis:</strong> keine Rechnung und kein
                Vertrag beigefügt.
              </li>
              <li>
                <strong>2 mit Eigentumsvorbehalt:</strong> Aussonderung prüfen.
              </li>
            </ul>
            <p>
              Die Übersicht liegt als{" "}
              <strong>Forderungen 36 IN 123-26.xlsx</strong> im Ordner.
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={Landmark}
        label="Anfechtung"
        title="Kontoauszüge nach auffälligen Zahlungen durchsuchen"
        text="Claude geht Monate an Kontoauszügen der Schuldnerin durch und listet die Zahlungen, die Sie anfechtungsrechtlich prüfen sollten, mit Datum, Empfänger, Betrag und Fundstelle."
        reverse
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Such in den Kontoauszügen der 12 Monate vor dem Antrag Zahlungen an
            Gesellschafter und verbundene Unternehmen.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            14 Dateien gelesen, 2.316 Buchungen
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Drei Vorgänge sollten Sie prüfen:</p>
            <ul>
              <li>
                <strong>12.03.:</strong> 45.000 € an den Gesellschafter,
                Verwendungszweck „Rückzahlung Darlehen“.
              </li>
              <li>
                <strong>28.05.:</strong> 18.500 € an die Schwestergesellschaft,
                keine Rechnung im Ordner.
              </li>
              <li>
                <strong>Juli bis September:</strong> monatlich 6.000 €
                Beratungshonorar an eine Gesellschafterin.
              </li>
            </ul>
            <p>Die Liste mit Seitenangaben liegt im Ordner Anfechtung.</p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={FileText}
        label="Berichte und Gutachten"
        title="Entwürfe aus Ihren Akten"
        text="Für Gutachten, Sachstandsberichte und den Bericht zum Berichtstermin entwirft Claude die Abschnitte aus Aktennotizen, Inventar und Zahlen, in Ihrem Aufbau. Bewertet und unterschrieben wird von Ihnen."
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Entwirf die Vermögensübersicht für den Bericht zum Berichtstermin.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            3 Dateien gelesen · Inventar, Forderungsliste, Aktennotizen
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Entwurf, Stand 30.09.2026:</p>
            <ul>
              <li>
                <strong>Anlagevermögen:</strong> 412.000 €, Liquidationswerte
                laut Gutachter
              </li>
              <li>
                <strong>Forderungen:</strong> 286.000 €, davon 64.000 €
                zweifelhaft
              </li>
              <li>
                <strong>Guthaben Verfahrenskonto:</strong> 118.400 €
              </li>
            </ul>
            <p>
              Der Text steht im Berichtsentwurf. Die zweifelhaften Forderungen
              habe ich zur Bewertung offen gelassen.
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>
    </UseCaseSection>
  );
}
