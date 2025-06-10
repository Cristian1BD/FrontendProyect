import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  onChangeTab: (tab: string) => void;
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeTab, activeTab }) => {
  const [showLang, setShowLang] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "inicio", label: t("nav.home"), target: "#inicio" },
    { key: "caracteristicas", label: t("nav.features"), target: "#caracteristicas" },
    { key: "beneficios", label: t("nav.benefits"), target: "#beneficios" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLang(false);
  };

  return (
    <div className="fixed w-full h-16 bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Navegación izquierda */}
        <div className="flex items-center space-x-4 bg-gray-100 rounded-md p-2 relative">
          {navItems.map(({ label, target, key }) => {
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
              🌐 {t("nav.language")}
            </button>
            {showLang && (
              <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-md z-20">
                <button
                  onClick={() => changeLanguage("es")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇪🇸 Español
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🇫🇷 Français
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Botones derecha */}
        <div className="flex items-center space-x-3">
          <a href="/Formulario">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              {t("nav.student")}
            </button>
          </a>
          <a href="/login">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
              {t("nav.login")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
