import { useEffect, useState } from 'react';
import {
  asignarGrupo,
  obtenerEstudiantes,
  obtenerGrupos,
} from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteService';
import {
  type EstudianteTypes,
  type GrupoType,
} from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';

const AsignarEstudiante: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<EstudianteTypes[]>([]);
  const [todosEstudiantes, setTodosEstudiantes] = useState<EstudianteTypes[]>([]);
  const [grupos, setGrupos] = useState<GrupoType[]>([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState<number | ''>('');

  useEffect(() => {
    obtenerEstudiantes().then(setTodosEstudiantes).catch(console.error);
    obtenerGrupos().then(setGrupos).catch(console.error);
  }, []);

  const handleBuscar = () => {
    const filtrados = todosEstudiantes.filter(est =>
      est.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      est.numeroDocumento.includes(busqueda)
    );
    setResultados(filtrados);
  };

  const handleAsignar = async (id: number) => {
    if (!grupoSeleccionado) return alert('Selecciona un grupo válido');
    try {
      await asignarGrupo(id, Number(grupoSeleccionado));
      alert(`✅ Estudiante ID ${id} asignado al grupo ${grupoSeleccionado}`);
      console.log(`Estudiante ${id} -> grupo ${grupoSeleccionado}`);
    } catch (error) {
      alert('❌ Error al asignar grupo');
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-4xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Asignar Estudiante a Grupo
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

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Selecciona un grupo
        </label>
        <select
          value={grupoSeleccionado}
          onChange={(e) => setGrupoSeleccionado(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Selecciona grupo --</option>
          {grupos.map((grupo) => (
            <option key={grupo.id} value={grupo.id}>
              {grupo.nombre}
            </option>
          ))}
        </select>
      </div>

      {resultados.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          No hay estudiantes para mostrar.
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
                onClick={() => handleAsignar(est.id)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Asignar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsignarEstudiante;
