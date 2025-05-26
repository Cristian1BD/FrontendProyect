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
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white pt-16 -mt-16"
                style={{ backgroundImage: "url('museo-antioquia-head.jpg')" }} // nota: "public/" NO se incluye en el path
            >
                <h1 className="text-5xl md:text-6xl font-bold text-center drop-shadow-lg">
                    Nombre de tu Plataforma
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
                        Esta plataforma está diseñada para ayudarte a gestionar estudiantes, programaciones,
                        soporte y más. Explora nuestras funciones y conoce cómo simplificamos tu gestión educativa.
                    </p>
                </div>
            </section>
        </>
    );
};

export default InicioContenido;
