import { useEffect, useState } from 'react';
import { obtenerGrupos, eliminarGrupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoService';
import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes';

const GruposEliminar: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    cargarGrupos();
  }, []);

  const cargarGrupos = async () => {
    const data = await obtenerGrupos();
    setGrupos(data);
  };

  const handleEliminar = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este grupo?')) {
      try {
        await eliminarGrupo(id);
        cargarGrupos();
        console.log('Grupo eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar el grupo:', error);
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-5xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
        Eliminar Grupos
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-red-100 text-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Grupo</th>
              <th className="px-4 py-2 text-left">Cupo</th>
              <th className="px-4 py-2 text-left">Hora</th>
              <th className="px-4 py-2 text-left">Lugar</th>
              <th className="px-4 py-2 text-left">Salida</th>
              <th className="px-4 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {grupos.map((grupo) => (
              <tr key={grupo.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{grupo.nombre}</td>
                <td className="px-4 py-2">{grupo.cupo}</td>
                <td className="px-4 py-2">{grupo.hora}</td>
                <td className="px-4 py-2">{grupo.lugar}</td>
                <td className="px-4 py-2">{grupo.salida}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEliminar(grupo.id!)}
                    className="text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {grupos.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No hay grupos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GruposEliminar;
