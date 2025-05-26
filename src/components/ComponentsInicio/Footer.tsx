const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Información de la plataforma */}
          <div>
            <h3 className="text-lg font-bold mb-2">Nombre de la Plataforma</h3>
            <p className="text-sm text-gray-300">
              Plataforma para la gestión académica de estudiantes y docentes.
            </p>
          </div>
  
          {/* Navegación rápida */}
          <div>
            <h3 className="text-lg font-bold mb-2">Navegación</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#caracteristicas" className="hover:text-white">Características</a></li>
              <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
              <li><a href="#contacto" className="hover:text-white">Contáctanos</a></li>
            </ul>
          </div>
  
          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p className="text-sm text-gray-300">Correo: contacto@plataforma.com</p>
            <p className="text-sm text-gray-300">Teléfono: +57 300 123 4567</p>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Nombre de la Plataforma. Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  