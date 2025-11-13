import React from "react";
import { Routes, Route } from "react-router-dom";
import { PacientesProvider } from "../Context/PacientesContext";
import PacientesLayout from "../Layouts/PacientesLayout";
import PacientesList from "../Pages/pacientes/PacientesList";
import PacienteForm from "../Pages/pacientes/PacienteForm";
import PacienteHistorial from "../Pages/pacientes/PacienteHistorial";
import PacienteReporte from "../Pages/pacientes/PacienteReporte";

export default function PacientesRoutes() {
  return (
    <PacientesProvider>
      <Routes>
        <Route element={<PacientesLayout />}>
          <Route index element={<PacientesList />} />
          <Route path="nuevo" element={<PacienteForm />} />
          <Route path="historial/:id" element={<PacienteHistorial />} />
          <Route path="reporte/:id" element={<PacienteReporte />} />
        </Route>
      </Routes>
    </PacientesProvider>
  );
}
