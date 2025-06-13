"use client";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Título Principal */}
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-black tracking-wide">
          Sobre Nós
        </h3>

        {/* Subtítulo e Introdução */}
        <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-red-600 bg-gradient-to-r from-red-600 to-transparent bg-clip-text">
          Fuel Head – Mais do Que Uma Marca, Um Movimento
        </h4>
        <p className="text-lg md:text-xl mb-6 text-gray-800 max-w-3xl mx-auto leading-relaxed">
          A Fuel Head nasceu em Novembro de 2024, movida por uma paixão intensa pela estrada, pelos motores e pela liberdade que se vive atrás do volante ou do guiador. Tudo começou com a inspiração de um vídeo onde apareciam Tiago da C2R Automotive e Sérgio do DL 2.0 - dois nomes que nos fizeram perceber que estávamos no caminho certo. Mas foi com o apoio verdadeiro e incondicional do Pai do fundador que esta ideia ganhou forma, força e identidade.
        </p>

        {/* História e Detalhes */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
            Desde o nome ao logotipo, da ideia ao conceito, tudo foi pensado ao detalhe. Na Fuel Head, não vendemos apenas roupa - criamos atitude, representamos um estilo de vida. Cada peça é mais do que um tecido com estampado. É uma declaração de quem vive sem limites, com personalidade forte e coração acelerado.
          </p>
          {isExpanded && (
            <p className="text-lg md:text-xl mt-4 text-gray-700 leading-relaxed">
              As nossas criações são exclusivas e limitadas, feitas para quem não se conforma com o comum. Para quem sente que a estrada é mais do que um percurso – é um lugar onde se respira liberdade. Todas as artes são originais, desenvolvidas com alma, e pensadas para representar os que vivem com garra, que aceleram no peito e têm gasolina no sangue.
            </p>
          )}
          <button
            onClick={toggleExpand}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {isExpanded ? "Mostrar Menos" : "Ler Mais..."}
          </button>
        </div>

        {/* Slogan Final */}
        <p className="text-2xl md:text-3xl font-bold mb-6 text-red-600 bg-gradient-to-r from-red-600 to-transparent bg-clip-text">
          Somos Combustão. Somos Rua. Somos Movimento.
        </p>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          A Fuel Head é mais do que vestir algo bonito - é vestir quem tu és. Se partilhas esta atitude, esta energia e esta paixão pelas rodas e pelo estilo de vida fora do comum… então já fazes parte da nossa família. <strong className="text-red-600">Fuel Head - Powered by Passion, Driven by Attitude!</strong>
        </p>
      </div>
    </section>
  );
}