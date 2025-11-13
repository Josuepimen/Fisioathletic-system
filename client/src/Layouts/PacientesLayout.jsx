import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PacienteLayout() {
  return (
    <div className="min-h-screen flex bg-neutral text-font">
      {/* SIDEBAR */}
      <aside className="w-64 bg-main text-white flex flex-col p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Mi Espacio</h2>
          <p className="text-sm text-minor">Portal del Paciente</p>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink to="/paciente" className="hover:text-minor transition-all">🏠 Inicio</NavLink>
          <NavLink to="/paciente/perfil" className="hover:text-minor">👤 Perfil</NavLink>
          <NavLink to="/paciente/sesiones" className="hover:text-minor">📅 Mis Sesiones</NavLink>
          <NavLink to="/paciente/ejercicios" className="hover:text-minor">💪 Ejercicios</NavLink>
          <NavLink to="/paciente/historial" className="hover:text-minor">📈 Evolución</NavLink>
        </nav>

        <button className="mt-auto bg-accent hover:bg-minor text-white py-2 rounded-xl transition-all">
          Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
