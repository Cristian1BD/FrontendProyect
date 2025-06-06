import { useEffect, useState } from 'react';
import { type ProgramacionHorario } from '../../../services/Paginainicio/PagServiceHorario/ProgramacionHorarioTypes';
import { obtenerHorariosProgramacion } from '../../../services/Paginainicio/PagServiceHorario/ProgramacionHorarios';

const HorariosProgramacion: React.FC = () => {
  const [horarios, setHorarios] = useState<ProgramacionHorario[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerHorariosProgramacion();
        setHorarios(data);
      } catch (error) {
        console.error('Error al obtener horarios:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 mt-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
        Horarios de Salidas
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-100 text-gray-800 font-medium">
            <tr>
              <th className="py-3 px-4">Grupo</th>
              <th className="py-3 px-4">Hora de Salida</th>
              <th className="py-3 px-4">Hora de Regreso</th>
              <th className="py-3 px-4">Docente</th>
              <th className="py-3 px-4">Fecha</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {horarios.length > 0 ? (
              horarios.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="py-2 px-4">{item.nombreGrupo}</td>
                  <td className="py-2 px-4">{item.horaSalida}</td>
                  <td className="py-2 px-4">{item.horaRegreso}</td>
                  <td className="py-2 px-4">{item.docente}</td>
                  <td className="py-2 px-4">{item.fecha}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No hay horarios disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HorariosProgramacion;
