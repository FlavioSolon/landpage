"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Altera após rolar 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Forçar renderização inicial do menu ao clicar
  useEffect(() => {
    if (isMenuOpen && !isScrolled) {
      setIsMenuOpen(true); // Garante que o menu abra no topo
    }
  }, [isMenuOpen, isScrolled]);

  return (
    <header
      className={`${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      } ${
        isScrolled ? "text-white" : "text-black"
      } p-4 fixed w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 h-12">
          <Image
            src="/images/logo_site"
            alt="Fuel Head Logo"
            width={128} // Use o tamanho real da imagem
            height={48} // Use o tamanho real da imagem
            className="object-contain"
            style={{ width: "auto", height: "auto" }} // Opcional, se CSS alterar
          />
        </div>
        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="#sobre" className="hover:text-red-600 text-lg font-semibold transition-colors duration-300">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#categorias" className="hover:text-red-600 text-lg font-semibold transition-colors duration-300">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-red-600 text-lg font-semibold transition-colors duration-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-red-600 text-lg font-semibold transition-colors duration-300">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        {/* Botão Hamburguer para Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl focus:outline-none ${isScrolled ? "text-white" : "text-black"}`}
          >
            ☰
          </button>
        </div>
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-black/90 p-4 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4 text-white"> {/* Texto fixo em branco */}
              <li>
                <Link href="#sobre" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#categorias" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}