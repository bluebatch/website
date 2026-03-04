import { ReactNode } from "react";

interface IndustryFitProps {
  children: ReactNode;
  className?: string;
}

function IndustryFit({ children, className = "" }: IndustryFitProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}

function Good({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="text-lg font-bold text-green-800 mb-6">
        Gut geeignet für
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Poor({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="text-lg font-bold text-red-800 mb-6">
        Weniger geeignet für
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

interface ItemProps {
  title: string;
  children: ReactNode;
}

function GoodItem({ title, children }: ItemProps) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 size-2.5 rounded-full bg-green-500 shrink-0" />
      <div>
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <p className="text-gray-600 text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}

function PoorItem({ title, children }: ItemProps) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 size-2.5 rounded-full bg-red-500 shrink-0" />
      <div>
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <p className="text-gray-600 text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}

// Unified Item that can be used in both Good and Poor sections
function Item({ title, children }: ItemProps) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 size-2.5 rounded-full bg-current shrink-0 opacity-60" />
      <div>
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <p className="text-gray-600 text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}

export default Object.assign(IndustryFit, {
  Good,
  Poor,
  Item,
  GoodItem,
  PoorItem,
});
