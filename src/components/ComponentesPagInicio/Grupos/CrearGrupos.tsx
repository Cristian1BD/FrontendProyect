import { useState } from 'react';
import { crearGrupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoService';
import { type Grupo } from '../../../services/Paginainicio/PagServiceGrupo/GrupoTypes';

const GruposCrear: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [nuevoGrupo, setNuevoGrupo] = useState<Grupo>({
    nombre: '',
    cupo: 0,
    hora: '',
    lugar: '',
    salida: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoGrupo({
      ...nuevoGrupo,
      [name]: name === 'cupo' ? Number(value) : value,
    });
  };

  const handleAgregar = async () => {
    if (
      nuevoGrupo.nombre &&
      nuevoGrupo.cupo &&
      nuevoGrupo.hora &&
      nuevoGrupo.lugar &&
      nuevoGrupo.salida
    ) {
      try {
        const grupoCreado = await crearGrupo(nuevoGrupo);
        setGrupos([...grupos, grupoCreado]);
        setNuevoGrupo({ nombre: '', cupo: 0, hora: '', lugar: '', salida: '' });
        console.log('Grupo creado exitosamente');
      } catch (error) {
        console.error('Error al crear grupo:', error);
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl max-w-4xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Crear Grupo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          name="nombre"
          placeholder="Nombre del grupo"
          value={nuevoGrupo.nombre}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="cupo"
          type="number"
          placeholder="N° de estudiantes"
          value={nuevoGrupo.cupo}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="hora"
          placeholder="Hora"
          value={nuevoGrupo.hora}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="lugar"
          placeholder="Lugar"
          value={nuevoGrupo.lugar}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="salida"
          placeholder="Salida"
          value={nuevoGrupo.salida}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleAgregar}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Agregar Grupo
        </button>
      </div>

      {grupos.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Grupos Creados
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Grupo</th>
                  <th className="px-4 py-2 text-left">Cupo</th>
                  <th className="px-4 py-2 text-left">Hora</th>
                  <th className="px-4 py-2 text-left">Lugar</th>
                  <th className="px-4 py-2 text-left">Salida</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {grupos.map((grupo, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{grupo.nombre}</td>
                    <td className="px-4 py-2">{grupo.cupo}</td>
                    <td className="px-4 py-2">{grupo.hora}</td>
                    <td className="px-4 py-2">{grupo.lugar}</td>
                    <td className="px-4 py-2">{grupo.salida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default GruposCrear;