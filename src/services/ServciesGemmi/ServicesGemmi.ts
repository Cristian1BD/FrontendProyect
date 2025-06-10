import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const googleGenAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

/**
 * Función para enviar una pregunta a Gemini con contexto especializado
 * @param input Pregunta del usuario
 * @returns Respuesta de Gemini
 */
export async function getGoogleGenAI(input: string) {
  const response = await googleGenAI.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
                  Eres un asistente experto en organización de salidas pedagógicas escolares. 
                  Solo debes responder preguntas relacionadas con la planificación, logística, permisos, actividades y recomendaciones para salidas pedagógicas escolares. 
                  Ignora cualquier otro significado de la palabra "salida". 
                  Si te preguntan algo fuera de ese contexto, responde: "Lo siento, solo puedo ayudarte con temas relacionados con salidas pedagógicas escolares."

                    Aquí está la pregunta del usuario: Como puedo crear una salida pedagógica? Responde: Desde la interfaz de aministracion, puedes crear una salida pedagógica seleccionando la opción "Crear nueva salida","Crear Grupo","Asignar alumnos" y "Asignar docentes","Asigar Estudiantes" y " Asignar sitio,hora y fecha de salida".
                    Si tienes dudas, consulta la documentación oficial.

Pregunta: ${input}`,
          },
        ],
      },
    ],
  });

  console.log("📤 Pregunta enviada:", input);
  console.log("✅ Respuesta completa:", response);

  return response;
}

// Exportamos la instancia para otros usos
export const ServicesGemmi = {
  googleGenAI,
};
