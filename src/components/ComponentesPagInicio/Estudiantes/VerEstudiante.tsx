import { useState, useEffect } from 'react';
import { type EstudianteTypes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';
import { obtenerEstudiantes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteService';

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
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-4xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Ver Estudiantes
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre o documento"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleBuscar}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Buscar
        </button>
      </div>

      {error && (
        <p className="text-red-600 font-medium text-center mb-4">{error}</p>
      )}

      {resultados.length > 0 ? (
        <ul className="space-y-3">
          {resultados.map((est) => (
            <li
              key={est.id}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
            >
              <p className="text-lg font-semibold text-gray-800">
                {est.nombre}
              </p>
              <p className="text-sm text-gray-600">
                Documento: <span className="font-medium">{est.numeroDocumento}</span>
              </p>
              <p className="text-sm text-gray-600">
                Grupo:{' '}
                <span className="font-medium">
                  {est.grupo ? est.grupo.nombre : 'Sin grupo'}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic text-center">No hay resultados.</p>
      )}
    </div>
  );
};

export default VerEstudiante;
