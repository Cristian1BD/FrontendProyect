// src/components/Header.tsx
import { useUser } from "../../hooks/useUser";
import TEACHER from "../../assets/avatars/Profesor.png";
import STUDENT from "../../assets/avatars/png-Estudiante.png";
import ADMIN from "../../assets/avatars/Organizador.png";


const Header = () => {
  const { role } = useUser();

  const getAvatarByRole = (role: string | null | undefined) => {
    switch (role?.toUpperCase()) {
      case "TEACHER":
        return TEACHER;
      case "ADMIN":
        return ADMIN;
      case "STUDENT":
      default:
        return STUDENT;
    }
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-blue-200 bg-white shadow-sm gap-4">
      <div className="text-base font-semibold text-blue-900"></div>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm shadow w-full sm:w-auto">
          {role || "Invitado"}
        </button>
        <img
          src={getAvatarByRole(role)}
          alt="Avatar"
          className="w-9 h-9 rounded-full object-cover border border-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;

