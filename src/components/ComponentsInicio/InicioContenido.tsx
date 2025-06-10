import { useEffect } from "react";

const InicioContenido = () => {
  // Scroll suave nativo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* Sección principal con imagen de fondo */}
      <section
        id="hero"
        className="h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white pt-16 -mt-16"
        style={{
          backgroundImage: "url('public/ImagenPortada.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <h1 className="text-5xl md:text-6xl font-bold text-center drop-shadow-lg">
          Educamp
        </h1>
        <a
          href="#contenido"
          className="mt-8 px-6 py-3 bg-blue-600 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Ver más
        </a>
      </section>

      {/* Contenido inferior */}
      <section id="contenido" className="py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">¿Qué es esta plataforma?</h2>
          <p className="text-lg leading-relaxed">
            Es una Plataforma para la gestión y organización de salidas pedagógicas,
            abierta a todas las instituciones educativas sin importar nivel o tipo.
            Centraliza la planificación, registro, autorización y seguimiento de actividades educativas fuera del aula,
            promoviendo experiencias formativas seguras, accesibles y enriquecedoras para estudiantes, docentes y organizadores.
          </p>
        </div>
      </section>
    </>
  );
};

export default InicioContenido;
