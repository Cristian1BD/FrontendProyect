import { useEffect, useState } from 'react';
import axios from 'axios';
import { type Programacion } from '../../../services/Paginainicio/PagServiceProgrmacion/ProgramacionTypes';
import { FaUserTie, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChair } from 'react-icons/fa';

type Docente = { id: number; nombre: string; apellido: string };
type Grupo = { id: number; nombre: string };

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const formatFecha = (fecha: string) => {
  try {
    return new Date(fecha).toLocaleDateString();
  } catch {
    return fecha;
  }
};

const VerProgramaciones = () => {
  const [programaciones, setProgramaciones] = useState<(Programacion & { docenteNombre: string; grupoNombre: string })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatos = async () => {
      setLoading(true);
      setError(null);
      try {
        const [programacionesRes, docentesRes, gruposRes] = await Promise.all([
          axios.get<Programacion[]>(`${backendUrl}/api/programaciones`),
          axios.get<Docente[]>(`${backendUrl}/api/docentes`),
          axios.get<Grupo[]>(`${backendUrl}/api/grupos`),
        ]);

        const docentes = docentesRes.data;
        const grupos = gruposRes.data;

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

  if (loading) return <div className="text-center mt-10 text-lg font-semibold">Cargando programaciones...</div>;
  if (error) return <div className="text-center mt-10 text-red-600 font-semibold">{error}</div>;
  if (programaciones.length === 0) return <div className="text-center mt-10 text-gray-700 font-medium">No hay programaciones registradas.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700">Programaciones Existentes</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {programaciones.map((prog) => (
          <li
            key={prog.id}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <FaUserTie className="text-blue-600 mr-2" />
              <span className="font-semibold text-gray-800">{prog.docenteNombre}</span>
            </div>

            <div className="flex items-center mb-3">
              <FaUsers className="text-green-600 mr-2" />
              <span className="text-gray-700">{prog.grupoNombre}</span>
            </div>

            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-red-600 mr-2" />
              <span className="text-gray-700">{prog.destino}</span>
            </div>

            <div className="flex items-center mb-3">
              <FaCalendarAlt className="text-purple-600 mr-2" />
              <span className="text-gray-700">{formatFecha(prog.fecha)}</span>
            </div>

            <div className="flex space-x-4 mb-3 text-gray-600">
              <div className="flex items-center">
                <FaClock className="mr-1" />
                <span><strong>Salida:</strong> {prog.horaSalida}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-1" />
                <span><strong>Regreso:</strong> {prog.horaRegreso}</span>
              </div>
            </div>

            <div className="flex items-center">
              <FaChair className="text-yellow-600 mr-2" />
              <span><strong>Cupo:</strong> {prog.cupo}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerProgramaciones;
