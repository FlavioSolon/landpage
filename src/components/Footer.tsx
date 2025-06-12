export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2025 Fuel Head - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4">
          <a href="#contacto" className="hover:text-red-600">Contacto</a>
          <a href="#politica" className="hover:text-red-600">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}