import { useState } from 'react';
import GrupoEditarForm from './GrupoEditarForm';

interface Grupo {
  nombre: string;
  estudiantes: number;
  hora: string;
  lugar: string;
  salida: string;
}

const GruposLista: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([
    { nombre: 'FIG-112', estudiantes: 20, hora: '6:AM', lugar: 'Estadio', salida: 'Enombre' },
    { nombre: 'FIG-113', estudiantes: 25, hora: '7:AM', lugar: 'Auditorio', salida: 'Otro' },
  ]);

  const [editandoGrupo, setEditandoGrupo] = useState<Grupo | null>(null);
  const [indexEditando, setIndexEditando] = useState<number | null>(null);

  const handleGuardar = (grupoActualizado: Grupo) => {
    if (indexEditando !== null) {
      const nuevosGrupos = [...grupos];
      nuevosGrupos[indexEditando] = grupoActualizado;
      setGrupos(nuevosGrupos);
      setEditandoGrupo(null);
      setIndexEditando(null);
    }
  };

  const handleEliminar = (index: number) => {
    const nuevosGrupos = grupos.filter((_, i) => i !== index);
    setGrupos(nuevosGrupos);
  };

  return (
    <div className="border border-blue-400 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Lista de Grupos</h2>
      <table className="w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Grupo</th>
            <th>Estudiantes</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
            <th>Acciones</th>
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
              <td className="space-x-2">
                <button
                  className="text-blue-600 underline text-xs"
                  onClick={() => {
                    setEditandoGrupo(grupo);
                    setIndexEditando(index);
                  }}
                >
                  Editar
                </button>
                <button
                  className="text-red-600 underline text-xs"
                  onClick={() => handleEliminar(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editandoGrupo && indexEditando !== null && (
        <GrupoEditarForm
          grupo={editandoGrupo}
          onGuardar={handleGuardar}
          onCancelar={() => {
            setEditandoGrupo(null);
            setIndexEditando(null);
          }}
        />
      )}
    </div>
  );
};

export default GruposLista;
