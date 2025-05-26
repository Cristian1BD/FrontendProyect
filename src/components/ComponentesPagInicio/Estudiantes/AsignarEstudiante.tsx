import { useState } from 'react';

interface Estudiante {
  id: number;
  nombre: string;
  documento: string;
  grupo?: string;
}

const estudiantesMock: Estudiante[] = [
  { id: 1, nombre: 'Juan Pérez', documento: '123456' },
  { id: 2, nombre: 'Ana Gómez', documento: '789012' },
];

const AsignarEstudiante: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<Estudiante[]>([]);
  const [grupo, setGrupo] = useState('');

  const handleBuscar = () => {
    const filtrados = estudiantesMock.filter(est =>
      est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      est.documento.includes(busqueda)
    );
    setResultados(filtrados);
  };

  const handleAsignar = (id: number) => {
    alert(`Estudiante ID ${id} asignado al grupo ${grupo}`);
  };

  return (
    <div className="p-4 border rounded max-w-3xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Asignar Estudiante a Grupo</h2>
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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Grupo a asignar"
          value={grupo}
          onChange={(e) => setGrupo(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      {resultados.map(est => (
        <div key={est.id} className="flex justify-between items-center border-b py-2">
          <span>{est.nombre} ({est.documento})</span>
          <button
            onClick={() => handleAsignar(est.id)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Asignar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AsignarEstudiante;
