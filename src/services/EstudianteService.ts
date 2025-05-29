const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const registrarEstudiante = async (formData: FormData) => {
    try {
        const res = await fetch(`${backendUrl}/api/estudiantes`, {
            method: "POST",
            body: formData,
        });

        const text = await res.text();
        console.log("Respuesta del servidor:", text);

        if (!res.ok) {
            throw new Error(`Error al registrar estudiante: ${text}`);
        }

        try {
            return text ? JSON.parse(text) : null;
        } catch (e) {
            throw new Error("No se pudo parsear la respuesta del servidor.");
        }

        return JSON.parse(text);
    } catch (err) {
        console.error("Error en la solicitud:", err);
        throw err;
    }
};