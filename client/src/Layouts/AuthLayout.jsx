// src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3E9E1]">
      <div className="w-full max-w-4xl">
        {/* Aquí se renderizará el contenido de las rutas hijas */}
        <Outlet />
      </div>
    </div>
  );
}
