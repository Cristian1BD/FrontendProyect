import { useEffect, useState } from 'react';
import {
  obtenerEstudiantes,
  eliminarEstudiante,
} from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteService';
import { type EstudianteTypes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';

const EliminarEstudiante: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<EstudianteTypes[]>([]);
  const [todosEstudiantes, setTodosEstudiantes] = useState<EstudianteTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerEstudiantes()
      .then(data => {
        setTodosEstudiantes(data);
        setResultados(data);
      })
      .catch(err => {
        console.error(err);
        setError('Error al cargar estudiantes');
      });
  }, []);

  const handleBuscar = () => {
    const filtrados = todosEstudiantes.filter(est =>
      est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      est.numeroDocumento.includes(busqueda)
    );
    setResultados(filtrados);
  };

  const handleEliminar = async (id: number) => {
    const confirmado = window.confirm(`¿Seguro que deseas eliminar el estudiante con ID ${id}?`);
    if (!confirmado) return;

    try {
      await eliminarEstudiante(id);
      alert(`✅ Estudiante ID ${id} eliminado correctamente`);
      console.log(`Estudiante eliminado: ${id}`);
      const nuevosEstudiantes = todosEstudiantes.filter(est => est.id !== id);
      setTodosEstudiantes(nuevosEstudiantes);
      setResultados(nuevosEstudiantes);
    } catch (error) {
      alert('❌ Error al eliminar el estudiante');
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-4xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
        Eliminar Estudiante
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

      {resultados.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          No hay estudiantes encontrados.
        </p>
      ) : (
        <div className="space-y-4">
          {resultados.map(est => (
            <div
              key={est.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
            >
              <div className="text-gray-800">
                <span className="font-medium">{est.nombre}</span>{' '}
                <span className="text-sm text-gray-500">({est.numeroDocumento})</span>
              </div>
              <button
                onClick={() => handleEliminar(est.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EliminarEstudiante;
