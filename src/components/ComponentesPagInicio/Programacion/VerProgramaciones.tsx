import { useEffect, useState } from 'react';
import axios from 'axios';
import { type Programacion } from '../../../services/Paginainicio/PagServiceProgrmacion/ProgramacionTypes';

type Docente = { id: number; nombre: string; apellido: string };
type Grupo = { id: number; nombre: string };

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const VerProgramaciones = () => {
  const [programaciones, setProgramaciones] = useState<(Programacion & { docenteNombre: string; grupoNombre: string })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatos = async () => {
      setLoading(true);
      setError(null);
      try {
        // Traer programaciones
        const programacionesRes = await axios.get<Programacion[]>(`${backendUrl}/api/programaciones`);
        // Traer docentes
        const docentesRes = await axios.get<Docente[]>(`${backendUrl}/api/docentes`);
        // Traer grupos
        const gruposRes = await axios.get<Grupo[]>(`${backendUrl}/api/grupos`);

        const docentes = docentesRes.data;
        const grupos = gruposRes.data;

        // Mapear para agregar nombres
        const programacionesConNombres = programacionesRes.data.map(prog => {
          const docente = docentes.find(d => d.id === Number(prog.docenteId));
          const grupo = grupos.find(g => g.id === Number(prog.grupoId));
          return {
            ...prog,
            docenteNombre: docente ? `${docente.nombre} ${docente.apellido}` : 'Desconocido',
            grupoNombre: grupo ? grupo.nombre : 'Desconocido',
          };
        });

        setProgramaciones(programacionesConNombres);
      } catch (err) {
        setError('Error al cargar programaciones');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, []);

  if (loading) return <div>Cargando programaciones...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (programaciones.length === 0) return <div>No hay programaciones registradas.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Programaciones Existentes</h2>
      <ul className="space-y-4">
        {programaciones.map((prog) => (
          <li key={prog.id} className="border p-4 rounded shadow-sm">
            <div><strong>Docente:</strong> {prog.docenteNombre}</div>
            <div><strong>Grupo:</strong> {prog.grupoNombre}</div>
            <div><strong>Salida:</strong> {prog.salida}</div>
            <div><strong>Fecha:</strong> {prog.fecha}</div>
            <div><strong>Hora Salida:</strong> {prog.horaSalida}</div>
            <div><strong>Hora Regreso:</strong> {prog.horaRegreso}</div>
            <div><strong>Destino:</strong> {prog.destino}</div>
            <div><strong>Cupo:</strong> {prog.cupo}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerProgramaciones;
