import { useState } from "react";

interface NavbarProps {
  onChangeTab: (tab: string) => void;
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeTab, activeTab }) => {
  const [showLang, setShowLang] = useState(false);

  const navItems = [
    { label: "Inicio", target: "#inicio" },
    { label: "Características", target: "#caracteristicas" },
    { label: "Beneficios", target: "#beneficios" },
  ];

  return (
    <div className="fixed w-full h-16 bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Navegación izquierda */}
        <div className="flex items-center space-x-4 bg-gray-100 rounded-md p-2 relative">
          {navItems.map(({ label, target }) => {
            const key = label.toLowerCase();
            const isActive = activeTab === key;

            return (
              <a
                key={key}
                href={target}
                onClick={() => onChangeTab(key)}
                className={`text-sm px-3 py-1 rounded-md font-medium transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-white hover:text-black"
                }`}
              >
                {label}
              </a>
            );
          })}

          {/* Menú de idioma */}
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="text-sm px-3 py-1 rounded-md font-medium transition text-gray-700 hover:bg-white hover:text-black"
            >
              🌐 Idioma
            </button>
            {showLang && (
              <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-md z-20">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  🇪🇸 Español
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  🇺🇸 Inglés
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  🇫🇷 Francés
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Botones derecha */}
        <div className="flex items-center space-x-3">
          <a href="/Formulario">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              Soy Estudiante
            </button>
          </a>
          <a href="/login">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              Inicio de sesión
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

