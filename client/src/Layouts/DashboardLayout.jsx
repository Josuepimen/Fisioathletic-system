import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Users, Calendar, FileText, Settings } from "lucide-react";

function DashboardLayout() {
  const menuItems = [
    { to: "/dashboard", label: "Home", icon: <Home size={18} /> },
    { to: "/pacientes", label: "Patients", icon: <Users size={18} /> },
    { to: "/sesiones", label: "Appointments", icon: <Calendar size={18} /> },
    { to: "/reportes", label: "Reports", icon: <FileText size={18} /> },
    { to: "/ajustes", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen flex bg-[#F3EFE9] text-font">
      {/* Sidebar */}
      <aside className="w-64 bg-main text-white flex flex-col p-6 space-y-8 shadow-lg">
        <h2 className="text-2xl font-bold tracking-wide mb-4">FisioAthletic Center</h2>

        <nav className="flex flex-col gap-3 flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-[#AEC4B2] text-font font-semibold"
                    : "hover:bg-[#AEC4B2]/30"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 🔻 Footer en el sidebar */}
        <footer className="text-xs text-white/80 mt-6 border-t border-white/20 pt-4">
          © 2025 FisioAthletic Center  
        </footer>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />

        {/* 🔻 Footer del contenido */}
        <div className="mt-10 text-center text-xs text-font/60">
          © 2025 FisioAthletic Center — Plataforma Digital de Fisioterapia.
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
