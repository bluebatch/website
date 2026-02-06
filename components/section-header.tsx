import ContactButton from "@/components/buttons/contact-button";

interface SectionHeaderProps {
  smallHeadline: string;
  largeHeadline: string;
  description: string;
  subtext?: string;
  showButton?: boolean;
  align?: "left" | "center";
}

export default function SectionHeader({
  smallHeadline,
  largeHeadline,
  description,
  subtext,
  showButton = true,
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const containerClasses = align === "center" ? "max-w-5xl mx-auto" : "max-w-full";

  return (
    <div className={`${alignmentClasses} ${containerClasses}`}>
      {/* Small Headline with Gradient */}
      <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 uppercase tracking-wide">
        {smallHeadline}
      </h3>

      {/* Large Headline with Gradient */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
        {largeHeadline}
      </h1>

      {/* Description Text */}
      <p className={`text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed ${align === "center" ? "max-w-4xl mx-auto" : ""}`}>
        {description}
      </p>

      {/* Sales Button */}
      {showButton && (
        <div className="mb-4">
          <ContactButton icon="chat">Talk to Sales</ContactButton>
        </div>
      )}

      {/* Optional Subtext */}
      {subtext && (
        <p className="text-xs md:text-sm text-gray-500 mt-4">
          {subtext}
        </p>
      )}
    </div>
  );
}
