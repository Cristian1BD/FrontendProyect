import { useState } from 'react';

interface Grupo {
  nombre: string;
  estudiantes: number;
  hora: string;
  lugar: string;
  salida: string;
}

const GruposCrear: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [nuevoGrupo, setNuevoGrupo] = useState<Grupo>({
    nombre: '',
    estudiantes: 0,
    hora: '',
    lugar: '',
    salida: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoGrupo({
      ...nuevoGrupo,
      [name]: name === 'estudiantes' ? Number(value) : value,
    });
  };

  const handleAgregar = () => {
    if (nuevoGrupo.nombre && nuevoGrupo.estudiantes && nuevoGrupo.hora && nuevoGrupo.lugar && nuevoGrupo.salida) {
      setGrupos([...grupos, nuevoGrupo]);
      setNuevoGrupo({ nombre: '', estudiantes: 0, hora: '', lugar: '', salida: '' });
    }
  };

  return (
    <div className="border border-blue-400 p-6 rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Crear Grupo</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          name="nombre"
          placeholder="Nombre del grupo"
          value={nuevoGrupo.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="estudiantes"
          type="number"
          placeholder="N° de estudiantes"
          value={nuevoGrupo.estudiantes}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="hora"
          placeholder="Hora"
          value={nuevoGrupo.hora}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="lugar"
          placeholder="Lugar"
          value={nuevoGrupo.lugar}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="salida"
          placeholder="Salida"
          value={nuevoGrupo.salida}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleAgregar}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar Grupo
      </button>

      {/* Lista de grupos agregados */}
      {grupos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Grupos Creados</h3>
          <table className="w-full text-left text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Grupo</th>
                <th>Estudiantes</th>
                <th>Hora</th>
                <th>Lugar</th>
                <th>Salida</th>
              </tr>
            </thead>
            <tbody>
              {grupos.map((grupo, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{grupo.nombre}</td>
                  <td>{grupo.estudiantes}</td>
                  <td>{grupo.hora}</td>
                  <td>{grupo.lugar}</td>
                  <td>{grupo.salida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GruposCrear;
