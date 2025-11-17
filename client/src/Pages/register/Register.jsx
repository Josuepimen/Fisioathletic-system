// src/Pages/Register.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí luego conectarás tu lógica de registro
    navigate("/login"); // redirige al login
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#F3E9E1]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#8CA59A] mb-6">
          Crear cuenta
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CA59A]"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CA59A]"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CA59A]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#8CA59A] text-white py-3 rounded-xl hover:bg-[#7b958a] transition-colors"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿Ya tienes una cuenta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#8CA59A] font-semibold hover:underline"
          >
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
}
