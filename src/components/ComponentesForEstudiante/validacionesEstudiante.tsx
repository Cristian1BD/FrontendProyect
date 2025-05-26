export const validateFormData = (formData: { [key: string]: string }) => {
  const errors: { [key: string]: string } = {};
  const requiredFields = [
    "nombre", "apellido", "tipoDocumento", "numeroDocumento",
    "fechaNacimiento", "correo", "direccion", "eps", "institucion"
  ];

  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === "") {
      errors[field] = "Este campo es obligatorio";
    }
  });

  // Validación de email
  if (formData.correo && !/\S+@\S+\.\S+/.test(formData.correo)) {
    errors.correo = "Correo electrónico no válido";
  }

  // Validación de campos numéricos
  if (formData.numeroDocumento && !/^\d+$/.test(formData.numeroDocumento)) {
    errors.numeroDocumento = "Solo se permiten números";
  }

  if (formData.telefono && !/^\d+$/.test(formData.telefono)) {
    errors.telefono = "Solo se permiten números";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
