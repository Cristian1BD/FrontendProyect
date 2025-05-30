import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const obtenerGrupos = async (): Promise<Grupo[]> => {
  try {
    const response = await fetch(`${backendUrl}/api/grupos`);
    if (!response.ok) throw new Error('Error al obtener grupos');
    return await response.json();
  } catch (error) {
    console.error('Error consultando grupos:', error);
    throw error;
  }
};

export const crearGrupo = async (grupo: Grupo) => {
  try {
    const response = await fetch(`${backendUrl}/api/grupos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(grupo),
    });

    if (!response.ok) throw new Error('Error al crear grupo');

    return await response.json();
  } catch (error) {
    console.error('Error creando grupo:', error);
    throw error;
  }
};

export const editarGrupo = async (id: number, grupo: Grupo) => {
  const response = await fetch(`${backendUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(grupo),
  });
  if (!response.ok) throw new Error('Error al actualizar grupo');
  return await response.json();
};

export const eliminarGrupo = async (id: number) => {
  const response = await fetch(`${backendUrl}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar grupo');
};

