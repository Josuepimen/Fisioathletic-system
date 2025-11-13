import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.(); // ejecuta la función si existe
    }, 2000); // 2 segundos de duración del splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F3E9E1] z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-bold text-[#5C7A6A]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          FisioAthletic Center
        </motion.h1>
        <motion.div
          className="mt-4 w-16 h-1 bg-[#8CA59A] mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}
