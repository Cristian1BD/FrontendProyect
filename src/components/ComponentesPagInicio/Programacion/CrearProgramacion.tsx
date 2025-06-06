import React, { useState, useEffect } from 'react';
import { crearProgramacion } from '../../../services/Paginainicio/PagServiceProgrmacion/ProgramacionService';
import axios from 'axios';
import { type Programacion } from '../../../services/Paginainicio/PagServiceProgrmacion/ProgramacionTypes';

type Docente = { id: number; nombre: string; apellido: string };
type Grupo = { id: number; nombre: string };

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CrearProgramacion: React.FC = () => {
  const [formulario, setFormulario] = useState<Programacion>({
    docenteId: '',
    grupoId: '',
    salida: '',
    fecha: '',
    horaSalida: '',
    horaRegreso: '',
    destino: '',
    cupo: 0,
  });

  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    axios.get<Docente[]>(`${backendUrl}/api/docentes`)
      .then(res => setDocentes(res.data))
      .catch(() => alert('Error al cargar docentes'));

    axios.get<Grupo[]>(`${backendUrl}/api/grupos`)
      .then(res => setGrupos(res.data))
      .catch(() => alert('Error al cargar grupos'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: name === 'cupo' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resultado = await crearProgramacion(formulario);
      console.log('Programación creada:', resultado);
      alert('Programación registrada correctamente');
      setFormulario({
        docenteId: '',
        grupoId: '',
        salida: '',
        fecha: '',
        horaSalida: '',
        horaRegreso: '',
        destino: '',
        cupo: 0,
      });
    } catch (error) {
      console.error('Error al crear programación:', error);
      alert('Hubo un error al registrar la programación');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200 mt-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
        Crear Programación
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-5">

        <div>
          <label htmlFor="docenteId" className="block mb-1 font-medium text-gray-700">
            Docente
          </label>
          <select
            id="docenteId"
            name="docenteId"
            value={formulario.docenteId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Seleccione un docente --</option>
            {docentes.map(d => (
              <option key={d.id} value={d.id}>
                {d.nombre} {d.apellido}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="grupoId" className="block mb-1 font-medium text-gray-700">
            Grupo
          </label>
          <select
            id="grupoId"
            name="grupoId"
            value={formulario.grupoId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Seleccione un grupo --</option>
            {grupos.map(g => (
              <option key={g.id} value={g.id}>
                {g.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="salida" className="block mb-1 font-medium text-gray-700">
            Salida
          </label>
          <input
            id="salida"
            type="text"
            name="salida"
            value={formulario.salida}
            onChange={handleChange}
            placeholder="Lugar de salida"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="fecha" className="block mb-1 font-medium text-gray-700">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="horaSalida" className="block mb-1 font-medium text-gray-700">
            Hora de Salida
          </label>
          <input
            id="horaSalida"
            type="time"
            name="horaSalida"
            value={formulario.horaSalida}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="horaRegreso" className="block mb-1 font-medium text-gray-700">
            Hora de Regreso
          </label>
          <input
            id="horaRegreso"
            type="time"
            name="horaRegreso"
            value={formulario.horaRegreso}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="destino" className="block mb-1 font-medium text-gray-700">
            Destino
          </label>
          <input
            id="destino"
            type="text"
            name="destino"
            value={formulario.destino}
            onChange={handleChange}
            placeholder="Destino"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="cupo" className="block mb-1 font-medium text-gray-700">
            Cupo
          </label>
          <input
            id="cupo"
            type="number"
            name="cupo"
            value={formulario.cupo}
            onChange={handleChange}
            min={0}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CrearProgramacion;
