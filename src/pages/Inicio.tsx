import { useState } from "react"; 
import Navbar from "../components/ComponentsInicio/Navbar";

import InicioContenido from "../components/ComponentsInicio/InicioContenido";
import InicioCaracteristicas from "../components/ComponentsInicio/InicioCaracteristicas";
import InicioBeneficios from "../components/ComponentsInicio/InicioBeneficios";
import Footer from "../components/ComponentsInicio/Footer";

const Inicio = () => {
  const [tab, setTab] = useState("inicio");

  const renderContent = () => {
    switch (tab) {
      case "idioma":
        return <div>Contenido de Idioma</div>;
    }
  };

  return (
    <div>
      <Navbar onChangeTab={setTab} activeTab={tab} />
      <section id="inicio">{/* Imagen de portada */}</section>
      <div className="pt-20 px-6">{renderContent()}</div>
      <InicioContenido/>
      <InicioCaracteristicas />
      <InicioBeneficios />
      <Footer />
    </div>
  );
};

export default Inicio;