import { useEffect, useState } from 'react';
import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes'; // usa el tipo unificado
import GrupoEditarForm from './GrupoEditarForm';
import { editarGrupo, eliminarGrupo, obtenerGrupos } from '../../../services/Paginainicio/PagServiceGrupo/GrupoService';

const GruposLista: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [editandoGrupo, setEditandoGrupo] = useState<Grupo | null>(null);
  const [indexEditando, setIndexEditando] = useState<number | null>(null);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const data = await obtenerGrupos();
        setGrupos(data);
      } catch (error) {
        console.error('Error al obtener grupos:', error);
      }
    };

    fetchGrupos();
  }, []);

  const handleGuardar = async (grupoActualizado: Grupo) => {
    if (indexEditando !== null) {
      try {
        const id = grupos[indexEditando].id;
        const grupoEditado = await editarGrupo(id, grupoActualizado);
        const nuevosGrupos = [...grupos];
        nuevosGrupos[indexEditando] = grupoEditado;
        setGrupos(nuevosGrupos);
        setEditandoGrupo(null);
        setIndexEditando(null);
      } catch (error) {
        console.error('Error al actualizar grupo:', error);
      }
    }
  };

  const handleEliminar = async (index: number) => {
    try {
      const id = grupos[index].id;
      await eliminarGrupo(id);
      const nuevosGrupos = grupos.filter((_, i) => i !== index);
      setGrupos(nuevosGrupos);
    } catch (error) {
      console.error('Error al eliminar grupo:', error);
    }
  };

  return (
    <div className="border border-blue-400 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Lista de Grupos</h2>
      <table className="w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Grupo</th>
            <th>Cupo</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {grupos.map((grupo, index) => (
            <tr key={grupo.id} className="border-t">
              <td className="p-2">{grupo.nombre}</td>
              <td>{grupo.cupo}</td>
              <td>{grupo.hora}</td>
              <td>{grupo.lugar}</td>
              <td>{grupo.salida}</td>
              <td className="space-x-2">
                <button
                  className="text-blue-600 underline text-xs"
                  onClick={() => {
                    setEditandoGrupo(grupo);
                    setIndexEditando(index);
                  }}
                >
                  Editar
                </button>
                <button
                  className="text-red-600 underline text-xs"
                  onClick={() => handleEliminar(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editandoGrupo && indexEditando !== null && (
        <GrupoEditarForm
          grupo={editandoGrupo}
          onGuardar={handleGuardar}
          onCancelar={() => {
            setEditandoGrupo(null);
            setIndexEditando(null);
          }}
        />
      )}
    </div>
  );
};

export default GruposLista;
