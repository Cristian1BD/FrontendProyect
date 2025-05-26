import { ShieldCheck, Star, Rocket } from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: "Plataforma Segura",
    description: "Protegemos tus datos con altos estándares de seguridad.",
  },
  {
    icon: <Star size={32} className="text-yellow-500" />,
    title: "Fácil de Usar",
    description: "Diseño intuitivo para facilitar la navegación del usuario.",
  },
  {
    icon: <Rocket size={32} className="text-red-500" />,
    title: "Rendimiento Óptimo",
    description: "Carga rápida y sin interrupciones en todos los dispositivos.",
  },
];

const InicioCaracteristicas = () => {
  return (
    <section id="caracteristicas" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Por qué elegir esta plataforma?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InicioCaracteristicas;
