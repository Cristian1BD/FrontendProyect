// src/services/programacionService.ts
import axios from 'axios';
import { type Programacion } from './ProgramacionTypes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const crearProgramacion = async (data: Programacion) => {
  try {
    const response = await axios.post(`${backendUrl}/api/programaciones`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Obtener todos los grupos
export const obtenerGrupos = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/grupos`);
    return response.data; // Asumimos que es un array de grupos
  } catch (error) {
    throw error;
  }
};

// Eliminar grupo por ID
export const eliminarGrupo = async (id: number) => {
  try {
    const response = await axios.delete(`${backendUrl}/api/grupos/${id}`);
    return response.data; // Dependiendo de lo que retorne el backend
  } catch (error) {
    throw error;
  }
};
