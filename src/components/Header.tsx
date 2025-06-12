export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fuel Head</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#sobre" className="hover:text-red-600">Sobre Nós</a></li>
            <li><a href="#categorias" className="hover:text-red-600">Categorias</a></li>
            <li><a href="#faq" className="hover:text-red-600">FAQ</a></li>
            <li><a href="#contacto" className="hover:text-red-600">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}