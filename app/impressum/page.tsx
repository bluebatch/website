import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";

export default function Page() {
  return (
    <ContentWrapper variant="dark" isFirstSection>
      <Typo.H1>Impressum</Typo.H1>

      <Typo.H3>Angaben gemäß § 5 TMG</Typo.H3>
      <Typo.Paragraph>
        oseven GmbH <br />
        Im Zwergfeld 13 <br />
        90427 Nürnberg
      </Typo.Paragraph>

      <Typo.Paragraph>
        Handelsregister: HRB 43513 <br />
        Registergericht: Amtsgericht Nürnberg
      </Typo.Paragraph>

      <Typo.H3>Vertreten durch</Typo.H3>
      <Typo.Paragraph>Geschäftsführer Maximilian Hänsel</Typo.Paragraph>

      <Typo.H3>Kontakt</Typo.H3>
      <Typo.Paragraph>
        Telefon: +49(0)163-4412159
        <br />
        E-Mail: max@oseven.de
      </Typo.Paragraph>

      <Typo.H3>Umsatzsteuer</Typo.H3>
      <Typo.Paragraph>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        <br />
        DE406003610
      </Typo.Paragraph>

      <Typo.H2>Streitschlichtung</Typo.H2>
      <Typo.Paragraph>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </Typo.Paragraph>

      <Typo.H2>Haftung für Inhalte</Typo.H2>
      <Typo.Paragraph>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </Typo.Paragraph>

      <Typo.H2>Haftung für Links</Typo.H2>
      <Typo.Paragraph>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </Typo.Paragraph>

      <Typo.H2>Urheberrecht</Typo.H2>
      <Typo.Paragraph>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </Typo.Paragraph>
    </ContentWrapper>
  );
}
