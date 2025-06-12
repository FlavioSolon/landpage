"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import CategoryBullet from "../Categories/CategoryBullet";
import { ICategory } from "@/types";

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const CategorySection: React.FC<{ category: ICategory; imageAtRight?: boolean }> = ({
  category,
  imageAtRight,
}) => {
  const { title, description, bullets, imageSrc } = category;

  return (
    <section className="container mx-auto mb-24">
      <motion.div
        className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-20"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx("flex-1 text-center lg:text-left", {
            "order-2": imageAtRight,
          })}
        >
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
          </motion.div>
          <motion.div variants={childVariants}>
            {bullets.map((bullet, index) => (
              <CategoryBullet key={index} {...bullet} />
            ))}
          </motion.div>
        </div>
        <motion.div
          className={clsx("flex-1", {
            "order-1": imageAtRight,
          })}
          variants={childVariants}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={384}
            height={384} // Ajustado para proporção quadrada, ajuste conforme necessário
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategorySection;