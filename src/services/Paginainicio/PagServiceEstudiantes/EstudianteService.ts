import { type EstudianteTypes } from '../../../services/Paginainicio/PagServiceEstudiantes/EstudianteTypes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function obtenerEstudiantes(): Promise<EstudianteTypes[]> {
  const response = await fetch(`${backendUrl}/api/estudiantes`);
  if (!response.ok) {
    throw new Error('Error al obtener estudiantes');
  }
  return response.json();
}