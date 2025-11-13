// src/routes/LoginRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../Pages/login/LoginPage";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* /login */}
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
