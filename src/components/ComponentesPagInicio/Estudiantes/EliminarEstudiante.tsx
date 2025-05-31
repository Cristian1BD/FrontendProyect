import { useEffect, useState } from 'react';
import { obtenerEstudiantes, eliminarEstudiante } from '../../../services/Paginainicio/PagServiceEstudiantes/estudianteService';
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
    if (!window.confirm(`¿Seguro que deseas eliminar el estudiante con ID ${id}?`)) return;

    try {
      await eliminarEstudiante(id);
      alert(`✅ Estudiante ID ${id} eliminado correctamente`);
      console.log(`Estudiante eliminado: ${id}`);
      // Actualiza la lista
      const nuevosEstudiantes = todosEstudiantes.filter(est => est.id !== id);
      setTodosEstudiantes(nuevosEstudiantes);
      setResultados(nuevosEstudiantes);
    } catch (error) {
      alert('❌ Error al eliminar el estudiante');
      console.error(error);
    }
  };

  return (
    <div className="p-4 border rounded max-w-3xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Eliminar Estudiante</h2>
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
      {resultados.length === 0 ? (
        <p className="text-gray-600">No hay estudiantes encontrados.</p>
      ) : (
        resultados.map(est => (
          <div key={est.id} className="flex justify-between items-center border-b py-2">
            <span>{est.nombre} ({est.numeroDocumento})</span>
            <button
              onClick={() => handleEliminar(est.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default EliminarEstudiante;
