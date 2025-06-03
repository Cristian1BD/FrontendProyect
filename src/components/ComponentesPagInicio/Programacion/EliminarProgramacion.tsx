import { useEffect, useState } from 'react';
import axios from 'axios';

type Grupo = {
  id: number;
  nombre: string;
};

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const EliminarGrupo = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar grupos
  const cargarGrupos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<Grupo[]>(`${backendUrl}/api/grupos`);
      setGrupos(res.data);
    } catch (err) {
      setError('Error cargando grupos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarGrupos();
  }, []);

  // Eliminar grupo
  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Seguro que deseas eliminar este grupo?')) return;

    try {
      await axios.delete(`${backendUrl}/api/grupos/${id}`);
      alert('Grupo eliminado');
      // Recargar grupos
      cargarGrupos();
    } catch (err) {
      alert('Error eliminando grupo');
      console.error(err);
    }
  };

  if (loading) return <div>Cargando grupos...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (grupos.length === 0) return <div>No hay grupos registrados.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Eliminar Grupos</h2>
      <ul className="space-y-2 max-w-md">
        {grupos.map(grupo => (
          <li
            key={grupo.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span>{grupo.nombre}</span>
            <button
              onClick={() => handleDelete(grupo.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarGrupo;
