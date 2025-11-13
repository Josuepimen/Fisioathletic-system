// client/src/pages/Dashboard.jsx

import React from 'react';

// Colores definidos para la aplicación (para uso en clases Tailwind)
const COLORS = {
  textDark: '#496C5B',
  fondoApp: '#F3EFE9',
  principalClaro: '#AEC4B2',
  principalRosa: '#E5C3B3',
};

// Componente reusable para mostrar los indicadores (Cards)
const MetricCard = ({ title, value, icon, accentColor }) => (
  // Diseño de tarjeta con borde superior para acento visual
  <div className={`bg-white p-5 rounded-xl shadow-lg border-t-4 border-[${accentColor}] 
                   hover:shadow-xl transition duration-300`}>
    <div className="flex items-center justify-between">
      <p className={`text-sm font-semibold uppercase text-[${COLORS.textDark}]/70`}>{title}</p>
      {/* Icono de ejemplo */}
      <div className={`text-xl text-[${COLORS.textDark}]`}>{icon}</div> 
    </div>
    <p className={`text-4xl font-extrabold mt-2 text-[${COLORS.textDark}]`}>{value}</p>
  </div>
);

// Componente principal del Dashboard
const DashboardHome = () => {
  return (
    // Contenedor principal con el color de fondo neutro
    <div className={`min-h-screen p-4 md:p-8 bg-[${COLORS.fondoApp}] text-[${COLORS.textDark}]`}>
      
      {/* Encabezado y Título Principal (Visible en Desktop y Mobile) */}
      <h1 className="text-3xl font-extrabold mb-6 border-b-2 border-[${COLORS.principalRosa}] pb-2">
        Panel de Monitoreo General
      </h1>

      {/* 1. SECCIÓN DE INDICADORES CLAVE (Responsive: 1 columna en móvil, 4 en desktop) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        <MetricCard 
          title="Pacientes Activos" 
          value="125" 
          icon="👥" // Icono simbólico
          accentColor={COLORS.principalClaro} 
        />
        
        <MetricCard 
          title="Sesiones Agendadas Hoy" 
          value="18" 
          icon="🗓️"
          accentColor={COLORS.principalRosa} 
        />
        
        <MetricCard 
          title="Promedio Recuperación" 
          value="45 días" 
          icon="⏳"
          accentColor={COLORS.principalClaro} 
        />
        
        <MetricCard 
          title="Próxima Cita Importante" 
          value="Paciente J - 11:30 AM" 
          icon="🚨"
          accentColor={COLORS.principalRosa} 
        />
      </section>

      {/* 2. SECCIÓN DE GRÁFICOS Y REPORTES (Responsive: 1 columna en móvil, 3 en desktop) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* GRÁFICO PRINCIPAL DE EVOLUCIÓN (Ocupa 2/3 del ancho en desktop) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Evolución de Sesiones (Últimos 6 meses)</h2>
          <div className="h-64 flex items-center justify-center bg-[${COLORS.fondoApp}] rounded-lg text-gray-500">
            [Gráfico de Tendencias - Librería Recharts / Chart.js]
          </div>
        </div>

        {/* LISTA DE TAREAS/CITAS PENDIENTES */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Citas y Tareas Recientes</h2>
          <ul className="space-y-3">
            <li className={`p-3 rounded-lg bg-[${COLORS.principalRosa}]/20 border-l-4 border-[${COLORS.principalRosa}] text-sm`}>
              Paciente A - **10:00 AM**
            </li>
            <li className={`p-3 rounded-lg bg-[${COLORS.principalRosa}]/20 border-l-4 border-[${COLORS.principalRosa}] text-sm`}>
              Revisar expediente de Paciente Z
            </li>
            <li className={`p-3 rounded-lg bg-[${COLORS.principalRosa}]/20 border-l-4 border-[${COLORS.principalRosa}] text-sm`}>
              Paciente C - **02:00 PM**
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Botón de Generación de Informes (Requisito clave del proyecto) */}
      <div className="mt-8 flex justify-end">
        <button 
          className={`bg-[${COLORS.principalClaro}] hover:bg-[#496C5B] text-white font-bold py-3 px-6 rounded-lg 
                      shadow-lg transition duration-300 uppercase tracking-wider`}
        >
          Generar Reporte General
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;