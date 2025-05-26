import { useState } from 'react';

interface Grupo {
  nombre: string;
  estudiantes: number;
  hora: string;
  lugar: string;
  salida: string;
}

const GruposVer: React.FC = () => {
  const [grupos] = useState<Grupo[]>([
    { nombre: 'FIG-112', estudiantes: 20, hora: '6:AM', lugar: 'Estadio', salida: 'Enombre' },
    { nombre: 'FIG-113', estudiantes: 25, hora: '7:AM', lugar: 'Auditorio', salida: 'Otro' },
  ]);

  return (
    <div className="border border-blue-400 p-6 rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Grupos Registrados</h2>
      <table className="w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Grupo</th>
            <th>Estudiantes</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody>
          {grupos.map((grupo, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{grupo.nombre}</td>
              <td>{grupo.estudiantes}</td>
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
