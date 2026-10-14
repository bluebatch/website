import Image from "next/image";
import { kunden, type Kunde } from "./kunden";

// Kundenlogos als Kacheln (Stil A: nur Logo). Für die Bewertungskarten mit
// Zitat gibt es CustomerQuotes, für das laufende Band CustomerBand.
// Kunden ohne Logo erscheinen als schlichte Text-Kachel (kein nachgebautes
// Logo), reine Bildmarken bekommen den Namen dazu.
//
// <CustomerTiles />                      alle Kunden aus kunden.ts
// <CustomerTiles kunden={auswahl} />     eigene Auswahl

interface CustomerTilesProps {
  kunden?: Kunde[];
  /** Kleine Überschrift über den Kacheln; leer = keine */
  label?: string;
  className?: string;
}

const logoHeight = {
  sm: "max-h-6 sm:max-h-8",
  md: "max-h-8 sm:max-h-10",
  lg: "max-h-11 sm:max-h-14",
};

function TileContent({ kunde }: { kunde: Kunde }) {
  if (!kunde.logo) {
    return (
      <span className="text-center leading-tight">
        <span className="block text-sm font-semibold tracking-wide text-gray-600 sm:text-base">
          {kunde.name}
        </span>
        <span className="mt-0.5 block text-[10px] text-gray-400 sm:text-xs">{kunde.branche}</span>
      </span>
    );
  }

  const logo = (
    <Image
      src={kunde.logo.src}
      alt={kunde.name}
      title={kunde.name}
      width={kunde.logo.width}
      height={kunde.logo.height}
      className={`h-auto w-auto max-w-full object-contain ${logoHeight[kunde.logo.scale ?? "md"]}`}
    />
  );

  if (!kunde.logo.nurBildmarke) return logo;

  return (
    <span className="flex flex-col items-center gap-1.5">
      {logo}
      <span className="text-center text-[10px] font-medium leading-tight text-gray-500 sm:text-xs">
        {kunde.name}
      </span>
    </span>
  );
}

export default function CustomerTiles({
  kunden: liste = kunden,
  label = "Kanzleien und Unternehmen, die mit uns arbeiten",
  className = "",
}: CustomerTilesProps) {
  return (
    <div className={className}>
      {label && (
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-gray-400">
          {label}
        </p>
      )}
      {/* flex statt grid, damit eine unvollständige letzte Reihe mittig sitzt */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {liste.map((kunde) => (
          <li
            key={kunde.name}
            className="group flex aspect-[4/3] basis-[calc((100%-1rem)/3)] items-center justify-center rounded-xl bg-white px-3 py-3 shadow-sm ring-1 ring-gray-200/80 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-primary-200 sm:aspect-[3/2] sm:basis-[calc((100%-2rem)/3)] sm:rounded-2xl sm:px-5 sm:py-4 lg:basis-[calc((100%-5rem)/6)]"
          >
            <span className="flex h-full w-full items-center justify-center opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0">
              <TileContent kunde={kunde} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
