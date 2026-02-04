import Link from "next/link";

interface SalesButtonProps {
  className?: string;
}

export default function SalesButton({ className = "" }: SalesButtonProps) {
  return (
    <Link
      href="/contact"
      className={`inline-block px-8 py-4 bg-gradient-to-r from-secondary-600 to-primary-600 text-white rounded-lg font-semibold hover:from-secondary-700 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl ${className}`}
    >
      Talk to Sales
    </Link>
  );
}
