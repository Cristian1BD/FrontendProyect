import { useState } from 'react';

interface Estudiante {
  id: number;
  nombre: string;
  documento: string;
  grupo?: string;
}

const estudiantesMock: Estudiante[] = [
  { id: 1, nombre: 'Juan Pérez', documento: '123456', grupo: 'FIG-112' },
  { id: 2, nombre: 'Ana Gómez', documento: '789012', grupo: 'FIG-113' },
];

const VerEstudiante: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<Estudiante[]>([]);

  const handleBuscar = () => {
    const filtrados = estudiantesMock.filter(est =>
      est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      est.documento.includes(busqueda)
    );
    setResultados(filtrados);
  };

  return (
    <div className="p-4 border rounded max-w-3xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Ver Estudiante</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nombre o documento"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleBuscar}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>
      {resultados.length > 0 ? (
        <ul className="list-disc pl-6">
          {resultados.map((est) => (
            <li key={est.id}>
              <strong>{est.nombre}</strong> — Documento: {est.documento} — Grupo: {est.grupo}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No hay resultados.</p>
      )}
    </div>
  );
};

export default VerEstudiante;