import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarItemProps {
  title: string;
  subItems: { name: string; href: string }[];
  onSelect: (itemName: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, subItems, onSelect, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
      >
        <span className="text-white font-bold text-base">{title}</span>
        {isOpen ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
      </button>

      <div className={`ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {subItems.map((sub, index) => (
          <button
            key={index}
            onClick={() => onSelect(sub.name)}
            className="block w-full text-left text-sm font-medium text-white bg-blue-600 hover:bg-white hover:text-blue-800 border border-blue-400 px-4 py-2 rounded-md transition-all shadow-md"
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarItem;
