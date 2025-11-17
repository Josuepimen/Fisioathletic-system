import { motion } from "framer-motion";
import InputField from "../../Components/pacientes/InputField";
import { Save } from "lucide-react";
import { useState } from "react";

export default function PacienteForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    genero: "",
    nacimiento: "",
    telefono: "",
    email: "",
    motivo: "",
    diagnostico: "",
    observaciones: "",
    estado: "Activo",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Paciente registrado (mock) — listo para backend 💚");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 border border-neutral/60 p-10 rounded-3xl shadow-xl max-w-5xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-font mb-10 text-center">
        Registrar Paciente
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* SECCIÓN 1: Datos personales */}
        <div className="grid grid-cols-2 gap-8">

          <InputField
            label="Nombre Completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <InputField
            label="Edad"
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />

          {/* Select Genero */}
          <div className="flex flex-col gap-1">
            <label className="text-font font-medium">Género</label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font"
            >
              <option value="">Seleccionar...</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </div>

          <InputField
            label="Fecha de nacimiento"
            type="date"
            name="nacimiento"
            value={formData.nacimiento}
            onChange={handleChange}
          />

          <InputField
            label="Telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* SECCIÓN 2: Datos clínicos */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-font font-medium">Motivo de consulta</label>
            <textarea
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font h-24"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-font font-medium">Diagnóstico inicial</label>
            <textarea
              name="diagnostico"
              value={formData.diagnostico}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font h-24"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-font font-medium">Observaciones</label>
            <textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font h-24"
            ></textarea>
          </div>

          {/* ESTADO */}
          <div className="flex flex-col gap-1 w-52">
            <label className="text-font font-medium">Estado</label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>

        {/* BOTÓN */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-main text-white px-10 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-accent transition shadow-sm"
          >
            <Save size={20} /> Registrar Paciente
          </button>
        </div>

      </form>
    </motion.div>
  );
}
