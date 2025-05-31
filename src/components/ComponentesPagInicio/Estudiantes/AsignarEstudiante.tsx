import { useEffect, useState } from 'react';
import { asignarGrupo, obtenerEstudiantes } from '../../../services/Paginainicio/PagServiceEstudiantes/estudianteService';
import { obtenerGrupos } from '../../../services/Paginainicio/PagServiceEstudiantes/estudianteService';
import { type EstudianteTypes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';
import { type GrupoType } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';

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
        <label className="block mb-1 font-medium">Selecciona un grupo</label>
        <select
          value={grupoSeleccionado}
          onChange={(e) => setGrupoSeleccionado(Number(e.target.value))}
          className="border p-2 rounded w-full"
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
        <p className="text-gray-600">No hay estudiantes para mostrar.</p>
      ) : (
        resultados.map(est => (
          <div key={est.id} className="flex justify-between items-center border-b py-2">
            <span>{est.nombre} ({est.numeroDocumento})</span>
            <button
              onClick={() => handleAsignar(est.id)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Asignar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AsignarEstudiante;
