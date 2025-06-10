import { GoogleGenAI } from "@google/genai";

// Constantes apiKey para Google GenAI
// Puede ser remplazada por cualuier apiKey de Google GenAI
const googleGenAI = new GoogleGenAI({ apiKey: "AIzaSyAojILnaDLnltOeeufq7wbOF7B2yVmn69g" });

export async function getGoogleGenAI(input: string) {
  const response = await ServicesGemmi.googleGenAI.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [{ role: "user", parts: [{ text: input }] }],
  });

  return response;
}
// Exportamos el objeto con la instancia de GoogleGenAI
// Esto permite que se pueda usar en otros archivos importando este módulo
export const ServicesGemmi = {
  googleGenAI,
};