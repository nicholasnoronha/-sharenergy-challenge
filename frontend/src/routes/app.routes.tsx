import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
import HttpStatus from "../pages/HttpStatus";
import RandomDog from "../pages/RandomDog";
import Clients from "../pages/ClientsList";
import Loading from "../components/Loading";
import { ClientProvider } from "../contexts/client.context";
import Container from "./styles";
import MenuMobile from "../components/MenuMobile";
import { Icon } from "@iconify/react";
const AppRoutes = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

  const handleOpenMenu = () => setShowMenuMobile(true);
  const handleHideMenu = () => setShowMenuMobile(false);
  console.log("showMenuMobile", showMenuMobile);
  return (
    <ClientProvider>
      <Container>
        <MenuMobile showMenu={showMenuMobile} onClose={handleHideMenu} />
        <Icon
          onClick={handleOpenMenu}
          icon="charm:menu-hamburger"
          className="hamburger-icon"
          style={{
            color: "var(--dark-blue)",
          }}
          width="32"
          height="32"
        />
        <div className="row">
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
            <Route path="/clients" element={<Clients />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Container>
    </ClientProvider>
  );
};

export default AppRoutes;
