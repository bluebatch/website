import { ReactNode } from "react";
import { Check, type LucideIcon } from "lucide-react";

// Bausteine der Produkt-Tour durch das Managed Claude Interface: eine Zeile
// Text + Screenshot (abwechselnd gespiegelt), eine schmale Kachel für kleinere
// Funktionen und die Sprungmarken-Übersicht aller Funktionen.
//
// <FeatureRow id="limits" reverse>
//   <FeatureRow.Text>
//     <FeatureRow.Label><SlidersHorizontal /> Limits</FeatureRow.Label>
//     <Typo.H3>…</Typo.H3>
//     <FeatureRow.Points><FeatureRow.Point>…</FeatureRow.Point></FeatureRow.Points>
//   </FeatureRow.Text>
//   <FeatureRow.Media><LimitsScreen /></FeatureRow.Media>
// </FeatureRow>

interface FeatureRowProps {
  children: ReactNode;
  /** Sprungmarke */
  id?: string;
  /** Screenshot links, Text rechts (ab lg) */
  reverse?: boolean;
}

function FeatureRow({ children, id, reverse = false }: FeatureRowProps) {
  return (
    <div
      id={id}
      data-reverse={reverse || undefined}
      className="group/row grid scroll-mt-28 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      {children}
    </div>
  );
}

function Text({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-5">{children}</div>;
}

function Media({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 lg:col-span-7 lg:group-data-[reverse]/row:order-first">
      <Stage>{children}</Stage>
    </div>
  );
}

/** Getönte Bühne hinter einem Screenshot */
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-white p-3 ring-1 ring-primary-100/70 sm:p-6 lg:p-8">
      {children}
    </div>
  );
}

function Label({ children, beta = false }: { children: ReactNode; beta?: boolean }) {
  return (
    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100 [&_svg]:h-4 [&_svg]:w-4">
      {children}
      {beta && <BetaBadge />}
    </div>
  );
}

function BetaBadge() {
  return (
    <span className="rounded-full bg-amber-100 px-2 py-px text-[11px] font-semibold uppercase tracking-wide text-amber-800">
      Beta
    </span>
  );
}

function Points({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6">
      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Was Sie damit machen</div>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Point({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-gray-700">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
      </span>
      <span>{children}</span>
    </li>
  );
}

/**
 * Kleinere Funktion: Text oben, Screenshot unten, für ein 2-Spalten-Grid.
 * Subgrid: Texte und Screenshots nebeneinanderliegender Kacheln fluchten.
 */
function Tile({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div id={id} className="row-span-2 grid min-w-0 scroll-mt-28 grid-cols-1 grid-rows-subgrid gap-y-8">
      {children}
    </div>
  );
}

function TileText({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function TileMedia({ children }: { children: ReactNode }) {
  return <Stage>{children}</Stage>;
}

FeatureRow.Text = Text;
FeatureRow.Media = Media;
FeatureRow.Label = Label;
FeatureRow.Points = Points;
FeatureRow.Point = Point;
FeatureRow.Tile = Tile;
FeatureRow.TileText = TileText;
FeatureRow.TileMedia = TileMedia;

export default FeatureRow;

// ── Übersicht aller Funktionen als Sprungmarken ──────────────────────────────

export interface FeatureIndexGroup {
  title: string;
  items: { href: string; label: string; text: string; icon: LucideIcon; beta?: boolean }[];
}

export function FeatureIndex({ groups }: { groups: FeatureIndexGroup[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <div key={group.title} className="border-t-2 border-primary-600 pt-4">
          <a
            href={group.items[0].href}
            className="text-sm font-semibold uppercase tracking-wide text-primary-700 hover:text-primary-900"
          >
            {group.title}
          </a>
          <ul className="mt-4 space-y-1">
            {group.items.map(({ href, label, text, icon: Icon, beta }) => (
              <li key={href}>
                <a
                  href={href}
                  className="-mx-2 flex gap-3 rounded-xl p-2 transition-colors hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm ring-1 ring-gray-200">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-semibold text-gray-900">
                      {label}
                      {beta && <BetaBadge />}
                    </span>
                    <span className="block text-sm leading-snug text-gray-600">{text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
