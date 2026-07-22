import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ContactButton from "@/components/buttons/contact-button";

export const metadata: Metadata = {
  title: "KI-Assistenten für den Großhandel - Claude, ChatGPT, Copilot | Bluebatch",
  description:
    "KI-Assistenten für den Großhandel: Claude, ChatGPT und Copilot als Werkzeug für Ihr Team - Einführung, Schulung und DSGVO-konformer Einsatz im Betrieb.",
  openGraph: {
    title: "KI-Assistenten für den Großhandel - Bluebatch",
    description:
      "KI-Assistenten für den Großhandel: Claude, ChatGPT und Copilot als Werkzeug für Ihr Team - Einführung, Schulung und DSGVO-konformer Einsatz im Betrieb.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/grosshandel/ki-assistenten",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <div className="text-center max-w-3xl mx-auto">
        <Typo.H1>KI-Assistenten für den Großhandel</Typo.H1>
        <Typo.Paragraph className="text-gray-600 mt-4 mb-8">
          Claude, ChatGPT und Copilot als Werkzeug für Ihr Team: Ihre
          Mitarbeiter arbeiten, die KI hilft - bei Angebotstexten, Produktdaten,
          Auswertungen und der täglichen Mail-Flut. Wir führen die Assistenten
          DSGVO-konform ein und schulen Ihr Team.
        </Typo.Paragraph>
        <ContactButton icon="chat">Beratung anfragen</ContactButton>
      </div>
    </ContentWrapper>
  );
}
