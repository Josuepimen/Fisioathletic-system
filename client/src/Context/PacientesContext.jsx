import React, { createContext, useContext, useState } from "react";

const PacientesContext = createContext();

export const usePacientes = () => useContext(PacientesContext);

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Ana López", edad: 32, diagnostico: "Lumbalgia", progreso: 85 },
    { id: 2, nombre: "Carlos Pérez", edad: 40, diagnostico: "Lesión de rodilla", progreso: 60 },
  ]);

  const agregarPaciente = (nuevo) => {
    setPacientes((prev) => [...prev, { ...nuevo, id: prev.length + 1 }]);
  };

  return (
    <PacientesContext.Provider value={{ pacientes, agregarPaciente }}>
      {children}
    </PacientesContext.Provider>
  );
};
