// src/services/Paginainicio/PagServiceEstudiantes/EstudianteService.ts

import { type EstudianteTypes, type GrupoType } from './EstudianteTypes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function obtenerEstudiantes(): Promise<EstudianteTypes[]> {
  const response = await fetch(`${backendUrl}/api/estudiantes`);
  if (!response.ok) {
    throw new Error('Error al obtener estudiantes');
  }
  const data: EstudianteTypes[] = await response.json();
  return data;
}

export const asignarGrupo = async (estudianteId: number, grupoId: number): Promise<void> => {
  const response = await fetch(
    `${backendUrl}/api/estudiantes/${estudianteId}/grupo/${grupoId}`,
    { method: 'PUT' }
  );
  if (!response.ok) {
    throw new Error('Error asignando grupo');
  }
};
export async function obtenerGrupos(): Promise<GrupoType[]> {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(`${backendUrl}/api/grupos`);
  if (!response.ok) {
    throw new Error('Error al obtener grupos');
  }
  return response.json();
}
export async function eliminarEstudiante(id: number): Promise<void> {
  const response = await fetch(`${backendUrl}/api/estudiantes/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar estudiante');
  }
}

