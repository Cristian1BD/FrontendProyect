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
    <div className="border border-yellow-400 p-6 rounded-lg w-full max-w-3xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Modificar Grupo</h2>

      {grupoSeleccionado ? (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input name="nombre" value={grupoSeleccionado.nombre} onChange={handleChange} className="border p-2 rounded" />
            <input name="cupo" type="number" value={grupoSeleccionado.cupo} onChange={handleChange} className="border p-2 rounded" />
            <input name="hora" value={grupoSeleccionado.hora} onChange={handleChange} className="border p-2 rounded" />
            <input name="lugar" value={grupoSeleccionado.lugar} onChange={handleChange} className="border p-2 rounded" />
            <input name="salida" value={grupoSeleccionado.salida} onChange={handleChange} className="border p-2 rounded" />
          </div>
          <button onClick={handleActualizar} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Guardar Cambios
          </button>
        </>
      ) : (
        <table className="w-full text-left text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Grupo</th>
              <th>Cupo</th>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Salida</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((grupo) => (
              <tr key={grupo.id} className="border-t">
                <td className="p-2">{grupo.nombre}</td>
                <td>{grupo.cupo}</td>
                <td>{grupo.hora}</td>
                <td>{grupo.lugar}</td>
                <td>{grupo.salida}</td>
                <td>
                  <button onClick={() => handleSeleccionar(grupo)} className="text-blue-600 hover:underline">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GrupoModificar;
