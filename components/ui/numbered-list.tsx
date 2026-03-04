import { ReactNode, Children, isValidElement, cloneElement } from "react";

interface NumberedListProps {
  children: ReactNode;
  className?: string;
}

function NumberedList({ children, className = "" }: NumberedListProps) {
  const items = Children.toArray(children);
  let counter = 0;

  const numberedItems = items.map((child) => {
    if (isValidElement(child) && child.type === Item) {
      counter++;
      return cloneElement(child as React.ReactElement<ItemProps>, {
        number: counter,
      });
    }
    return child;
  });

  return (
    <ul className={`space-y-3 text-gray-700 text-sm list-none ${className}`}>
      {numberedItems}
    </ul>
  );
}

interface ItemProps {
  title: string;
  children: ReactNode;
  number?: number;
}

function Item({ title, children, number }: ItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-primary-600 font-bold mt-0.5 shrink-0">
        {number}.
      </span>
      <span>
        <strong>{title}</strong> {children}
      </span>
    </li>
  );
}

NumberedList.Item = Item;

export default NumberedList;
