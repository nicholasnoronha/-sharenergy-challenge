import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
// import Dashboard from "../pages/Dashboard";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
import HttpStatus from "../pages/HttpStatus";
import RandomDog from "../pages/RandomDog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback={<Loading />}>
            <Dashboard />
          </React.Suspense>
        }
      />
      <Route path="/http-status" element={<HttpStatus />} />
      <Route path="/dog" element={<RandomDog />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
