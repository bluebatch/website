import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
  align?: "left" | "center" | "right";
  size?: "full" | "half" | "lg" | "md" | "sm";
  border?: boolean;
  width?: number;
  height?: number;
};

const sizeClasses = {
  full: "w-full",
  half: "w-1/2",
  lg: "w-4/5 max-w-4xl",
  md: "w-3/4 max-w-3xl",
  sm: "w-1/2 max-w-2xl",
};

const alignClasses = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export default function BlogImage({
  src,
  alt,
  caption,
  align = "center",
  size = "full",
  border = false,
  width = 1200,
  height = 800,
}: BlogImageProps) {
  const figureClasses = `my-6 ${sizeClasses[size]} ${alignClasses[align]} ${
    align === "left" ? "mr-6" : ""
  } ${align === "right" ? "ml-6" : ""}`.trim();

  const imageClasses = `rounded-lg ${
    border ? "shadow-lg border border-gray-200" : ""
  }`.trim();

  return (
    <figure className={figureClasses}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 italic text-center mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
