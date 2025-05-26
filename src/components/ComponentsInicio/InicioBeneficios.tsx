import { FaRocket, FaUsers, FaShieldAlt, FaCogs } from "react-icons/fa";

const beneficios = [
  {
    icon: <FaRocket size={32} className="text-blue-600" />,
    titulo: "Plataforma Ágil",
    descripcion: "Navegación rápida y sin complicaciones desde cualquier dispositivo.",
  },
  {
    icon: <FaUsers size={32} className="text-blue-600" />,
    titulo: "Enfoque Estudiantil",
    descripcion: "Diseñada pensando en la experiencia del estudiante.",
  },
  {
    icon: <FaShieldAlt size={32} className="text-blue-600" />,
    titulo: "Seguridad de Datos",
    descripcion: "Tu información está protegida bajo altos estándares de seguridad.",
  },
  {
    icon: <FaCogs size={32} className="text-blue-600" />,
    titulo: "Automatización",
    descripcion: "Procesos optimizados que reducen el trabajo manual.",
  },
];

const InicioBeneficios = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">¿Por qué elegir nuestra plataforma?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InicioBeneficios;
