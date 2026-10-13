import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

// Titel mit Icon-Kachel für ProseColumns.Item (title={<IconTitle …/>}).
// Rendert nur Inline-Elemente, weil der Titel in einem <h3> landet.

export default function IconTitle({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="block">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ring-1 ring-primary-200/60">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      {children}
    </span>
  );
}
