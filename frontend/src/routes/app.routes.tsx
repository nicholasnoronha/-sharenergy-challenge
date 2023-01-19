import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
import HttpStatus from "../pages/HttpStatus";
import RandomDog from "../pages/RandomDog";
import ClientsList from "../pages/ClientsList";
import Loading from "../components/Loading";

const AppRoutes = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        gap: "1rem",
      }}
    >
      <Menu />
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
        <Route path="/clients" element={<ClientsList />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
