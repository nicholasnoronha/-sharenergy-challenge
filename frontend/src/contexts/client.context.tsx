import React, { createContext, useState, useContext, useEffect } from "react";
import Client from "../interfaces/Client";
import DefaultProps from "../interfaces/DefaultProps";
import { clientsService } from "../services/clientsService";
import { useAuth } from "./auth.context";

interface ContextType {
  clients: Client[];
  fetchClients: () => void;
  addClient: (client: Client) => void;
  updateClient: (client: Client) => void;
}

const ClientContext = createContext<ContextType>({} as ContextType);

export const ClientProvider: React.FC<DefaultProps> = (props) => {
  const [clients, setClients] = useState<Client[]>([]);
  const { token } = useAuth();

  const fetchClients = async () => {
    const response: Client[] = await clientsService.getClients(token!);

    console.log("clients", response);
    setClients(response);
  };

  const addClient = async (client: Client) => {
    await clientsService.addClient(token!, client);
    fetchClients();
  };

  const updateClient = async (client: Client) => {
    await clientsService.updateClient(token!, client, client._id!);
    fetchClients();
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider
      value={{ clients, fetchClients, addClient, updateClient }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
