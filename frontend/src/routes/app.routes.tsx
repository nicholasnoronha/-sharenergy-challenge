import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
