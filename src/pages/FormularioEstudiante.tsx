import React, { useState } from "react";
import FormLabelInput from "../components/ComponentesForEstudiante/FormLabelInput";
import FormLabelSelect from "../components/ComponentesForEstudiante/FormLabelSelect";
import FormLabelFile from "../components/ComponentesForEstudiante/FormFileUpload";
import FormLabelDate from "../components/ComponentesForEstudiante/FormLabelDate";
import { validateFormData } from "../components/ComponentesForEstudiante/validacionesEstudiante";

const FormularioEstudiante: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    correo: "",
    telefono: "",
    grupo: "",
    genero: "",
    direccion: "",
    eps: "",
    grupoSanguineo: "",
    institucion: "",
  });

  const [archivos, setArchivos] = useState({
    documentoIdentidad: null,
    permisoMenor: null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setArchivos({ ...archivos, [name]: files?.[0] || null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors } = validateFormData(formData);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    console.log("Datos del estudiante:", formData);
    console.log("Archivos:", archivos);
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 px-4">
      <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-10 rounded-2xl shadow-lg border border-gray-200 bg-white"
    >
        <h2 className="text-3xl font-bold mb-6 border-b pb-4 text-blue-900">Datos del Estudiante</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Información Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabelInput label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
            </div>
            <div>
              <FormLabelInput label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
              {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
            </div>
            <div>
              <FormLabelSelect
                label="Tipo de Documento"
                name="tipoDocumento"
                value={formData.tipoDocumento}
                onChange={handleChange}
                options={[
                  { value: "TI", label: "Tarjeta de Identidad" },
                  { value: "CC", label: "Cédula de Ciudadanía" },
                  { value: "CE", label: "Cédula de Extranjería" },
                ]}
              />
              {errors.tipoDocumento && <p className="text-red-500 text-sm">{errors.tipoDocumento}</p>}
            </div>
            <div>
              <FormLabelInput label="Número de Documento" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} />
              {errors.numeroDocumento && <p className="text-red-500 text-sm">{errors.numeroDocumento}</p>}
            </div>
            <div>
              <FormLabelDate label="Fecha de Nacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
              {errors.fechaNacimiento && <p className="text-red-500 text-sm">{errors.fechaNacimiento}</p>}
            </div>
            <div>
              <FormLabelInput label="Correo Electrónico" name="correo" value={formData.correo} onChange={handleChange} />
              {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
            </div>
            <div>
              <FormLabelInput label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
              {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
            </div>
            <FormLabelSelect
              label="Grupo"
              name="grupo"
              value={formData.grupo}
              onChange={handleChange}
              options={[
                { value: "Grupo A", label: "Grupo A" },
                { value: "Grupo B", label: "Grupo B" },
                { value: "Grupo C", label: "Grupo C" },
              ]}
            />
            <FormLabelSelect
              label="Género"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              options={[
                { value: "Masculino", label: "Masculino" },
                { value: "Femenino", label: "Femenino" },
                { value: "Otro", label: "Otro" },
              ]}
            />
            <div>
              <FormLabelInput label="Dirección de Residencia" name="direccion" value={formData.direccion} onChange={handleChange} />
              {errors.direccion && <p className="text-red-500 text-sm">{errors.direccion}</p>}
            </div>
            <div>
              <FormLabelInput label="EPS" name="eps" value={formData.eps} onChange={handleChange} />
              {errors.eps && <p className="text-red-500 text-sm">{errors.eps}</p>}
            </div>
            <FormLabelSelect
              label="Grupo Sanguíneo y RH"
              name="grupoSanguineo"
              value={formData.grupoSanguineo}
              onChange={handleChange}
              options={[
                { value: "A+", label: "A+" },
                { value: "A-", label: "A-" },
                { value: "B+", label: "B+" },
                { value: "B-", label: "B-" },
                { value: "AB+", label: "AB+" },
                { value: "AB-", label: "AB-" },
                { value: "O+", label: "O+" },
                { value: "O-", label: "O-" },
              ]}
            />
            <div>
              <FormLabelInput label="Institución Educativa" name="institucion" value={formData.institucion} onChange={handleChange} />
              {errors.institucion && <p className="text-red-500 text-sm">{errors.institucion}</p>}
            </div>
          </div>
        </div>

        {/* Archivos Adjuntos */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Documentos Adjuntos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormLabelFile label="Documento de Identidad" name="documentoIdentidad" onChange={handleFileChange} />
            <FormLabelFile label="Permiso para Menores" name="permisoMenor" onChange={handleFileChange} />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 border rounded text-blue-600 hover:bg-gray-100"
          >
            ← Regresar
          </button>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioEstudiante;