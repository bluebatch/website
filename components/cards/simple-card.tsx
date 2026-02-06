"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";
import Typo from "../typo";

interface Img {
  imageSrc: string;
  imageAlt: string;
  imgWidth: number;
  imgHeight: number;
}

interface SimpleCardProps {
  img?: Img;
  style?: "dark" | "light";
  icon?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
}

const itemVariants = {
  hidden: { opacity: 0, x: 0 },
  show: { opacity: 1, x: 0 },
};

export default function SimpleCard({
  img,
  icon,
  children,
  style = "light",
}: SimpleCardProps) {
  const imgClass = img || icon ? "pt-8" : "";
  const styleClass = style === "dark" ? "border border-secondary" : "bg-white";
  return (
    <div
      className={`border border-primary-300 flex flex-col items-center text-center px-4 shadow-md ${styleClass} ${
        imgClass
      }`}
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
      >
        {children}
      </motion.div>
    </div>
  );
}
