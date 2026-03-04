import { ReactNode } from "react";

interface DataTableProps {
  children: ReactNode;
  compact?: boolean;
  className?: string;
}

function DataTable({ children, compact = false, className = "" }: DataTableProps) {
  return (
    <div className={`overflow-x-auto rounded-lg shadow-sm ${className}`}>
      <table
        className={`w-full border-collapse bg-white ${compact ? "text-xs" : "text-sm"}`}
      >
        {children}
      </table>
    </div>
  );
}

function Head({ children }: { children: ReactNode }) {
  return <thead>{children}</thead>;
}

function Body({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

interface RowProps {
  children: ReactNode;
  className?: string;
}

function Row({ children, className = "" }: RowProps) {
  return <tr className={`even:bg-gray-50 ${className}`}>{children}</tr>;
}

interface HeaderCellProps {
  children: ReactNode;
  className?: string;
}

function HeaderCell({ children, className = "" }: HeaderCellProps) {
  return (
    <th
      className={`px-5 py-4 text-left font-semibold bg-primary-800 text-white ${className}`}
    >
      {children}
    </th>
  );
}

interface CellProps {
  children: ReactNode;
  bold?: boolean;
  className?: string;
}

function Cell({ children, bold = false, className = "" }: CellProps) {
  return (
    <td
      className={`px-5 py-3 text-gray-700 ${bold ? "font-semibold text-gray-900" : ""} ${className}`}
    >
      {children}
    </td>
  );
}

DataTable.Head = Head;
DataTable.Body = Body;
DataTable.Row = Row;
DataTable.HeaderCell = HeaderCell;
DataTable.Cell = Cell;

export default DataTable;
