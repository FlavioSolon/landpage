"use client";
import { useState, useEffect } from "react";
import { logos } from "@/data/logos"; // Importando os dados dos logos
import Image from "next/image";

export default function Logos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []); // Removido 'logos.length' da dependência

  const getTransformStyle = () => {
    const itemWidth = 156; // Largura ajustada: 128px + 28px (mx-3 * 2)
    const offset = -(currentIndex * itemWidth); // Deslocamento baseado no índice
    return { transform: `translateX(${offset}px)` };
  };

  return (
    <section className="py-12 text-center">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={getTransformStyle()}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[140px] h-32 flex items-center justify-center bg-white shadow-md rounded-full mx-3"
            >
              <Image
                src={logo.imageSrc}
                alt={`${logo.title} Logo`}
                width={120} // Ajuste para o tamanho real
                height={120} // Ajuste para o tamanho real
                className="object-cover rounded-full"
                style={{ width: "auto", height: "auto" }} // Mantém proporção
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {logos.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}