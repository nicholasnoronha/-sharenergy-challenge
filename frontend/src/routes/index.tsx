import React from "react";
import { useAuth } from "../contexts/auth.context";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Router: React.FC = () => {
  const { token } = useAuth();

  return !!token ? <AppRoutes /> : <AuthRoutes />;
};

export default Router;
