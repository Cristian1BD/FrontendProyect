import { useState, useEffect } from 'react';
import { type EstudianteTypes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';
import { obtenerEstudiantes } from '../../../services/Paginainicio/PagServiceEstudiantes/estudianteService';

const VerEstudiante: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [estudiantes, setEstudiantes] = useState<EstudianteTypes[]>([]);
  const [resultados, setResultados] = useState<EstudianteTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerEstudiantes()
      .then(data => {
        setEstudiantes(data);
        setResultados(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const handleBuscar = () => {
    const filtrados = estudiantes.filter(est =>
      est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      est.numeroDocumento.includes(busqueda)
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
      {error && <p className="text-red-600">{error}</p>}
      {resultados.length > 0 ? (
        <ul className="list-disc pl-6">
          {resultados.map((est) => (
            <li key={est.id}>
              <strong>{est.nombre}</strong> — Documento: {est.numeroDocumento} — Grupo: {est.grupo}
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
