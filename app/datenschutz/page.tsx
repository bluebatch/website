import type { Metadata } from "next";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – BlueBatch",
  description:
    "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei BlueBatch.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <Typo.H1>Datenschutzerklärung</Typo.H1>

      {/* 1. Datenschutz auf einen Blick */}
      <Typo.H2>1. Datenschutz auf einen Blick</Typo.H2>

      <Typo.H3>Allgemeine Hinweise</Typo.H3>
      <Typo.Paragraph>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </Typo.Paragraph>

      <Typo.H3>Datenerfassung auf unserer Website</Typo.H3>

      <Typo.H4>
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </Typo.H4>
      <Typo.Paragraph>
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </Typo.Paragraph>

      <Typo.H4>Wie erfassen wir Ihre Daten?</Typo.H4>
      <Typo.Paragraph>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Andere Daten werden automatisch beim Besuch der Website durch unsere
        IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
        Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
        Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
        betreten.
      </Typo.Paragraph>

      <Typo.H4>Wofür nutzen wir Ihre Daten?</Typo.H4>
      <Typo.Paragraph>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </Typo.Paragraph>

      <Typo.H4>Welche Rechte haben Sie bezüglich Ihrer Daten?</Typo.H4>
      <Typo.Paragraph>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder
        Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
        Thema Datenschutz können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Außerdem haben Sie das Recht, unter bestimmten Umständen die
        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
        verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter
        &bdquo;Recht auf Einschränkung der Verarbeitung&ldquo;.
      </Typo.Paragraph>

      <Typo.H3>Analyse-Tools und Tools von Drittanbietern</Typo.H3>
      <Typo.Paragraph>
        Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit Cookies und mit
        sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt
        in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
        zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie
        durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte
        Informationen dazu finden Sie in der folgenden Datenschutzerklärung.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sie können dieser Analyse widersprechen. Über die
        Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung
        informieren.
      </Typo.Paragraph>

      {/* 2. Hosting und CDN */}
      <Typo.H2>2. Hosting und Content Delivery Networks (CDN)</Typo.H2>

      <Typo.H3>Externes Hosting</Typo.H3>
      <Typo.Paragraph>
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
        Die personenbezogenen Daten, die auf dieser Website erfasst werden,
        werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
        a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
        Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
        die über eine Website generiert werden, handeln.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
        gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
        lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen
        Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </Typo.Paragraph>
      <Typo.Paragraph>
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
        Erfüllung seiner Leistungspflichten erforderlich ist und unsere
        Weisungen in Bezug auf diese Daten befolgen.
      </Typo.Paragraph>

      <Typo.H4>Abschluss eines Vertrages über Auftragsverarbeitung</Typo.H4>
      <Typo.Paragraph>
        Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen
        Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
      </Typo.Paragraph>

      {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
      <Typo.H2>3. Allgemeine Hinweise und Pflichtinformationen</Typo.H2>

      <Typo.H3>Datenschutz</Typo.H3>
      <Typo.Paragraph>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </Typo.Paragraph>

      <Typo.H3>Hinweis zur verantwortlichen Stelle</Typo.H3>
      <Typo.Paragraph>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        entnehmen Sie bitte dem Impressum.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
        Ä.) entscheidet.
      </Typo.Paragraph>

      <Typo.H3>Speicherdauer</Typo.H3>
      <Typo.Paragraph>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keinen anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </Typo.Paragraph>

      <Typo.H3>Hinweis zur Datenweitergabe in die USA</Typo.H3>
      <Typo.Paragraph>
        Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in
        den USA eingebunden. Wenn diese Tools aktiv sind, können Ihre
        personenbezogenen Daten an die US-Server der jeweiligen Unternehmen
        weitergegeben werden. Wir weisen darauf hin, dass die USA kein sicherer
        Drittstaat im Sinne des EU-Datenschutzrechts sind. US-Unternehmen sind
        dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden
        herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich
        vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass
        US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern befindlichen Daten
        zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern.
        Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
      </Typo.Paragraph>

      <Typo.H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</Typo.H3>
      <Typo.Paragraph>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
        uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
        bleibt vom Widerruf unberührt.
      </Typo.Paragraph>

      <Typo.H3>
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO)
      </Typo.H3>
      <Typo.Paragraph>
        Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f
        DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus
        Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
        personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
        auf diese Bestimmungen gestütztes Profiling. Die jeweilige
        Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
        dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
        Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
        denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
        nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder
        die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
      </Typo.Paragraph>
      <Typo.Paragraph>
        Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
        betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
        Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
        derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
        es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
        widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
        mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21
        Abs. 2 DSGVO).
      </Typo.Paragraph>

      <Typo.H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</Typo.H3>
      <Typo.Paragraph>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </Typo.Paragraph>

      <Typo.H3>Recht auf Datenübertragbarkeit</Typo.H3>
      <Typo.Paragraph>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
        ist.
      </Typo.Paragraph>

      <Typo.H3>SSL- bzw. TLS-Verschlüsselung</Typo.H3>
      <Typo.Paragraph>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
        &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
        Browserzeile.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </Typo.Paragraph>

      <Typo.H3>Auskunft, Sperrung, Löschung und Berichtigung</Typo.H3>
      <Typo.Paragraph>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
        Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
        personenbezogene Daten können Sie sich jederzeit unter der im Impressum
        angegebenen Adresse an uns wenden.
      </Typo.Paragraph>

      <Typo.H3>Recht auf Einschränkung der Verarbeitung</Typo.H3>
      <Typo.Paragraph>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
        Einschränkung der Verarbeitung besteht in folgenden Fällen:
      </Typo.Paragraph>
      <Typo.List>
        <Typo.ListItem>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
          personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
          um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht,
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </Typo.ListItem>
        <Typo.ListItem>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah / geschieht, können Sie statt der Löschung die Einschränkung
          der Datenverarbeitung verlangen.
        </Typo.ListItem>
        <Typo.ListItem>
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </Typo.ListItem>
        <Typo.ListItem>
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </Typo.ListItem>
      </Typo.List>
      <Typo.Paragraph>
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </Typo.Paragraph>

      <Typo.H3>Widerspruch gegen Werbe-E-Mails</Typo.H3>
      <Typo.Paragraph>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung
        und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
        Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
        unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
        vor.
      </Typo.Paragraph>

      {/* 4. Datenerfassung auf unserer Website */}
      <Typo.H2>4. Datenerfassung auf unserer Website</Typo.H2>

      <Typo.H3>Cookies</Typo.H3>
      <Typo.Paragraph>
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
        richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
        Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
        sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Rechner abgelegt werden und die Ihr Browser speichert.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die meisten der von uns verwendeten Cookies sind so genannte
        &bdquo;Session-Cookies&ldquo;. Sie werden nach Ende Ihres Besuchs
        automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
        gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns,
        Ihren Browser beim nächsten Besuch wiederzuerkennen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browser
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
        oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
        (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein
        berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit
        andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens)
        gespeichert werden, werden diese in dieser Datenschutzerklärung
        gesondert behandelt.
      </Typo.Paragraph>

      <Typo.H3>Server-Log-Dateien</Typo.H3>
      <Typo.Paragraph>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in
        so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </Typo.Paragraph>
      <Typo.List>
        <Typo.ListItem>Browsertyp und Browserversion</Typo.ListItem>
        <Typo.ListItem>verwendetes Betriebssystem</Typo.ListItem>
        <Typo.ListItem>Referrer URL</Typo.ListItem>
        <Typo.ListItem>Hostname des zugreifenden Rechners</Typo.ListItem>
        <Typo.ListItem>Uhrzeit der Serveranfrage</Typo.ListItem>
        <Typo.ListItem>IP-Adresse</Typo.ListItem>
      </Typo.List>
      <Typo.Paragraph>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
      </Typo.Paragraph>

      <Typo.H3>Kontaktformular</Typo.H3>
      <Typo.Paragraph>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
        somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
        lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu
        reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit
        der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom
        Widerruf unberührt.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
        bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </Typo.Paragraph>

      <Typo.H3>Anfrage per E-Mail, Telefon oder Telefax</Typo.H3>
      <Typo.Paragraph>
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren
        berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
        berechtigtes Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen haben.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
        – bleiben unberührt.
      </Typo.Paragraph>

      <Typo.H3>Verarbeiten von Daten (Kunden- und Vertragsdaten)</Typo.H3>
      <Typo.Paragraph>
        Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit
        sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des
        Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von
        Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
        gestattet. Personenbezogene Daten über die Inanspruchnahme unserer
        Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur,
        soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des
        Dienstes zu ermöglichen oder abzurechnen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
        Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche
        Aufbewahrungsfristen bleiben unberührt.
      </Typo.Paragraph>

      {/* 5. Analyse-Tools und Werbung */}
      <Typo.H2>5. Analyse-Tools und Werbung</Typo.H2>

      <Typo.H3>Google Tag Manager</Typo.H3>
      <Typo.Paragraph>
        Diese Webseite verwendet den Google Tag Manager. Durch diesen Dienst
        können Website-Tags über eine Oberfläche verwaltet werden. Der Google
        Tool Manager implementiert lediglich Tags. Das bedeutet: Es werden keine
        Cookies eingesetzt und es werden keine personenbezogenen Daten erfasst.
        Der Google Tool Manager löst andere Tags aus, die wiederum ggf. Daten
        erfassen. Jedoch greift der Google Tag Manager nicht auf diese Daten zu.
        Wurde auf Domain- oder Cookie-Ebene eine Deaktivierung vorgenommen, so
        bleibt sie für alle Tracking-Tags bestehen, insofern diese mit dem
        Google Tag Manager implementiert werden.
      </Typo.Paragraph>

      <Typo.H3>Google Analytics</Typo.H3>
      <Typo.Paragraph>
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
        Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View,
        CA 94043, USA.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Google Analytics verwendet so genannte &bdquo;Cookies&ldquo;. Das sind
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
        Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden
        in der Regel an einen Server von Google in den USA übertragen und dort
        gespeichert.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses
        Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
        Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
        optimieren.
      </Typo.Paragraph>

      <Typo.H4>IP Anonymisierung</Typo.H4>
      <Typo.Paragraph>
        Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
        Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der
        Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
        Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur
        in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in
        den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
        Website wird Google diese Informationen benutzen, um Ihre Nutzung der
        Website auszuwerten, um Reports über die Websiteaktivitäten
        zusammenzustellen und um weitere mit der Websitenutzung und der
        Internetnutzung verbundene Dienstleistungen gegenüber dem
        Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von
        Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
        Google zusammengeführt.
      </Typo.Paragraph>

      <Typo.H4>Browser Plugin</Typo.H4>
      <Typo.Paragraph>
        Sie können die Speicherung der Cookies durch eine entsprechende
        Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
        darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
        Funktionen dieser Website vollumfänglich werden nutzen können. Sie können
        darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre
        Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google
        sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie
        das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und
        installieren: https://tools.google.com/dlpage/gaoptout?hl=de.
      </Typo.Paragraph>

      <Typo.H4>Widerspruch gegen Datenerfassung</Typo.H4>
      <Typo.Paragraph>
        Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
        indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
        gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
        Website verhindert: Google Analytics deaktivieren.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden
        Sie in der Datenschutzerklärung von Google:
        https://support.google.com/analytics/answer/6004245?hl=de.
      </Typo.Paragraph>

      <Typo.H4>Auftragsverarbeitung</Typo.H4>
      <Typo.Paragraph>
        Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
        abgeschlossen und setzen die strengen Vorgaben der deutschen
        Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
      </Typo.Paragraph>

      <Typo.H4>Demografische Merkmale bei Google Analytics</Typo.H4>
      <Typo.Paragraph>
        Diese Website nutzt die Funktion &bdquo;demografische Merkmale&ldquo;
        von Google Analytics. Dadurch können Berichte erstellt werden, die
        Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher
        enthalten. Diese Daten stammen aus interessenbezogener Werbung von
        Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können
        keiner bestimmten Person zugeordnet werden. Sie können diese Funktion
        jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto
        deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie
        im Punkt &bdquo;Widerspruch gegen Datenerfassung&ldquo; dargestellt
        generell untersagen.
      </Typo.Paragraph>

      <Typo.H3>Google Analytics Remarketing</Typo.H3>
      <Typo.Paragraph>
        Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in
        Verbindung mit den geräteübergreifenden Funktionen von Google AdWords und
        Google DoubleClick. Anbieter ist die Google Inc., 1600 Amphitheatre
        Parkway, Mountain View, CA 94043, USA.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Diese Funktion ermöglicht es die mit Google Analytics Remarketing
        erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von
        Google AdWords und Google DoubleClick zu verknüpfen. Auf diese Weise
        können interessenbezogene, personalisierte Werbebotschaften, die in
        Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem
        Endgerät (z.B. Handy) an Sie angepasst wurden auch auf einem anderen
        Ihrer Endgeräte (z.B. Tablet oder PC) angezeigt werden.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Haben Sie eine entsprechende Einwilligung erteilt, verknüpft Google zu
        diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto.
        Auf diese Weise können auf jedem Endgerät auf dem Sie sich mit Ihrem
        Google-Konto anmelden, dieselben personalisierten Werbebotschaften
        geschaltet werden.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Zur Unterstützung dieser Funktion erfasst Google Analytics
        google-authentifizierte IDs der Nutzer, die vorübergehend mit unseren
        Google-Analytics-Daten verknüpft werden, um Zielgruppen für die
        geräteübergreifende Anzeigenwerbung zu definieren und zu erstellen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sie können dem geräteübergreifenden Remarketing/Targeting dauerhaft
        widersprechen, indem Sie personalisierte Werbung in Ihrem Google-Konto
        deaktivieren; folgen Sie hierzu diesem Link:
        https://www.google.com/settings/ads/onweb/.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Zusammenfassung der erfassten Daten in Ihrem Google-Konto erfolgt
        ausschließlich auf Grundlage Ihrer Einwilligung, die Sie bei Google
        abgeben oder widerrufen können (Art. 6 Abs. 1 lit. a DSGVO). Bei
        Datenerfassungsvorgängen, die nicht in Ihrem Google-Konto zusammengeführt
        werden (z.B. weil Sie kein Google-Konto haben oder der Zusammenführung
        widersprochen haben) beruht die Erfassung der Daten auf Art. 6 Abs. 1
        lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der
        Websitebetreiber ein Interesse an der anonymisierten Analyse der
        Websitebesucher zu Werbezwecken hat.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in
        der Datenschutzerklärung von Google unter:
        https://policies.google.com/technologies/ads?hl=de.
      </Typo.Paragraph>

      <Typo.H3>Google AdWords und Google Conversion-Tracking</Typo.H3>
      <Typo.Paragraph>
        Diese Website verwendet Google AdWords. AdWords ist ein
        Online-Werbeprogramm der Google Inc., 1600 Amphitheatre Parkway,
        Mountain View, CA 94043, United States (&bdquo;Google&ldquo;).
      </Typo.Paragraph>
      <Typo.Paragraph>
        Im Rahmen von Google AdWords nutzen wir das so genannte
        Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige
        klicken wird ein Cookie für das Conversion-Tracking gesetzt. Bei Cookies
        handelt es sich um kleine Textdateien, die der Internet-Browser auf dem
        Computer des Nutzers ablegt. Diese Cookies verlieren nach 30 Tagen ihre
        Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer.
        Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist
        noch nicht abgelaufen, können Google und wir erkennen, dass der Nutzer
        auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die Cookies können
        nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die
        mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu,
        Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für
        Conversion-Tracking entschieden haben. Die Kunden erfahren die
        Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu
        einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet
        wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer
        persönlich identifizieren lassen. Wenn Sie nicht am Tracking teilnehmen
        möchten, können Sie dieser Nutzung widersprechen, indem Sie das Cookie
        des Google Conversion-Trackings über ihren Internet-Browser unter
        Nutzereinstellungen leicht deaktivieren. Sie werden sodann nicht in die
        Conversion-Tracking Statistiken aufgenommen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Speicherung von &bdquo;Conversion-Cookies&ldquo; und die Nutzung
        dieses Tracking-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine
        Werbung zu optimieren.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Mehr Informationen zu Google AdWords und Google Conversion-Tracking
        finden Sie in den Datenschutzbestimmungen von Google:
        https://policies.google.com/privacy?hl=de.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browser
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </Typo.Paragraph>

      <Typo.H3>Facebook Pixel</Typo.H3>
      <Typo.Paragraph>
        Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von
        Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304,
        USA (&bdquo;Facebook&ldquo;).
      </Typo.Paragraph>
      <Typo.Paragraph>
        So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem
        diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des
        Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der
        Facebook-Werbeanzeigen für statistische und Marktforschungszwecke
        ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir
        können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten
        werden aber von Facebook gespeichert und verarbeitet, sodass eine
        Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten
        für eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie
        verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf
        Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese
        Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst
        werden.
      </Typo.Paragraph>
      <Typo.Paragraph>
        In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum
        Schutz Ihrer Privatsphäre: https://www.facebook.com/about/privacy/.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sie können außerdem die Remarketing-Funktion &bdquo;Custom
        Audiences&ldquo; im Bereich Einstellungen für Werbeanzeigen unter
        https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
        deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte
        Werbung von Facebook auf der Website der European Interactive Digital
        Advertising Alliance deaktivieren:
        http://www.youronlinechoices.com/de/praferenzmanagement/.
      </Typo.Paragraph>

      {/* 6. Newsletter */}
      <Typo.H2>6. Newsletter</Typo.H2>

      <Typo.H3>Newsletterdaten</Typo.H3>
      <Typo.Paragraph>
        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
        benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche
        uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
        E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden
        sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.
        Diese Daten verwenden wir ausschließlich für den Versand der
        angeforderten Informationen und geben diese nicht an Dritte weiter.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten
        erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
        lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der
        E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können
        Sie jederzeit widerrufen, etwa über den &bdquo;Austragen&ldquo;-Link im
        Newsletter. Die Rechtmäßigkeit der bereits erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
        Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter
        gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten,
        die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon
        unberührt.
      </Typo.Paragraph>

      {/* 7. Plugins und Tools */}
      <Typo.H2>7. Plugins und Tools</Typo.H2>

      <Typo.H3>YouTube mit erweitertem Datenschutz</Typo.H3>
      <Typo.Paragraph>
        Unsere Website nutzt Plugins der Website YouTube. Betreiber der Seiten
        ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt
        laut YouTube, dass YouTube keine Informationen über die Besucher auf
        dieser Website speichert, bevor diese sich das Video ansehen. Die
        Weitergabe von Daten an YouTube-Partner wird durch den erweiterten
        Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt
        YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine
        Verbindung zum Google DoubleClick-Netzwerk her.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Sobald Sie ein YouTube-Video auf unserer Website starten, wird eine
        Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
        YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn
        Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube,
        Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies
        können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account
        ausloggen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies
        auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann YouTube
        Informationen über Besucher unserer Website erhalten. Diese
        Informationen werden u. a. verwendet, um Videostatistiken zu erfassen,
        die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
        vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie
        löschen.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Gegebenenfalls können nach dem Start eines YouTube-Videos weitere
        Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss
        haben.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
        Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Weitere Informationen über Datenschutz bei YouTube finden Sie in deren
        Datenschutzerklärung unter:
        https://policies.google.com/privacy?hl=de.
      </Typo.Paragraph>

      <Typo.H3>Google Web Fonts</Typo.H3>
      <Typo.Paragraph>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
        genannte Web Fonts, die von Google bereitgestellt werden. Die Google
        Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
        findet dabei nicht statt.
      </Typo.Paragraph>

      <Typo.H3>Terminvereinbarung via Calendly</Typo.H3>
      <Typo.Paragraph>
        Zur einfachen, schnellen und unkomplizierten Terminvereinbarung setzen
        wir das Tool Calendly ein. Die Nutzung von Calendly erfolgt zur
        Verbesserung unserer Dienstleistung für bestehende und neue Mandanten.
        Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
        DSGVO dar.
      </Typo.Paragraph>
      <Typo.Paragraph>
        Bei der Verwendung des Tools werden von Ihnen persönliche Daten wie Name,
        E-Mail-Adresse und Telefonnummer abgefragt. Sie haben außerdem die
        Möglichkeit, Ihr Anliegen darzustellen und uns weitere Informationen zur
        Verfügung zu stellen. Wenn Sie das Tool nutzen, werden Ihre Angaben aus
        dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Informationen gespeichert und selbstverständlich im Internet übertragen.
        Die Verarbeitung der eingegebenen Daten erfolgt ausschließlich auf
        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
      </Typo.Paragraph>
      <Typo.Paragraph>
        Für den Umgang mit den durch Verwendung von Calendly erfassten Daten gilt
        diese Datenschutzerklärung sowie die Datenschutzerklärung des Anbieters.
        Die Datenschutzerklärung von Calendly finden Sie unter:
        https://calendly.com/pages/privacy
      </Typo.Paragraph>
    </ContentWrapper>
  );
}
