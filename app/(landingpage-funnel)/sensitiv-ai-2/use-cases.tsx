import { BookOpenCheck, FileSearch, Mail } from "lucide-react";
import { ClaudeDesktopMock } from "@/components/mockups";
import { UseCase, UseCaseSection } from "../_engine/private-claude-sections";

// Beispiele aus der Steuerkanzlei. DATEV-Angaben wie auf
// /managed-claude/integrationen/datev, Outlook wie auf
// /managed-claude/integrationen/microsoft (Entwürfe in Claude, gesendet wird
// aus Outlook). Namen in den Fenstern sind erfunden.

const BANNER = "Kanzlei Muster · Private Claude";

export default function SensitivAi2UseCases() {
  return (
    <UseCaseSection
      preHeadline="Zum Beispiel in der Steuerkanzlei"
      headline="So arbeitet Ihr Team mit Claude"
      intro="Drei Abläufe aus dem Kanzleialltag. Claude bereitet vor, Ihre Leute prüfen und entscheiden."
    >
      <UseCase
        icon={BookOpenCheck}
        label="Fibu-Review mit DATEV"
        beta
        title="Buchungen prüfen, bevor festgeschrieben wird"
        text="Über den DATEV Connector liest Claude Buchungsstapel und Konten direkt aus Ihrem DATEV, mit den Rechten der angemeldeten Person. Auffälligkeiten stehen in einer Liste, die Rückfragen an den Mandanten sind schnell geschrieben."
        note="DATEV Connector als Add-on in der Beta, 100 € im Monat. Für Einzelbuchungen braucht es die DATEV-Zusatzlizenz Kontobuchungen."
      >
        <ClaudeDesktopMock mode="Chat" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Prüf den Buchungsstapel September von Weber Elektrotechnik auf
            Auffälligkeiten.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            DATEV · Buchungsstapel 09/2026 gelesen, 412 Buchungen
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Drei Punkte sollten Sie sich ansehen:</p>
            <ul>
              <li>
                <strong>Doppelt gebucht?</strong> Rechnung 2026-1187 von Elektro
                Hahn über 2.380 € steht zweimal im Stapel.
              </li>
              <li>
                <strong>Vorsteuer:</strong> Rechnung aus Österreich mit 20 % USt
                als Vorsteuer gebucht.
              </li>
              <li>
                <strong>Ohne Beleg:</strong> Bewirtung über 1.240 €, im DATEV
                DMS liegt nichts dazu.
              </li>
            </ul>
            <p>Soll ich die Rückfragen an Herrn Weber als Mail entwerfen?</p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={Mail}
        label="Mandantenpost in Outlook"
        title="Posteingang sortiert, Antworten entworfen"
        text="Der Outlook Connector ist im Startpaket enthalten. Claude liest den Posteingang, sagt Ihnen, was heute dran ist, und entwirft Antworten in Ihrem Ton. Abgeschickt wird von Ihnen, aus Outlook."
        reverse
      >
        <ClaudeDesktopMock mode="Chat" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Welche Mandanten-Mails von dieser Woche brauchen heute noch eine
            Antwort?
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            Outlook · 37 Mails gelesen
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Drei Mails sollten heute beantwortet werden:</p>
            <ul>
              <li>
                <strong>Bäckerei Hofmann</strong> fragt, bis wann die Belege für
                September da sein müssen.
              </li>
              <li>
                <strong>Dr. Lang</strong> schickt den Steuerbescheid 2025 und
                bittet um Prüfung.
              </li>
              <li>
                <strong>Weber Elektrotechnik</strong> braucht eine Bescheinigung
                für die Bank.
              </li>
            </ul>
            <p>Die drei Antworten habe ich unten entworfen.</p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>

      <UseCase
        icon={FileSearch}
        label="Bescheidprüfung"
        title="Bescheid und Erklärung abgleichen"
        text="In Claude Cowork arbeitet Claude mit den Dateien in einem freigegebenen Ordner. Es vergleicht Bescheid und Erklärung, nennt die Abweichungen und entwirft den Einspruch."
      >
        <ClaudeDesktopMock mode="Cowork" compact>
          <ClaudeDesktopMock.Banner>{BANNER}</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>
            Vergleich den Bescheid 2025 von Dr. Lang mit unserer Erklärung.
          </ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>
            2 Dateien gelesen · Bescheid 2025.pdf, Erklärung 2025.pdf
          </ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>
              <strong>Eine Abweichung:</strong> Das Finanzamt hat die
              Homeoffice-Pauschale von 1.260 € nicht angesetzt. In den
              Erläuterungen steht keine Begründung.
            </p>
            <p>
              Den Einspruch habe ich entworfen:{" "}
              <strong>Einspruch Lang 2025.docx</strong> liegt im Ordner.
            </p>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </UseCase>
    </UseCaseSection>
  );
}
