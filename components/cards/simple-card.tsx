"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  JSX,
  ReactNode,
  Children,
  isValidElement,
  createContext,
  useContext,
} from "react";

interface Img {
  imageSrc: string;
  imageAlt: string;
  imgWidth: number;
  imgHeight: number;
}

type CardVariant = "default" | "danger" | "success";

// Context to pass variant to sub-components
const CardVariantContext = createContext<CardVariant>("default");

interface SimpleCardProps {
  img?: Img;
  style?: "dark" | "light";
  variant?: CardVariant;
  icon?: JSX.Element;
  children?: ReactNode;
  className?: string;
}

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: 0 },
  show: { opacity: 1, x: 0 },
};

const variantStyles = {
  default: {
    card: "bg-white border-primary-300",
    footer: "border-primary-200",
  },
  danger: {
    card: "bg-red-50 border-red-200",
    footer: "border-red-200",
  },
  success: {
    card: "bg-green-50 border-green-200",
    footer: "border-green-200",
  },
};

// Footer sub-component - exported for SSR compatibility
export function SimpleCardFooter({ children, className = "" }: FooterProps) {
  const variant = useContext(CardVariantContext);
  const footerBorderClass = variantStyles[variant].footer;

  return (
    <div
      className={`w-full mt-4 pt-4 pb-4 border-t ${footerBorderClass} ${className}`}
    >
      {children}
    </div>
  );
}

function SimpleCard({
  img,
  icon,
  children,
  style = "light",
  variant = "default",
  className = "",
}: SimpleCardProps) {
  const imgClass = img || icon ? "pt-8" : "";
  const styleClass = style === "dark" ? "border border-secondary" : "";
  const variantClass = variantStyles[variant].card;

  // Separate Footer from other children
  const childArray = Children.toArray(children);
  const footer = childArray.find(
    (child) => isValidElement(child) && child.type === SimpleCardFooter,
  );
  const otherChildren = childArray.filter(
    (child) => !(isValidElement(child) && child.type === SimpleCardFooter),
  );

  return (
    <CardVariantContext.Provider value={variant}>
      <div
        className={`rounded-lg border flex flex-col items-center text-center px-4 shadow-md ${variantClass} ${styleClass} ${imgClass} ${className}`}
      >
        {icon && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 1 }}
            className="mb-4"
            transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          >
            {icon}
          </motion.div>
        )}
        {img && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 1 }}
            className="mb-4"
            transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={img.imageSrc}
              alt={img.imageAlt}
              width={img.imgWidth}
              height={img.imgHeight}
            />
          </motion.div>
        )}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          className={footer ? "flex-1" : ""}
        >
          {otherChildren}
        </motion.div>
        {footer}
      </div>
    </CardVariantContext.Provider>
  );
}

// Attach sub-component for dot notation (client-side only)
SimpleCard.Footer = SimpleCardFooter;

export default SimpleCard;
