import { useState } from 'react';

const EliminarProgramacion = () => {
  const [id, setId] = useState('');

  const handleDelete = () => {
    console.log('Eliminando programación con ID:', id);
    // Aquí llamas al backend con el ID
  };

  return (
    <div>
      <h2>Eliminar Programación</h2>
      <input
        type="text"
        placeholder="ID de la programación"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-1 mr-2"
      />
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-1 rounded">
        Eliminar
      </button>
    </div>
  );
};

export default EliminarProgramacion;
