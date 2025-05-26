import React, { useState } from 'react';

const CrearProgramacion = () => {
  const [formulario, setFormulario] = useState({
    docente: '',
    grupo: '',
    fecha: '',
    horaSalida: '',
    horaRegreso: '',
    destino: '',
    numeroEstudiantes: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando datos:', formulario);
    // Aquí se llama al backend
  };

  return (
    <div>
      <h2>Crear Programación</h2>
      <form onSubmit={handleSubmit} className="grid gap-2 max-w-md">
        {[
          ['Docente', 'docente'],
          ['Grupo', 'grupo'],
          ['Fecha', 'fecha'],
          ['Hora de Salida', 'horaSalida'],
          ['Hora de Regreso', 'horaRegreso'],
          ['Destino', 'destino'],
          ['Número de Estudiantes', 'numeroEstudiantes'],
        ].map(([label, name]) => (
          <div key={name}>
            <label>{label}</label>
            <input
              type={name === 'numeroEstudiantes' ? 'number' : 'text'}
              name={name}
              value={(formulario as any)[name]}
              onChange={handleChange}
              className="border p-1 w-full"
            />
          </div>
        ))}
        <button type="submit" className="bg-black text-white py-1 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CrearProgramacion;
