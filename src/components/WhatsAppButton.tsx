"use client";
import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    // Garante que o botão esteja visível apenas após o carregamento
    const button = document.querySelector(".whatsapp-button");
    if (button) button.classList.add("opacity-100");
  }, []);

  return (
    <a
      href="https://wa.me/351917356630" // Link para o WhatsApp com o número formatado
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 opacity-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12.002 2C6.477 2 2 6.477 2 12c0 2.137.698 4.105 1.88 5.71l-1.795 5.29c-.12.354.086.722.406.828a.75.75 0 0 0 .822-.1l5.29-1.795A9.96 9.96 0 0 0 12.002 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3.5-9.5c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-7zm3.5 3c-.276 0-.5.224-.5.5s.224.5.5.5h3.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3.5z" />
      </svg>
    </a>
  );
}