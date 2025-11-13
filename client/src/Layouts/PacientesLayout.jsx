import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

export default function PacientesLayout() {
  return (
    <div className="min-h-screen flex bg-neutral text-font)] font-sans">
      {/* Sidebar del módulo */}
      <aside className="w-64 bg-main text-white flex flex-col p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">HCE Fisioterapia</h2>
          <p className="text-sm text-minor">FisioAthletic Center</p>
        </div>

        <nav className="flex flex-col gap-3 text-lg">
          <NavLink
            to="/pacientes"
            className={({ isActive }) =>
              `hover:text-minor flex items-center gap-1  ${isActive ? "font-semibold underline" : ""}`
            }
          >
            <FaUserPlus/> Lista de Pacientes
          </NavLink>
          <NavLink to="/pacientes/nuevo" className="hover:text-minor">
            ➕ Registrar Paciente
          </NavLink>
          <NavLink to="/pacientes/historial" className="hover:text-minor flex items-center gap-2 text-xl">
            <FaClipboardList />  Historia Clínica
          </NavLink>
          <NavLink to="/pacientes/reporte" className="hover:text-minor">
            📄 Reportes Médicos
          </NavLink>
        </nav>

        <div className="mt-auto text-sm text-minor">
          <p>Versión 1.0 — Módulo HCE</p>
        </div>
      </aside>

      {/* Zona dinámica de contenido */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
