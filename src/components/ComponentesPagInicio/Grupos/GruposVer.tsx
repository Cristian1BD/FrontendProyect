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
    <div className="border border-blue-400 p-6 rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Grupos Registrados</h2>
      <table className="w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Grupo</th>
            <th>cupo</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody>
          {grupos.map((grupo, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{grupo.nombre}</td>
              <td>{grupo.cupo}</td>
              <td>{grupo.hora}</td>
              <td>{grupo.lugar}</td>
              <td>{grupo.salida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GruposVer;

