import React, { useState } from 'react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  onSelectItem: (itemName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectItem }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const menuItems = [
    {
      title: 'Grupos', subItems: [
        { name: 'Ver Grupos', href: '#' },
        { name: 'Crear Grupo', href: '#' },
        { name: 'Eliminar/Modificar Grupo', href: '#' },
      ]
    },
    {
      title: 'Estudiante', subItems: [
        { name: 'Ver Estudiantes', href: '#' },
        { name: 'Asignar Estudiante', href: '#' },
        { name: 'Modificar Estudiante', href: '#' },
      ]
    },
    {
      title: 'Programacion', subItems: [
        { name: 'Crear Programacion', href: '#' },
        { name: 'Eliminar Programacion', href: '#' },
        { name: 'Ver Programaciones', href: '#' },
      ]
    },
    {
      title: 'Actividades', subItems: [
        { name: 'Lista Actividades', href: '#' },
        { name: 'Modificar Notas', href: '#' },
        { name: 'Eliminar Notas', href: '#' },
      ]
    },
    {
      title: 'Horarios', subItems: [
        { name: 'Horario', href: '#' },
      ]
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white shadow-md">
      <div className="p-6 border-b border-blue-500">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">Nombre De La Plataforma</h1>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item, index) => (
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
