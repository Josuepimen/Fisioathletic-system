import React from "react";
import SearchBar from "../../Components/pacientes/SearchBar";
import PacientesTable from "../../Components/pacientes/PacientesTable";
import UltimosPacientesCard from "../../Components/pacientes/UltimosPacientesCard";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

const pacientesMock = [
  { nombre: "Juan Pérez", edad: 28, genero: "M", ingreso: "12/03/2023" },
  { nombre: "Ana Martínez", edad: 34, genero: "F", ingreso: "02/02/2023" },
  { nombre: "Luis García", edad: 41, genero: "M", ingreso: "15/01/2023" },
  { nombre: "María López", edad: 52, genero: "F", ingreso: "03/01/2023" },
];

export default function PacientesList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-10"
    >
      {/* TITULO */}
      <h1 className="text-4xl font-extrabold text-font">
        Hola, Fisioterapeuta
      </h1>

      {/* SEARCH + BUTTON */}
      <div className="flex gap-6 items-center">
        <div className="flex-1">
          <SearchBar />
        </div>

        <button className="bg-main px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 shadow-sm hover:bg-accent transition">
          <UserPlus size={20} /> Agregar Paciente
        </button>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <PacientesTable pacientes={pacientesMock} />
        </div>

        <UltimosPacientesCard pacientes={pacientesMock.slice(0, 3)} />
      </div>
    </motion.div>
  );
}
