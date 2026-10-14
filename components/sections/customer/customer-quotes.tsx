import Image from "next/image";
import { Quote } from "lucide-react";
import IntroBox from "@/components/ui/intro-box";
import { kunden, type Kunde } from "./kunden";

// Bewertungskarten mit Zitat und Logo (Stil B). Zeigt nur Kunden mit Zitat
// und rendert nichts, solange es keins gibt. In kunden.ts steht ein Zitat
// erst, wenn der Kunde den Wortlaut freigegeben hat: Erfundene Kundenstimmen
// dürfen nicht live gehen (UWG, gefälschte Bewertungen).
//
// <CustomerQuotes />                    alle Kunden mit Zitat aus kunden.ts
// <CustomerQuotes kunden={auswahl} />   eigene Auswahl

interface CustomerQuotesProps {
  kunden?: Kunde[];
  /** Ohne eigene Überschrift rendern (z.B. wenn die Seite sie selbst setzt) */
  withoutIntro?: boolean;
}

function QuoteCard({ kunde }: { kunde: Kunde }) {
  return (
    <figure className="mb-6 flex break-inside-avoid flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/80 transition duration-300 hover:shadow-lg hover:ring-primary-200 sm:p-7">
      {kunde.logo && (
        <div className="flex h-14 items-center">
          <Image
            src={kunde.logo.src}
            alt={kunde.name}
            width={kunde.logo.width}
            height={kunde.logo.height}
            className={`h-auto w-auto max-w-[70%] object-contain object-left ${kunde.logo.scale === "lg" ? "max-h-14" : "max-h-10"}`}
          />
        </div>
      )}
      <Quote className="mt-5 h-6 w-6 text-primary-300" aria-hidden />
      <blockquote className="mt-2 text-[15px] leading-relaxed text-gray-700">
        {kunde.zitat}
      </blockquote>
      <figcaption className="mt-6 border-t border-gray-100 pt-4">
        <span className="block text-sm font-semibold text-gray-900">{kunde.name}</span>
        <span className="block text-xs text-gray-500">{kunde.branche}</span>
      </figcaption>
    </figure>
  );
}

export default function CustomerQuotes({
  kunden: liste = kunden,
  withoutIntro = false,
}: CustomerQuotesProps) {
  const mitZitat = liste.filter((k) => k.zitat && k.logo);
  if (mitZitat.length === 0) return null;

  return (
    <>
      {!withoutIntro && (
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Kundenstimmen</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Kanzleien und Unternehmen über die Zusammenarbeit sagen</IntroBox.Headline>
        </IntroBox>
      )}
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {mitZitat.map((kunde) => (
          <QuoteCard key={kunde.name} kunde={kunde} />
        ))}
      </div>
    </>
  );
}
