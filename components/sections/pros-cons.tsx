import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
} from "react";

interface ProsConsProps {
  children: ReactNode;
  className?: string;
}

function ProsCons({ children, className = "" }: ProsConsProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}

function Pros({ children }: { children: ReactNode }) {
  const childrenWithSide = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Item) {
      return cloneElement(child as ReactElement<any>, { side: "pros" } as any);
    }
    return child;
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="size-6 text-green-600 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-green-800">Stärken</h3>
      </div>
      <div className="space-y-4">{childrenWithSide}</div>
    </div>
  );
}

function Cons({ children }: { children: ReactNode }) {
  const childrenWithSide = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Item) {
      return cloneElement(child as ReactElement<any>, { side: "cons" } as any);
    }
    return child;
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="size-6 text-red-600 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <h3 className="text-xl font-bold text-red-800">
          Probleme &amp; Grenzen
        </h3>
      </div>
      <div className="space-y-4">{childrenWithSide}</div>
    </div>
  );
}

interface ItemProps {
  title: string;
  description: string;
  side?: "pros" | "cons";
}

function Item({ title, description, side = "pros" }: ItemProps) {
  const isPros = side === "pros";

  return (
    <div
      className={`border-l-4 bg-white rounded-r-lg p-5 shadow-sm ${
        isPros ? "border-l-green-500" : "border-l-red-500"
      }`}
    >
      <h4
        className={`font-semibold mb-2 ${
          isPros ? "text-green-800" : "text-red-800"
        }`}
      >
        {title}
      </h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

ProsCons.Pros = Pros;
ProsCons.Cons = Cons;
ProsCons.Item = Item;

export default ProsCons;
