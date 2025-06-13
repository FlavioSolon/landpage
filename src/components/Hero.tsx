"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Importando o componente Image
import { fundo } from "@/data/hero"; // Importando os dados do hero

const Hero: React.FC = () => {
  // Pegando o primeiro item do array (assumindo que só há um por enquanto)
  const heroData = fundo[0];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagem como fundo usando <Image> */}
      <Image
        src={heroData.imageSrc} // Usando o imageSrc do array
        alt={heroData.title}
        fill // Ocupa o contêiner pai
        className="object-cover"
        quality={100}
        priority // Carrega imediatamente para melhor experiência
      />
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
            Fuel Head - Powered by Passion
          </h2>
          <p className="text-xl md:text-2xl mb-6 text-white font-light max-w-2xl mx-auto">
            Mais do que uma marca, um movimento. Vestuário exclusivo para quem vive com gasolina no sangue.
          </p>
          <motion.a
            href="#categorias"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Coleções
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;