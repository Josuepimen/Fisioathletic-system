import React from "react";

export default function UltimosPacientesCard({ pacientes }) {
  return (
    <div className="bg-neutral/50 border border-neutral/60 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Últimos Pacientes</h3>

      <ul className="space-y-3">
        {pacientes.map((p, index) => (
          <li key={index} className="flex justify-between">
            <span>{p.nombre}</span>
            <span className="opacity-70">{p.ingreso}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
