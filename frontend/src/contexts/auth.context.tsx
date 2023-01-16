import React, { createContext, useState, useContext } from "react";
import DefaultProps from "../interfaces/DefaultProps";
import { userService } from "../services/userService";

interface ContextType {
  login(
    username: string,
    password: string,
    isRemembering: boolean
  ): Promise<void>;
  token: string | null;
}

const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthProvider: React.FC<DefaultProps> = (props) => {
  const lastSessionToken = localStorage.getItem("access_token");
  const [token, setToken] = useState<string | null>(lastSessionToken);

  const login = async (
    username: string,
    password: string,
    isRemembering: boolean
  ) => {
    const response = await userService.login(username, password);
    const access_token = response!.data.access_token;

    if (access_token) {
      setToken(access_token);

      if (isRemembering) localStorage.setItem("access_token", access_token);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
