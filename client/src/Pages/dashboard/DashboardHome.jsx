import React, { useState } from "react";
import {
  Activity,
  Users,
  Calendar,
  FileCheck,
} from "lucide-react";
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
import SplashScreen from "../../Components/SplashScreen"; // 👈 Import del splash screen

// 🎨 Colores personalizados
const COLORS = {
  text: "#37433D",
  card1: "#E5C3B3",
  card2: "#AEC4B2",
  card3: "#F6D6A9",
  card4: "#F3B3A3",
};

// 📊 Datos del gráfico
const sampleData = [
  { month: "Jan", sessions: 400 },
  { month: "Feb", sessions: 600 },
  { month: "Mar", sessions: 800 },
  { month: "Apr", sessions: 750 },
  { month: "May", sessions: 1000 },
  { month: "Jun", sessions: 900 },
  { month: "Jul", sessions: 1200 },
];

// 💎 Componente de tarjeta métrica
const MetricCard = ({ title, value, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="flex flex-col justify-between bg-white rounded-xl p-5 shadow-md transition"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-semibold uppercase text-gray-600">{title}</p>
      <Icon size={20} className="text-gray-500" />
    </div>
    <p className="text-3xl font-extrabold text-[#37433D]">{value}</p>
  </motion.div>
);

// 🌟 Componente principal del Dashboard
export default function DashboardHome() {
  const [loading, setLoading] = useState(true);

  // Muestra el SplashScreen mientras carga
  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Tarjetas de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Patients"
          value="154"
          icon={Users}
          color={COLORS.card2}
        />
        <MetricCard
          title="Active Sessions"
          value="3195"
          icon={Activity}
          color={COLORS.card1}
        />
        <MetricCard
          title="Completed Treatments"
          value="804"
          icon={FileCheck}
          color={COLORS.card3}
        />
        <MetricCard
          title="Avg. Session Duration"
          value="2434"
          icon={Calendar}
          color={COLORS.card4}
        />
      </div>

      {/* Gráfico + Próximas citas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 📈 Gráfico interactivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-[#37433D]">
            Evolution of Sessions
          </h2>
          <div className="h-64 rounded-lg bg-[#F3EFE9] p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={sampleData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke={COLORS.card2}
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* 📅 Citas próximas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col"
        >
          <h2 className="text-xl font-bold mb-4 text-[#37433D]">
            Upcoming Appointments
          </h2>
          <ul className="flex-1 space-y-3 text-sm">
            {[
              { name: "Marn Sarin", time: "1:00 PM" },
              { name: "Saun Sarin", time: "1:20 PM" },
              { name: "Slarin", time: "1:30 PM" },
              { name: "Hadclay", time: "2:30 PM" },
            ].map((apt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-3 rounded-lg border-l-4 border-[#E5C3B3] bg-[#E5C3B3]/20 hover:bg-[#E5C3B3]/30 transition cursor-pointer"
              >
                <span className="font-semibold">{apt.name}</span> –{" "}
                <span className="text-gray-600">{apt.time}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 bg-[#8CA59A] hover:bg-[#5C7A6A] text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            Generate Report
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
