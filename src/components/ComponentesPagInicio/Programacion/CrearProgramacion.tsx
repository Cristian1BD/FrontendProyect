import React, { useState, useEffect } from 'react';
import { crearProgramacion } from '../../../services/Paginainicio/PagServiceProgrmacion/programacionService';
import axios from 'axios';
import { type Programacion } from '../../../services/Paginainicio/PagServiceProgrmacion/ProgramacionTypes';

type Docente = { id: number; nombre: string; apellido: string };
type Grupo = { id: number; nombre: string };

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CrearProgramacion = () => {
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
    // Cargar docentes
    axios.get<Docente[]>(`${backendUrl}/api/docentes`)
      .then(res => setDocentes(res.data))
      .catch(() => alert('Error al cargar docentes'));

    // Cargar grupos
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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Crear Programación</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">

        <div>
          <label className="block font-medium mb-1">Docente</label>
          <select
            name="docenteId"
            value={formulario.docenteId}
            onChange={handleChange}
            className="border p-2 w-full rounded"
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
          <label className="block font-medium mb-1">Grupo</label>
          <select
            name="grupoId"
            value={formulario.grupoId}
            onChange={handleChange}
            className="border p-2 w-full rounded"
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
          <label className="block font-medium mb-1">Salida</label>
          <input
            type="text"
            name="salida"
            value={formulario.salida}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Salida"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Hora de Salida</label>
          <input
            type="time"
            name="horaSalida"
            value={formulario.horaSalida}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Hora de Regreso</label>
          <input
            type="time"
            name="horaRegreso"
            value={formulario.horaRegreso}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Destino</label>
          <input
            type="text"
            name="destino"
            value={formulario.destino}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Destino"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Cupo</label>
          <input
            type="number"
            name="cupo"
            value={formulario.cupo}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            min={0}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Crear
        </button>

      </form>
    </div>
  );
};

export default CrearProgramacion;
