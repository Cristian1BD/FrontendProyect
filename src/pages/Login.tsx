import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes validar los datos del formulario si lo deseas.
    // Por ahora solo redirecciona directamente.
    navigate("/Inicio");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900">Nombre De La Plataforma</h1>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Inicia sesión en tu cuenta</h2>
          <p className="text-sm text-gray-500">Ingresa tus credenciales para continuar</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email@domain.com"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white font-semibold hover:bg-blue-900 transition"
          >
            Continuar
          </button>
        </form>

        <p className="text-xs text-gray-400">
          Al hacer clic en continuar, aceptas nuestros{" "}
          <span className="underline cursor-pointer text-blue-700 hover:text-blue-900">Términos de servicio</span> y{" "}
          <span className="underline cursor-pointer text-blue-700 hover:text-blue-900">Política de privacidad</span>.
        </p>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;