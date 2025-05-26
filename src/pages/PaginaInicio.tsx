import React, { useState } from 'react';
import GruposCrear from '../components/ComponentesPagInicio/Grupos/CrearGrupos';
import GruposVer from '../components/ComponentesPagInicio/Grupos/GruposVer';
import GruposLista from '../components/ComponentesPagInicio/Grupos/GruposLista';
import VerEstudiante from '../components/ComponentesPagInicio/Estudiantes/VerEstudiante';
import AsignarEstudiante from '../components/ComponentesPagInicio/Estudiantes/AsignarEstudiante';
import EliminarEstudiante from '../components/ComponentesPagInicio/Estudiantes/EliminarEstudiante';
import EliminarProgramacion from '../components/ComponentesPagInicio/Programacion/EliminarProgramacion';
import CrearProgramacion from '../components/ComponentesPagInicio/Programacion/CrearProgramacion';
import VerProgramaciones from '../components/ComponentesPagInicio/Programacion/VerProgramaciones';
import EncabezadoSalidas from '../components/ComponentesPagInicio/Actividades/EncabezadoSalidas';
import HorariosProgramacion from '../components/ComponentesPagInicio/Horario/HorariosProgramacion';
import ResponsiveLayout from '../components/Layout/ResponsiveLayout';

const PaginaInicio: React.FC = () => {
  const [seccionActual, setSeccionActual] = useState('');

  const renderContenido = () => {
    switch (seccionActual) {
      case 'Ver Grupos':
        return <GruposVer />;
      case 'Crear Grupo':
        return <GruposCrear />;
      case 'Eliminar/Modificar Grupo':
        return <GruposLista />;
      case 'Ver Estudiantes':
        return <VerEstudiante />;
      case 'Asignar Estudiante':
        return <AsignarEstudiante />;
      case 'Modificar Estudiante':
        return <EliminarEstudiante />;
      case 'Crear Programacion':
        return <CrearProgramacion />;
      case 'Eliminar Programacion':
        return <EliminarProgramacion />;
      case 'Ver Programaciones':
        return <VerProgramaciones />;
      case 'Lista Actividades':
        return <EncabezadoSalidas />;
      case 'Horario':
        return <HorariosProgramacion />;
    }
  };

  return (
    <ResponsiveLayout onSelectItem={setSeccionActual}>
      {renderContenido()}
    </ResponsiveLayout>
  );

};

export default PaginaInicio;

