import React, { useEffect, useState } from "react";
import { useClient } from "../../contexts/client.context";
import { Button, Title } from "../../components";
import Container from "./styles";
import ClientFormModal from "./components/ClientFormModal";
import ClientsTable from "./components/ClientsTable";
import Client from "../../interfaces/Client";

const ClientsList: React.FC = () => {
  const { clients } = useClient();

  const [showClientModal, setShowClientModal] = useState<boolean>(false);
  const [clientToEdit, setClientToEdit] = useState<Client | undefined>();

  const openNewClientModal = () => {
    setShowClientModal(true);
    setClientToEdit(undefined);
  };

  const openClientModal = () => setShowClientModal(true);
  const hideClientModal = () => setShowClientModal(false);

  const handleEditClient = (client: Client) => {
    setClientToEdit(client);
    openClientModal();
  };

  return (
    <Container>
      <div className="header">
        <Title style={{ marginBottom: 10 }}>Clientes</Title>
        <Button onClick={openNewClientModal}>Adicionar cliente</Button>
      </div>

      <ClientsTable onEditClientHandler={handleEditClient} clients={clients!} />

      {showClientModal && (
        <ClientFormModal
          clientToEdit={clientToEdit}
          onClose={hideClientModal}
        />
      )}
    </Container>
  );
};

export default ClientsList;
