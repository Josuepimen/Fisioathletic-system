import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginRoutes from "./Routes/LoginRoutes";
import DashboardRoutes from "./Routes/DashboardRoutes";
import SesionesRoutes from "./Routes/SesionesRoutes";
import PacientesRoutes from "./Routes/PacientesRoutes";

export default function App() {
  return (
    <Routes>
      {/* Redirección por defecto */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Módulos principales */}
      <Route path="/login/*" element={<LoginRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="/sesiones/*" element={<SesionesRoutes />} />
      <Route path="/pacientes/*" element={<PacientesRoutes />} />

      {/* 404 */}
      <Route
        path="*"
        element={<h1 className="text-center text-main text-2xl mt-10">404 | Página no encontrada</h1>}
      />
    </Routes>
  );
}
