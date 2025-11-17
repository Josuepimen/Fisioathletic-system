import React from "react";
import { motion } from "framer-motion";
import InputField from "../../Components/pacientes/InputField";
import { Save } from "lucide-react";
import { useState } from "react";

export default function PacienteForm() {
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: "",
    edad: "",
    genero: "",
    nacimiento: "",
    telefono: "",
    email: "",
    identificacion: "",
    ocupacion: "",
    direccion: "",

    // Administrativos
    ingreso: "",
    expediente: "",
    estado: "Activo",
    aseguradora: "",
    responsable: "",

    // Antecedentes
    medicos: "",
    quirurgicos: "",
    traumaticos: "",
    deportivos: "",
    medicacion: "",
    alergias: "",

    // Motivo de consulta
    motivo: "",
    inicioDolor: "",
    mecanismo: "",
    zonaDolor: "",
    frecuenciaDolor: "",
    tipoDolor: "",
    escalaDolor: 0,

    // Valoración física
    inspeccion: "",
    postura: "",
    rangoMovimiento: "",
    palpacion: "",
    fuerzaMuscular: "",
    sensibilidad: "",
    movilidadArticular: "",
    pruebasOrtopedicas: "",
    marcha: "",

    // AVD
    limitaciones: "",
    actividadesDolor: "",
    actividadesMejoran: "",

    // Plan terapeútico
    diagnostico: "",
    objetivosCorto: "",
    objetivosLargo: "",
    tratamiento: "",
    frecuenciaSesiones: "",
    observaciones: "",

    // Firma
    fisio: "",
    fechaValoracion: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro clínico completo:", formData);
    alert("Paciente registrado — listo para enviar al backend!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 p-10 rounded-3xl border border-neutral/60 shadow-xl max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-font mb-10 text-center">
        Registrar Paciente
      </h1>

      <form onSubmit={handleSubmit} className="space-y-12">

        {/* ------------------- DATOS PERSONALES ------------------- */}
        <Section title="Datos Personales">
          <div className="grid grid-cols-2 gap-8">
            <InputField label="Nombre Completo" name="nombre" value={formData.nombre} onChange={handleChange} />
            <InputField label="Edad" type="number" name="edad" value={formData.edad} onChange={handleChange} />

            <div className="flex flex-col gap-1">
              <label>Género</label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm"
              >
                <option value="">Seleccionar...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </select>
            </div>

            <InputField label="Fecha de nacimiento" type="date" name="nacimiento" value={formData.nacimiento} onChange={handleChange} />

            <InputField label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />

            <InputField label="Identificación (C.I / ID)" name="identificacion" value={formData.identificacion} onChange={handleChange} />
            <InputField label="Ocupación" name="ocupacion" value={formData.ocupacion} onChange={handleChange} />

            <InputField label="Dirección" name="direccion" value={formData.direccion} onChange={handleChange} />
          </div>
        </Section>

        {/* ------------------- ADMINISTRATIVO ------------------- */}
        <Section title="Información Administrativa">
          <div className="grid grid-cols-2 gap-8">
            <InputField label="Fecha de ingreso" type="date" name="ingreso" value={formData.ingreso} onChange={handleChange} />
            <InputField label="Expediente" name="expediente" value={formData.expediente} onChange={handleChange} />

            <div className="flex flex-col gap-1">
              <label>Estado</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="bg-white border border-neutral/60 rounded-xl p-2 shadow-sm"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            <InputField label="Aseguradora" name="aseguradora" value={formData.aseguradora} onChange={handleChange} />
            <InputField label="Responsable / Acompañante" name="responsable" value={formData.responsable} onChange={handleChange} />
          </div>
        </Section>

        {/* ------------------- ANTECEDENTES ------------------- */}
        <Section title="Antecedentes Clínicos">
          <TextArea label="Antecedentes Médicos" name="medicos" value={formData.medicos} onChange={handleChange} />
          <TextArea label="Antecedentes Quirúrgicos" name="quirurgicos" value={formData.quirurgicos} onChange={handleChange} />
          <TextArea label="Antecedentes Traumáticos" name="traumaticos" value={formData.traumaticos} onChange={handleChange} />
          <TextArea label="Antecedentes Deportivos" name="deportivos" value={formData.deportivos} onChange={handleChange} />
          <TextArea label="Medicación Actual" name="medicacion" value={formData.medicacion} onChange={handleChange} />
          <TextArea label="Alergias" name="alergias" value={formData.alergias} onChange={handleChange} />
        </Section>

        {/* ------------------- MOTIVO ------------------- */}
        <Section title="Motivo de Consulta">
          <TextArea label="Motivo Principal" name="motivo" value={formData.motivo} onChange={handleChange} />
          <InputField label="Inicio del dolor" name="inicioDolor" value={formData.inicioDolor} onChange={handleChange} />
          <InputField label="Mecanismo de lesión" name="mecanismo" value={formData.mecanismo} onChange={handleChange} />
          <InputField label="Zona del dolor" name="zonaDolor" value={formData.zonaDolor} onChange={handleChange} />
          <InputField label="Frecuencia del dolor" name="frecuenciaDolor" value={formData.frecuenciaDolor} onChange={handleChange} />
          <InputField label="Tipo de dolor" name="tipoDolor" value={formData.tipoDolor} onChange={handleChange} />

          <div className="flex flex-col gap-1 w-52">
            <label>Escala de dolor (EVA 0–10)</label>
            <input
              type="number"
              min="0"
              max="10"
              name="escalaDolor"
              value={formData.escalaDolor}
              onChange={handleChange}
              className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm"
            />
          </div>
        </Section>

        {/* ------------------- VALORACION FISICA ------------------- */}
        <Section title="Valoración Física">
          <TextArea label="Inspección" name="inspeccion" value={formData.inspeccion} onChange={handleChange} />
          <TextArea label="Postura" name="postura" value={formData.postura} onChange={handleChange} />
          <TextArea label="Rango de Movimiento" name="rangoMovimiento" value={formData.rangoMovimiento} onChange={handleChange} />
          <TextArea label="Palpación" name="palpacion" value={formData.palpacion} onChange={handleChange} />
          <TextArea label="Fuerza Muscular" name="fuerzaMuscular" value={formData.fuerzaMuscular} onChange={handleChange} />
          <TextArea label="Sensibilidad" name="sensibilidad" value={formData.sensibilidad} onChange={handleChange} />
          <TextArea label="Movilidad Articular" name="movilidadArticular" value={formData.movilidadArticular} onChange={handleChange} />
          <TextArea label="Pruebas Ortopédicas" name="pruebasOrtopedicas" value={formData.pruebasOrtopedicas} onChange={handleChange} />
          <TextArea label="Marcha" name="marcha" value={formData.marcha} onChange={handleChange} />
        </Section>

        {/* ------------------- AVD ------------------- */}
        <Section title="Actividades de la Vida Diaria (AVD)">
          <TextArea label="Limitaciones funcionales" name="limitaciones" value={formData.limitaciones} onChange={handleChange} />
          <TextArea label="Actividades que generan dolor" name="actividadesDolor" value={formData.actividadesDolor} onChange={handleChange} />
          <TextArea label="Actividades que alivian" name="actividadesMejoran" value={formData.actividadesMejoran} onChange={handleChange} />
        </Section>

        {/* ------------------- PLAN ------------------- */}
        <Section title="Plan de Tratamiento">
          <TextArea label="Diagnóstico Fisioterapéutico" name="diagnostico" value={formData.diagnostico} onChange={handleChange} />
          <TextArea label="Objetivos a Corto Plazo" name="objetivosCorto" value={formData.objetivosCorto} onChange={handleChange} />
          <TextArea label="Objetivos a Largo Plazo" name="objetivosLargo" value={formData.objetivosLargo} onChange={handleChange} />
          <TextArea label="Tratamiento Recomendado" name="tratamiento" value={formData.tratamiento} onChange={handleChange} />
          <InputField label="Frecuencia de sesiones" name="frecuenciaSesiones" value={formData.frecuenciaSesiones} onChange={handleChange} />
          <TextArea label="Observaciones" name="observaciones" value={formData.observaciones} onChange={handleChange} />
        </Section>

        {/* ------------------- FIRMA ------------------- */}
        <Section title="Firma del Fisioterapeuta">
          <InputField label="Nombre del fisioterapeuta" name="fisio" value={formData.fisio} onChange={handleChange} />
          <InputField label="Fecha de valoración" type="date" name="fechaValoracion" value={formData.fechaValoracion} onChange={handleChange} />
        </Section>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center">
          <button className="bg-main text-white px-10 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-accent transition shadow">
            <Save size={20} /> Registrar Paciente
          </button>
        </div>
      </form>
    </motion.div>
  );
}

/* --- COMPONENTES AUXILIARES PARA LOS TITULOS --- */
function Section({ title, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-font">{title}</h2>
      {children}
    </div>
  );
}

function TextArea({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-font font-medium">{label}</label>
      <textarea
        {...props}
        className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font h-28"
      ></textarea>
    </div>
  );
}
