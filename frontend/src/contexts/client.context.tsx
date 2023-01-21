import React, { createContext, useContext, useState, useEffect } from "react";
import DefaultProps from "../interfaces/DefaultProps";
import Client from "../interfaces/Client";
import { useAuth } from "./auth.context";
import { clientsService } from "../services/clientsService";
interface ContextType {
  clients: Client[];
  fetchClients: () => void;
  addClient: (client: Client) => void;
  updateClient: (client: Client) => void;
  deleteClient: (clientId: string) => void;
}

const ClientContext = createContext<Partial<ContextType>>({});

export const ClientProvider: React.FC<DefaultProps> = (props) => {
  const [clients, setClients] = useState<Client[]>([]);
  const { token } = useAuth();

  const fetchClients = async () => {
    const response: Client[] = await clientsService.getClients(token!);
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

  const deleteClient = async (clientId: string) => {
    await clientsService.deleteClient(token!, clientId);
    fetchClients();
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider
      value={{ clients, fetchClients, addClient, updateClient, deleteClient }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
