export default function FAQ() {
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

  return (
    <section id="faq" className="py-12 bg-white">
      <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
      <div className="container mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}