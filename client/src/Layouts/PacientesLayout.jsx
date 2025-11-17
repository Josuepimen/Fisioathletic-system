import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Plus,
  FileText,
  BarChart3
} from "lucide-react";

export default function PacientesLayout() {
  const { pathname } = useLocation();

  const menu = [
    { to: "/pacientes", label: "Lista de Pacientes", icon: Users },
    { to: "/pacientes/nuevo", label: "Registrar Paciente", icon: Plus },
    { to: "/pacientes/historial", label: "Historial Clínica", icon: FileText },
    { to: "/pacientes/reportes", label: "Reportes Médicos", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen flex">

      {/* SIDEBAR estilo dashboard */}
      <aside className="w-72 bg-main flex flex-col p-8 text-white">
        
        {/* Titulo */}
        <h2 className="text-3xl font-bold mb-10">HCE</h2>
        
        <nav className="flex flex-col gap-4">
          {menu.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;

            return (
              <Link
                key={to}
                to={to}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-white transition-all 
                  ${active 
                    ? "bg-white/20 text-white font-semibold shadow-sm" 
                    : "hover:bg-white/10 text-white/80"}
                `}
              >
                <Icon
                  size={20}
                  className={`${
                    active ? "text-white" : "text-white/80"
                  }`}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm text-white/60">
          Módulo HCE
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 bg-neutral p-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.50 }}
          className="max-w-6xl mx-auto"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
