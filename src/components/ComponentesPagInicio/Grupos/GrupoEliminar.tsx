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
      await eliminarGrupo(id);
      cargarGrupos();
    }
  };

  return (
    <div className="p-6 border rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Eliminar Grupos</h2>
      <table className="w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Grupo</th>
            <th>Cupo</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
            <th>Acción</th>
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
                <button onClick={() => handleEliminar(grupo.id)} className="text-red-600 hover:underline">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GruposEliminar;