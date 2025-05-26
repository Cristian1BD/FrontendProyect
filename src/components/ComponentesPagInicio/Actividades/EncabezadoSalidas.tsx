import { useState } from "react";

const EncabezadoSalidas = () => {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Salidas Pedagógicas</h1>
        <button className="bg-white text-blue-600 font-semibold px-3 py-1 rounded shadow hover:bg-gray-100">
          + Nueva Programación
        </button>
      </div>
      <p className="text-sm mb-4">
        Actividades pedagógicas planificadas para fortalecer el aprendizaje fuera del aula.
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Buscar por grupo, destino o docente"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="p-2 rounded text-black w-full max-w-md"
        />
        <button className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-100">
          📅 Filtrar por Fecha
        </button>
      </div>
    </div>
  );
};

export default EncabezadoSalidas;