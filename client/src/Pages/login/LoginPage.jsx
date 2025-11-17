import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../../assets/LogoLogin.png";

export default function PaginaLogin() {
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirige al panel principal
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg flex overflow-hidden w-[800px] mx-auto mt-10"
    >
      {/* Lado izquierdo - formulario */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
        className="w-1/2 flex flex-col justify-center px-10 py-12"
      >
        <motion.h1
          className="text-2xl font-semibold text-[#2f3e46] mb-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          FisioAthletic Center
        </motion.h1>

        <motion.h2
          className="text-3xl font-bold text-[#2f3e46] mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          ¡Bienvenido de nuevo!
        </motion.h2>

        <motion.p
          className="text-sm text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Por favor, inicia sesión en tu cuenta
        </motion.p>

        <motion.form
          onSubmit={manejarEnvio}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA59A]"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8CA59A]"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#8CA59A] text-white font-medium py-3 rounded-md hover:bg-[#7b958a] transition"
          >
            Iniciar sesión
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Lado derecho - imagen */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
        className="w-1/2 bg-[#8CA59A] relative"
      >
        <motion.img
          src={LogoLogin}
          alt="Logo FisioAthletic Center"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[#8CA59A]/20"></div>
      </motion.div>
    </motion.div>
  );
}
