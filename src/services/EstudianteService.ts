const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const registrarEstudiante = async (formData: FormData) => {
    try {
        const res = await fetch(`${backendUrl}/api/estudiantes`, {
            method: "POST",
            body: formData,
        });

        const text = await res.text();
        console.log("Respuesta cruda del servidor:", text);

        if (!res.ok) {
            throw new Error(`Error al registrar estudiante: ${text}`);
        }

        if (!text || text.trim() === "") {
            throw new Error("La respuesta del servidor está vacía.");
        }

        const data = JSON.parse(text);
        return data;
    } catch (err) {
        console.error("Error en la solicitud:", err);
        throw err;
    }
};
