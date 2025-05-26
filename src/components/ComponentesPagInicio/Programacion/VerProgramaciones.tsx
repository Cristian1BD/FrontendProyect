import { useEffect, useState } from 'react';

const VerProgramaciones = () => {
  const [programaciones, setProgramaciones] = useState<Array<{
    id: number;
    docente: string;
    grupo: string;
    fecha: string;
    horaSalida: string;
    horaRegreso: string;
    destino: string;
    numeroEstudiantes: number;
  }>>([]);

  useEffect(() => {
    const datosFicticios = [
      {
        id: 1,
        docente: 'Juan Pérez',
        grupo: 'Grupo A',
        fecha: '2025-05-20',
        horaSalida: '08:00',
        horaRegreso: '16:00',
        destino: 'Museo de Ciencias',
        numeroEstudiantes: 25,
      },
      {
        id: 2,
        docente: 'Laura Gómez',
        grupo: 'Grupo B',
        fecha: '2025-05-21',
        horaSalida: '09:00',
        horaRegreso: '17:00',
        destino: 'Parque Natural',
        numeroEstudiantes: 30,
      },
    ];

    setProgramaciones(datosFicticios);
  }, []);

  return (
    <div>
      <h2>Programaciones Existentes</h2>
      <ul className="mt-4 space-y-2">
        {programaciones.map((prog) => (
          <li key={prog.id} className="border p-2 rounded shadow-sm">
            <strong>{prog.docente}</strong> – {prog.grupo} – {prog.fecha} – {prog.destino}
            <div>Salida: {prog.horaSalida} | Regreso: {prog.horaRegreso}</div>
            <div>Estudiantes: {prog.numeroEstudiantes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerProgramaciones;
