import { useState } from 'react';
import type { ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header';

interface ResponsiveLayoutProps {
  children: ReactNode;
  onSelectItem: (item: string) => void;
}

const ResponsiveLayout = ({ children, onSelectItem }: ResponsiveLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar desktop */}
      <div className="md:block hidden w-64">
        <Sidebar onSelectItem={onSelectItem} />
      </div>

      {/* Sidebar mobile toggle */}
      <div className="md:hidden bg-blue-900 text-white flex justify-between items-center px-4 py-3">
        <span className="font-bold text-lg">Educamp</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-40">
          <div className="bg-white w-64 h-full shadow-xl">
            <Sidebar
              onSelectItem={(item) => {
                onSelectItem(item);
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-100 via-white to-white">
        <Header />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {children ? (
            children
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <img
                src="public/EduCamp.png"
                alt="EduCamp Logo"
                className="w-96 h-auto opacity-70 mb-4"
              />
              <h2 className="text-2xl font-semibold text-blue-900">
                Bienvenido a EduCamp
              </h2>
              <p className="text-gray-600 mt-2">
                Selecciona una opción del menú para comenzar.
              </p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default ResponsiveLayout;
