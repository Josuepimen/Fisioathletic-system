import React from "react";
import { Link } from "react-router-dom";
import { usePacientes } from "../../Context/PacientesContext";

export default function PacientesList() {
  const { pacientes } = usePacientes();

  return (
    <div>
      <h1 className="text-3xl font-bold text-main mb-6">Lista de Pacientes</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar paciente..."
          className="border border-accent rounded-lg px-3 py-2 focus:outline-main"
        />
        <Link
          to="/pacientes/nuevo"
          className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-minor transition-all"
        >
          + Nuevo Paciente
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="min-w-full text-left">
          <thead className="bg-main text-white">
            <tr>
              <th className="p-3">Nombre</th>
              <th className="p-3">Edad</th>
              <th className="p-3">Diagnóstico</th>
              <th className="p-3">Progreso</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p) => (
              <tr key={p.id} className="border-b hover:bg-neutral/40">
                <td className="p-3">{p.nombre}</td>
                <td className="p-3">{p.edad}</td>
                <td className="p-3">{p.diagnostico}</td>
                <td className="p-3 text-main font-semibold">{p.progreso}%</td>
                <td className="p-3">
                  <Link
                    to={`/pacientes/historial/${p.id}`}
                    className="text-accent hover:underline"
                  >
                    Ver historial
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
