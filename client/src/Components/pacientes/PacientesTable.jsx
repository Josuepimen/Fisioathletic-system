import React from "react";

export default function PacientesTable({ pacientes }) {
  return (
    <div className="bg-neutral/50 border border-neutral/60 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Lista de Pacientes</h3>

      <table className="w-full text-left text-font">
        <thead>
          <tr className="border-b border-neutral/60">
            <th className="py-3">Nombre</th>
            <th className="py-3">Edad</th>
            <th className="py-3">Género</th>
            <th className="py-3">Fecha de ingreso</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((p, index) => (
            <tr
              key={index}
              className="border-b border-neutral/40 hover:bg-main/10 transition"
            >
              <td className="py-3">{p.nombre}</td>
              <td>{p.edad}</td>
              <td>{p.genero}</td>
              <td>{p.ingreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
