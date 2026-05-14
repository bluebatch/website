import { ReactNode } from "react";

/**
 * RoiCalculation
 *
 * Tabular layout for a ROI calculation that breaks the math into rows so it
 * stays scannable instead of being buried in a paragraph. Designed to be
 * flexible: any number of Rows between the Assumption header and the Total
 * footer, optional Source line.
 *
 * Use whenever the savings reasoning involves more than one multiplication
 * step (e.g. unit cost × volume, or hours × rate, or per-item × items per year).
 *
 * Sub-Components: .Assumption, .Row, .Total, .Source.
 */

interface RoiCalculationProps {
  children: ReactNode;
  className?: string;
}

interface AssumptionProps {
  children: ReactNode;
}
export function RoiAssumption({ children }: AssumptionProps) {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        Annahme
      </div>
      <div className="mt-1 text-sm leading-relaxed text-gray-700 md:text-base">
        {children}
      </div>
    </div>
  );
}

interface RowProps {
  label: string;
  children: ReactNode;
  highlight?: boolean;
}
export function RoiRow({ label, children, highlight = false }: RowProps) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 px-6 py-2.5 text-sm md:text-base ${
        highlight ? "bg-secondary-50" : ""
      }`}
    >
      <div
        className={
          highlight ? "font-semibold text-gray-900" : "text-gray-700"
        }
      >
        {label}
      </div>
      <div
        className={`text-right tabular-nums ${
          highlight
            ? "font-bold text-primary-900"
            : "font-medium text-gray-900"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

interface TotalProps {
  label: string;
  children: ReactNode;
}
export function RoiTotal({ label, children }: TotalProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t-2 border-primary-700 bg-primary-50 px-6 py-4">
      <div className="text-base font-bold text-primary-900 md:text-lg">
        {label}
      </div>
      <div className="text-lg font-extrabold text-primary-900 tabular-nums md:text-2xl">
        {children}
      </div>
    </div>
  );
}

interface SourceProps {
  children: ReactNode;
}
export function RoiSource({ children }: SourceProps) {
  return (
    <div className="border-t border-gray-100 px-6 py-2 text-xs text-gray-500">
      {children}
    </div>
  );
}

export default function RoiCalculation({
  children,
  className = "",
}: RoiCalculationProps) {
  return (
    <div
      className={`overflow-hidden border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

RoiCalculation.Assumption = RoiAssumption;
RoiCalculation.Row = RoiRow;
RoiCalculation.Total = RoiTotal;
RoiCalculation.Source = RoiSource;
