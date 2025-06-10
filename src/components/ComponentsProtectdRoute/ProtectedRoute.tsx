// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface Props {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: Props) => {
  const { role } = useAuth();

  if (!role) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(role)) return <div>No tenés permiso</div>;

  return children;
};

export default ProtectedRoute;
