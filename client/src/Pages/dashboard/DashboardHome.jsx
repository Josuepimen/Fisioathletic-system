/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Activity, Users, Calendar, FileCheck } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import SplashScreen from "../../Components/SplashScreen";

const COLORS = {
  text: "#37433D",
  card1: "#E5C3B3",
  card2: "#AEC4B2",
  card3: "#F6D6A9",
  card4: "#F3B3A3",
};

// 🔄 Datos de prueba (fallback)
const fallbackGraph = [
{ month: "Ene", sessions: 400 },
{ month: "Feb", sessions: 600 }, 
{ month: "Mar", sessions: 800 }, 
{ month: "Abr", sessions: 750 }, 
{ month: "May", sessions: 1000 }, 
{ month: "Jun", sessions: 900 }, 
{ month: "Jul", sessions: 1200 }, 
{ month: "Ago", sessions: 1100 }, 
{ month: "Sep", sessions: 1300 }, 
{ month: "Oct", sessions: 1250 }, 
{ month: "Nov", sessions: 1400 }, 
{ month: "Dic", sessions: 1500 },
];

const fallbackAppointments = [
  { name: "Samuel Zambrano", time: "1:00 PM" },
  { name: "Edwim Bello", time: "1:20 PM" },
  { name: "Zair Borjas", time: "1:30 PM" },
  { name: "Josue Pimentel", time: "2:30 PM" },
];

// 🟢 Componente reutilizable
const MetricCard = ({ title, value, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col justify-between bg-white rounded-xl p-5 shadow-md transition"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-semibold uppercase text-gray-600">{title}</p>
      <Icon size={20} className="text-gray-500" />
    </div>
    <p className="text-3xl font-extrabold text-font">{value}</p>
  </motion.div>
);

export default function DashboardHome() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalPatients: 0,
    activeSessions: 0,
    completedTreatments: 0,
    avgDuration: 0,
  });

  const [chartData, setChartData] = useState(fallbackGraph);
  const [appointments, setAppointments] = useState(fallbackAppointments);

  const [error, setError] = useState(null);

  // 📌 1. Cargar datos reales desde backend
  const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/dashboard");
      if (!response.ok) throw new Error("No se pudo obtener data del backend");

      const data = await response.json();

      // 📌 Guardar métricas reales
      setMetrics({
        totalPatients: data.totalPatients,
        activeSessions: data.activeSessions,
        completedTreatments: data.completedTreatments,
        avgDuration: data.avgDuration,
      });

      // 📌 Guardar gráfico real
      setChartData(data.sessionsChart || fallbackGraph);

      // 📌 Guardar citas reales
      setAppointments(data.appointments || fallbackAppointments);
    } catch (err) {
      console.warn("⚠ Backend no disponible. Usando datos locales...");
      setError("Mostrando datos temporales.");
    }
  };

  // 📌 2. Llamamos al backend cuando cargue el componente
  useEffect(() => {
    fetchDashboardData();
    setTimeout(() => setLoading(false), 800); // splash screen
  }, []);

  // 📌 3. Función para generar reporte en backend
  const generateReport = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/reportes/generar", {
        method: "POST",
      });
      if (!res.ok) throw new Error("Error generando reporte");

      const file = await res.blob();
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reporte_fisioterapeutico.pdf";
      a.click();
    } catch (err) {
      alert("No se pudo generar el reporte (backend no disponible)");
    }
  };

  if (loading) return <SplashScreen onFinish={() => setLoading(false)} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* 🟡 Mostrar advertencia si falta backend */}
      {error && (
        <p className="p-3 bg-yellow-200 rounded-lg text-sm">{error}</p>
      )}

      {/* MÉTRICAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total de Pacientes" value={metrics.totalPatients} icon={Users} color={COLORS.card2} />
        <MetricCard title="Sesiones activas" value={metrics.activeSessions} icon={Activity} color={COLORS.card1} />
        <MetricCard title="Tratamientos completados" value={metrics.completedTreatments} icon={FileCheck} color={COLORS.card3} />
        <MetricCard title="Duración media" value={metrics.avgDuration} icon={Calendar} color={COLORS.card4} />
      </div>

      {/* GRÁFICO + CITAS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* GRÁFICO */}
        <motion.div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Evolución de sesiones mensuales</h2>

          <div className="h-64 rounded-lg bg-[#F3EFE9] p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sessions" stroke={COLORS.card2} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* CITAS */}
        <motion.div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
          <h2 className="text-xl font-bold mb-4">Próximas citas</h2>
          <ul className="flex-1 space-y-3 text-sm">
            {appointments.map((apt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg border-l-4 border-[#E5C3B3] bg-[#E5C3B3]/20"
              >
                <span className="font-semibold">{apt.name}</span> –{" "}
                <span className="text-gray-600">{apt.time}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={generateReport}
            className="mt-6 bg-main hover:bg-accent text-white py-3 px-6 rounded-lg"
          >
            Generar Reporte
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
