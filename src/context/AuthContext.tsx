// src/context/AuthContext.tsx
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  role: string | null;
  email: string | null;
  logout: () => void;
  setToken: (token: string | null) => void;
  setRole: (role: string | null) => void;
  setEmail: (email: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, email, logout, setToken, setRole, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
