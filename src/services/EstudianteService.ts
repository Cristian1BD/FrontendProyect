// src/services/EstudianteService.ts
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
interface RegistrarEstudianteResponse {
  mensaje: string;
  [key: string]: any;
}

export const registrarEstudiante = async (data: FormData): Promise<RegistrarEstudianteResponse> => {
  try {
    const response = await axios.post<RegistrarEstudianteResponse>(backendUrl, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data && response.data.mensaje) {
      return response.data;
    } else {
      return { mensaje: "Estudiante registrado sin respuesta específica del servidor." };
    }
  } catch (error: any) {
    if (error.response) {
      // Errores con respuesta del servidor
      throw new Error(error.response.data?.mensaje || "Error del servidor");
    } else if (error.request) {
      // Error sin respuesta del servidor
      throw new Error("No se recibió respuesta del servidor");
    } else {
      // Otros errores
      throw new Error("Error al registrar estudiante");
    }
  }
};