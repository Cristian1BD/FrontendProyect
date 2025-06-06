import { useEffect, useState } from 'react';
import { obtenerGrupos } from '../../../services/Paginainicio/PagServiceGrupo/GrupoService';
import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes';

const GruposVer: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const data = await obtenerGrupos();
        setGrupos(data);
      } catch (error) {
        console.error('Error al cargar grupos:', error);
      }
    };

    fetchGrupos();
  }, []);

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-5xl mx-auto mt-10 border border-blue-300">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Grupos Registrados
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="px-4 py-2 text-left">Grupo</th>
              <th className="px-4 py-2 text-left">Cupo</th>
              <th className="px-4 py-2 text-left">Hora</th>
              <th className="px-4 py-2 text-left">Lugar</th>
              <th className="px-4 py-2 text-left">Salida</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {grupos.length > 0 ? (
              grupos.map((grupo, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{grupo.nombre}</td>
                  <td className="px-4 py-2">{grupo.cupo}</td>
                  <td className="px-4 py-2">{grupo.hora}</td>
                  <td className="px-4 py-2">{grupo.lugar}</td>
                  <td className="px-4 py-2">{grupo.salida}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
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

export default GruposVer;
