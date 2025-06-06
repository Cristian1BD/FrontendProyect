import { useEffect, useState } from 'react';
import axios from 'axios';

type Grupo = {
  id: number;
  nombre: string;
};

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const EliminarProgramacion = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const cargarGrupos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<Grupo[]>(`${backendUrl}/api/grupos`);
      setGrupos(res.data);
    } catch (err: any) {
      setError('Error cargando grupos: ' + (err.message || ''));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarGrupos();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Seguro que deseas eliminar este grupo?')) return;

    setDeletingId(id);
    try {
      await axios.delete(`${backendUrl}/api/grupos/${id}`);
      alert('Grupo eliminado');
      cargarGrupos();
    } catch (err: any) {
      alert('Error eliminando grupo: ' + (err.message || ''));
      console.error(err);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading)
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        Cargando grupos...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">{error}</div>
    );
  if (grupos.length === 0)
    return (
      <div className="text-center mt-10 text-gray-600 font-medium">
        No hay grupos registrados.
      </div>
    );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Eliminar Grupos
      </h2>
      <ul className="space-y-3">
        {grupos.map((grupo) => (
          <li
            key={grupo.id}
            className="flex justify-between items-center p-4 border rounded-lg hover:bg-red-50 transition-colors"
          >
            <span className="text-gray-800 font-medium">{grupo.nombre}</span>
            <button
              onClick={() => handleDelete(grupo.id)}
              className={`px-4 py-1 rounded text-white font-semibold ${
                deletingId === grupo.id
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              } transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
              disabled={deletingId === grupo.id}
            >
              {deletingId === grupo.id ? 'Eliminando...' : 'Eliminar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarProgramacion;
