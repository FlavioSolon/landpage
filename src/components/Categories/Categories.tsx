"use client";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import CategorySection from "../Categories/CategorySection";

const Categories: React.FC = () => {
  return (
    <div id="categorias" className="py-12 bg-white">
      <h2 className="sr-only">Categorias</h2>
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          category={category}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Categories;