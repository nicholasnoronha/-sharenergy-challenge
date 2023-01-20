import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { useClient } from "../../contexts/client.context";
import { Button } from "../../components";
import Container from "./styles";
import ClientForm from "../../components/ClientForm";

const ClientsList: React.FC = () => {
  const { clients } = useClient();

  const [showClientModal, setShowClientModal] = useState<boolean>(false);

  const openClientModal = () => setShowClientModal(true);
  const hideClientModal = () => setShowClientModal(false);

  return (
    <Container>
      <Button onClick={openClientModal}>Adicionar cliente</Button>
      {clients?.map((client, index) => (
        <div key={index}>
          <h1 style={{ fontSize: 100 }}>{client._id}</h1>
        </div>
      ))}
      {showClientModal && <ClientForm onClose={hideClientModal}></ClientForm>}
    </Container>
  );
};

export default ClientsList;
