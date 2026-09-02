import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

// Leichte, wiederverwendbare Erklär-Diagramme für die e.bootis-Integrations-
// seiten. Zwei Varianten: FlowDiagram (Datenfluss/Prozesskette als Boxen mit
// Pfeilen, horizontal auf Desktop, vertikal auf Mobile) und HubDiagram
// (zentraler Knoten mit Speichen). Rein aus bestehenden Tailwind-Tokens
// gebaut, keine externen Assets.

export interface DiagramNode {
  icon?: ReactNode;
  label: string;
  sublabel?: string;
  /** hebt den zentralen/eigenen Baustein hervor */
  highlight?: boolean;
}

function NodeBox({ node }: { node: DiagramNode }) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-2 rounded-2xl border p-4 text-center shadow-sm ${
        node.highlight
          ? "border-primary-600 bg-primary-800 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {node.icon && (
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            node.highlight
              ? "bg-white/15 text-white"
              : "bg-primary-50 text-primary-700"
          }`}
        >
          {node.icon}
        </span>
      )}
      {/* w-full + min-w-0 sind nötig, damit der Umbruch greift: als Flex-Item hat
          das Label min-width:auto, und break-words allein senkt die
          min-content-Breite nicht. Lange Komposita wie "Unterauftragnehmer"
          liefen sonst aus der schmalen Box. hyphens-auto trennt zusätzlich
          sauber, weil das Root-Layout lang="de" setzt. */}
      <span className="w-full min-w-0 hyphens-auto break-words text-sm font-bold leading-tight">
        {node.label}
      </span>
      {node.sublabel && (
        <span
          className={`text-xs leading-snug ${
            node.highlight ? "text-primary-100" : "text-gray-500"
          }`}
        >
          {node.sublabel}
        </span>
      )}
    </div>
  );
}

interface FlowDiagramProps {
  nodes: DiagramNode[];
  /** true = beidseitige Pfeile (Daten fließen hin und zurück) */
  bidirectional?: boolean;
  caption?: string;
  className?: string;
}

export function FlowDiagram({
  nodes,
  bidirectional = false,
  caption,
  className = "",
}: FlowDiagramProps) {
  return (
    <figure className={`rounded-3xl bg-gray-50 p-6 md:p-8 ${className}`}>
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className="flex flex-col items-center gap-3 lg:flex-1 lg:flex-row"
          >
            <div className="w-full lg:flex-1">
              <NodeBox node={node} />
            </div>
            {i < nodes.length - 1 && (
              <span className="flex shrink-0 items-center text-primary-400">
                {bidirectional && (
                  <ArrowRight className="h-5 w-5 rotate-[135deg] lg:rotate-180" />
                )}
                <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-5 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface HubDiagramProps {
  center: DiagramNode;
  spokes: DiagramNode[];
  caption?: string;
  className?: string;
}

export function HubDiagram({
  center,
  spokes,
  caption,
  className = "",
}: HubDiagramProps) {
  return (
    <figure className={`rounded-3xl bg-gray-50 p-6 md:p-8 ${className}`}>
      {/* max-w-2xl statt md: bei vier Speichen blieben sonst rund 100px pro
          Spalte, zu wenig für deutsche Komposita wie "Unterauftragnehmer". */}
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto mb-6 w-2/3">
          <NodeBox node={{ ...center, highlight: true }} />
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-4 h-6 w-px bg-primary-300" aria-hidden />
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {spokes.map((s) => (
              <NodeBox key={s.label} node={s} />
            ))}
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-5 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
