import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
