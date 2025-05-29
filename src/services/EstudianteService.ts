const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const registrarEstudiante = async (formData: FormData) => {
  const res = await fetch(`${backendUrl}/api/estudiantes`, {
    method: "POST",
    body: formData,
  });

  // TEMPORAL: mostrar respuesta
  const text = await res.text();
  console.log("Respuesta del servidor:", text);

  if (!res.ok) {
    throw new Error("Error al registrar estudiante");
  }

  return JSON.parse(text);
};
