import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { useClient } from "../../contexts/client.context";
import { Button } from "../../components";
import Container from "./styles";
import ClientForm from "../../components/ClientForm";
import Table from "./components/Table";

const ClientsList: React.FC = () => {
  const { clients } = useClient();

  const [showClientModal, setShowClientModal] = useState<boolean>(false);

  const openClientModal = () => setShowClientModal(true);
  const hideClientModal = () => setShowClientModal(false);

  return (
    <Container>
      <Button onClick={openClientModal}>Adicionar cliente</Button>
      <Table clients={clients} />
      {showClientModal && <ClientForm onClose={hideClientModal}></ClientForm>}
    </Container>
  );
};

export default ClientsList;
