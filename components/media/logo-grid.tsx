import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  scale?: "xs" | "sm" | "md" | "lg";
}

interface LogoGridProps {
  logos: Logo[];
  className?: string;
}

export default function LogoGrid({ logos, className = "" }: LogoGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-5 ${className}`}>
      {logos.map((logo, index) => {
        // Desktop (5 cols): first row has bottom border, all except last in row have right border
        const desktopFirstRow = index < 5;
        const desktopLastInRow = (index + 1) % 5 === 0;

        // Mobile (2 cols): all except last row have bottom border, first in pair has right border
        const mobileLastRow = index >= logos.length - 2;
        const mobileLastInRow = index % 2 === 1;

        const borderClasses = [
          "border-gray-200",
          // Mobile borders
          !mobileLastRow ? "border-b" : "",
          !mobileLastInRow ? "border-r" : "",
          // Desktop overrides
          desktopFirstRow ? "md:border-b" : "md:border-b-0",
          !desktopLastInRow ? "md:border-r" : "md:border-r-0",
        ].join(" ");

        const scaleClasses = {
          xs: "h-6",
          sm: "h-8",
          md: "h-10",
          lg: "h-12",
        };
        const logoScale = scaleClasses[logo.scale || "lg"];

        return (
          <div
            key={index}
            className={`flex items-center justify-center py-8 px-4 ${borderClasses}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 60}
              className={`${logoScale} w-auto object-contain`}
            />
          </div>
        );
      })}
    </div>
  );
}
