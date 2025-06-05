import axios from 'axios';
import { type ProgramacionHorario } from './ProgramacionHorarioTypes';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const obtenerHorariosProgramacion = async (): Promise<ProgramacionHorario[]> => {
  const response = await axios.get(`${backendUrl}/programaciones/horarios`);
  return response.data as ProgramacionHorario[];
};
