import { useState } from 'react';

interface Grupo {
  nombre: string;
  estudiantes: number;
  hora: string;
  lugar: string;
  salida: string;
}

interface Props {
  grupo: Grupo;
  onGuardar: (grupo: Grupo) => void;
  onCancelar: () => void;
}

const GrupoEditarForm: React.FC<Props> = ({ grupo, onGuardar, onCancelar }) => {
  const [formData, setFormData] = useState<Grupo>(grupo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'estudiantes' ? Number(value) : value,
    });
  };

  return (
    <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
      <h3 className="text-md font-semibold mb-4">Editar Grupo</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          name="nombre"
          placeholder="Nombre del grupo"
          value={formData.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="estudiantes"
          type="number"
          placeholder="N° de estudiantes"
          value={formData.estudiantes}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="hora"
          placeholder="Hora"
          value={formData.hora}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="lugar"
          placeholder="Lugar"
          value={formData.lugar}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="salida"
          placeholder="Salida"
          value={formData.salida}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => onGuardar(formData)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
        <button
          onClick={onCancelar}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default GrupoEditarForm;
