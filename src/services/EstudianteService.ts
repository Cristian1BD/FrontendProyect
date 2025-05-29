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
            return { mensaje: "Estudiante registrado sin respuesta específica del servidor." };
        }

        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return { mensaje: "Error en el cliente al registrar estudiante." };
    }
};
