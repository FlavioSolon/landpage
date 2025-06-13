"use client";
import { useState, useEffect } from "react";
import { logos } from "@/data/logos"; // Importando os dados dos logos
import Image from "next/image";

export default function Logos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicar o array para criar o efeito infinito
  const doubledLogos = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === doubledLogos.length - 1) {
          // Volta ao início do segundo ciclo
          setCurrentIndex(logos.length); // Reinicia no primeiro item do segundo ciclo
          return logos.length; // Força a atualização imediata
        }
        return prevIndex + 1;
      });
    }, 3000); // Troca a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  const getTransformStyle = () => {
    const itemWidth = 180; // Aumentado para 156px + mx-6 (24px) * 2 = 204px, ajustado para 180px base
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
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="w-[160px] h-32 flex items-center justify-center bg-white shadow-md rounded-full mx-6 md:mx-8 lg:mx-10" // Margem aumentada e responsiva
            >
              <Image
                src={logo.imageSrc}
                alt={`${logo.title} Logo`}
                width={140} // Ajustado para maior espaço interno
                height={140} // Ajustado para maior espaço interno
                className="object-cover rounded-full"
                style={{ width: "auto", height: "auto" }} // Mantém proporção
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}