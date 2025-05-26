import { useEffect, useState } from 'react';

const HorariosProgramacion = () => {
  const [horarios, setHorarios] = useState<
    Array<{ id: number; grupo: string; horaSalida: string; horaRegreso: string }>
  >([]);

  useEffect(() => {
    // Datos simulados
    const datosFicticios = [
      { id: 1, grupo: 'Grupo A', horaSalida: '08:00', horaRegreso: '16:00' },
      { id: 2, grupo: 'Grupo B', horaSalida: '09:00', horaRegreso: '17:00' },
      { id: 3, grupo: 'Grupo C', horaSalida: '07:30', horaRegreso: '15:30' },
    ];

    setHorarios(datosFicticios);
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
          </tr>
        </thead>
        <tbody>
          {horarios.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2">{item.grupo}</td>
              <td>{item.horaSalida}</td>
              <td>{item.horaRegreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorariosProgramacion;
