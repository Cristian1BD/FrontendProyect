import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { useAuth } from '../../../context/AuthContext';

interface SidebarProps {
  onSelectItem: (itemName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectItem }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { role } = useAuth(); // <<<<< ACA USAMOS EL ROL

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const menuItems = [
    {
      title: 'Grupos',
      allowedRoles: ['ADMIN', 'TEACHER'],
      subItems: [
        { name: 'Ver Grupos', href: '#' },
        { name: 'Crear Grupo', href: '#' },
        { name: 'Eliminar Grupo', href: '#' },
        { name: 'Modificar Grupo', href: '#' },
      ]
    },
    {
      title: 'Estudiante',
      allowedRoles: ['ADMIN', 'TEACHER'],
      subItems: [
        { name: 'Ver Estudiantes', href: '#' },
        { name: 'Asignar Estudiante', href: '#' },
        { name: 'Modificar Estudiante', href: '#' },
      ]
    },
    {
      title: 'Programacion',
      allowedRoles: ['ADMIN'],
      subItems: [
        { name: 'Crear Programacion', href: '#' },
        { name: 'Eliminar Programacion', href: '#' },
        { name: 'Ver Programaciones', href: '#' },
      ]
    },
    {
      title: 'Horarios',
      allowedRoles: ['STUDENT', 'ADMIN', 'TEACHER'],
      subItems: [
        { name: 'Horario', href: '#' },
      ]
    },
  ];

  // Filtramos ítems según el rol del usuario
  const filteredItems = menuItems.filter(item => item.allowedRoles.includes(role || ''));

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white shadow-md">
      <div className="p-6 border-b border-blue-500">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">Educamp</h1>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        {filteredItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            subItems={item.subItems}
            onSelect={onSelectItem}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </nav>
    </aside>
  );
};


export default Sidebar;
