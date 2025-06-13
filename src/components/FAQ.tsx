"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ: React.FC = () => {
  const faqs = [
    { question: "Os vossos produtos são todos feitos em Portugal?", answer: "Sim! Orgulhamo-nos de dizer que a maioria dos nossos produtos é produzida em Portugal, com materiais de qualidade e atenção ao detalhe." },
    { question: "Como escolho o tamanho certo para mim?", answer: "Cada produto tem uma tabela de tamanhos disponível na descrição. Se estiveres entre dois tamanhos, escolhe o maior para conforto." },
    { question: "Quanto tempo demora a entrega?", answer: "Enviamos entre 2 a 4 dias úteis após pagamento. Entrega em Portugal Continental em 24-48h; ilhas podem demorar mais." },
    { question: "Fazem envios para fora de Portugal?", answer: "Sim! Enviamos para vários países da Europa. Verifica a política de envio no site ou contacta-nos." },
    { question: "Os produtos Fuel Head são unissexo?", answer: "Grande parte da coleção é unissexo. Cortes específicos serão assinalados." },
    { question: "Posso personalizar uma box Fuel Head?", answer: "Sim! As Fuel Boxe são personalizáveis com t-shirt, sweatshirt, chapéu, porta-chaves, autocolantes e ambientador." },
    { question: "Têm loja física ou é só online?", answer: "Neste momento, somos online e em eventos. Fica atento a novidades!" },
    { question: "Como sei de novos produtos?", answer: "Segue-nos no Instagram ou subscreve a newsletter para novidades e promoções." },
    { question: "Os vossos produtos têm edições limitadas?", answer: "Sim! Muitas peças são limitadas, garantindo exclusividade." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-black">Perguntas Frequentes</h3>
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                layout // Habilita animações de layout para fluidez
                initial={false}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <h4 className="text-base font-medium text-black">{faq.question}</h4>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <FiMinus size={18} color="#ff0000" /> : <FiPlus size={18} color="#ff0000" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} // Curva de easing personalizada
                      className="px-4 pb-4 text-gray-600 overflow-hidden"
                      style={{ maxHeight: isOpen ? "200px" : "0" }} // Altura máxima estimada
                    >
                      <p className="text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;