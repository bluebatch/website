interface VariantSeparatorProps {
  label: string;
}

export default function VariantSeparator({ label }: VariantSeparatorProps) {
  return (
    <div className="bg-red-600 text-white text-center py-4 my-0">
      <p className="text-2xl font-black tracking-widest uppercase">{label}</p>
    </div>
  );
}
