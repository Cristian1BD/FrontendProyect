import { useEffect, useState } from 'react';
import { type ProgramacionHorario } from '../../../services/Paginainicio/PagServiceHorario/ProgramacionHorarioTypes';
import { obtenerHorariosProgramacion } from '../../../services/Paginainicio/PagServiceHorario/ProgramacionHorarios';

const HorariosProgramacion = () => {
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
    <div className="border border-gray-300 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Horarios de Salidas</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b font-medium text-gray-700">
            <th className="py-2">Grupo</th>
            <th>Hora de Salida</th>
            <th>Hora de Regreso</th>
            <th>Docente</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2">{item.nombreGrupo}</td>
              <td>{item.horaSalida}</td>
              <td>{item.horaRegreso}</td>
              <td>{item.docente}</td>
              <td>{item.fecha}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default HorariosProgramacion;
