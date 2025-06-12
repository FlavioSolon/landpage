import { motion } from "framer-motion";
import { ICategoryBullet } from "@/types";

const CategoryBullet: React.FC<ICategoryBullet> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-4"
      variants={{
        offscreen: { opacity: 0, x: -20 },
        onscreen: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-black">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default CategoryBullet;