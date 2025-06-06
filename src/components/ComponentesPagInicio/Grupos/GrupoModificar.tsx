import { useState, useEffect } from 'react';
import { actualizarGrupo, obtenerGrupos } from '../../../services/Paginainicio/PagServiceGrupo/GrupoService';
import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes';

const GrupoModificar: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState<Grupo | null>(null);

  useEffect(() => {
    const fetchGrupos = async () => {
      const data = await obtenerGrupos();
      setGrupos(data);
    };
    fetchGrupos();
  }, []);

  const handleSeleccionar = (grupo: Grupo) => {
    setGrupoSeleccionado({ ...grupo });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!grupoSeleccionado) return;
    const { name, value } = e.target;
    setGrupoSeleccionado({
      ...grupoSeleccionado,
      [name]: name === 'cupo' ? Number(value) : value,
    });
  };

  const handleActualizar = async () => {
    if (grupoSeleccionado) {
      try {
        await actualizarGrupo(grupoSeleccionado);
        const actualizados = grupos.map(g =>
          g.id === grupoSeleccionado.id ? grupoSeleccionado : g
        );
        setGrupos(actualizados);
        setGrupoSeleccionado(null);
        console.log('Grupo actualizado exitosamente');
      } catch (error) {
        console.error('Error al actualizar grupo:', error);
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-5xl mx-auto mt-10 border border-yellow-300">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
        Modificar Grupo
      </h2>

      {grupoSeleccionado ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              name="nombre"
              value={grupoSeleccionado.nombre}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Nombre del grupo"
            />
            <input
              name="cupo"
              type="number"
              value={grupoSeleccionado.cupo}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Cupo"
            />
            <input
              name="hora"
              value={grupoSeleccionado.hora}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Hora"
            />
            <input
              name="lugar"
              value={grupoSeleccionado.lugar}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Lugar"
            />
            <input
              name="salida"
              value={grupoSeleccionado.salida}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Salida"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setGrupoSeleccionado(null)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
            <button
              onClick={handleActualizar}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Guardar Cambios
            </button>
          </div>
        </>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-yellow-100 text-gray-800">
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
                      onClick={() => handleSeleccionar(grupo)}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
              {grupos.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No hay grupos disponibles para modificar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GrupoModificar;
