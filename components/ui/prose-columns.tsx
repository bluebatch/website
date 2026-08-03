import { ReactNode } from "react";
import Typo from "@/components/ui/typo";

// Rahmenlose Text-Spalten (ohne Karten-Chrome). Ersetzt das häufigste
// Inline-Muster in den Seiten: ein `<div className="grid ... md:grid-cols-3">`
// mit reinen `<div><Typo.H3/><Typo.Paragraph/></div>`-Zellen (Problem-,
// Vorteils-, Prüfumfang-Blöcke). Für Blöcke MIT Rahmen/Schatten stattdessen
// SimpleGrid + SimpleCard nutzen.

const colClass: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

interface ProseColumnsProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  /** größerer Spaltenabstand (für 2-Spalter mit viel Text) */
  wide?: boolean;
  className?: string;
}

function ProseColumns({
  children,
  cols = 3,
  wide = false,
  className = "",
}: ProseColumnsProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 ${wide ? "md:gap-12" : ""} ${colClass[cols]} ${className}`}
    >
      {children}
    </div>
  );
}

interface ProseColumnsItemProps {
  title: ReactNode;
  /** Body: reiner Text wird automatisch als grauer Absatz gerendert;
   *  für mehrere Absätze eigene <Typo.Paragraph>-Elemente übergeben. */
  children: ReactNode;
}

function ProseColumnsItem({ title, children }: ProseColumnsItemProps) {
  return (
    <div>
      <Typo.H3 className="mt-0!">{title}</Typo.H3>
      {typeof children === "string" ? (
        <Typo.Paragraph className="text-gray-600">{children}</Typo.Paragraph>
      ) : (
        children
      )}
    </div>
  );
}

ProseColumns.Item = ProseColumnsItem;

export default ProseColumns;
export { ProseColumnsItem };
