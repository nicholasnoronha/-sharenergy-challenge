import { useState } from "react";
import Client from "../../../../interfaces/Client";
import Container from "./styles";
import { Icon } from "@iconify/react";
import { useClient } from "../../../../contexts/client.context";
import { Modal } from "../../../../components";

interface TableProps {
  clients: Client[];
  onEditClientHandler: any;
}

const Table: React.FC<TableProps> = (props) => {
  const { deleteClient } = useClient();
  const { clients } = props;

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>();

  const handleOpenDeleteModal = () => setShowDeleteModal(true);
  const handleHideDeleteModal = () => setShowDeleteModal(false);

  const mappedThs = (
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>Endereço</th>
      <th>Cpf</th>
      <th>Ações</th>
    </tr>
  );

  const handleDeleteClient = async (clientId: string) => {
    await deleteClient!(clientId);
  };

  const handleEditClient = async (client: Client) => {
    props.onEditClientHandler(client);
  };

  const mappedTrs = clients.map((client) => {
    return (
      <tr key={client._id}>
        <td data-label="Nome">{client.name}</td>
        <td data-label="E-mail">{client.email}</td>
        <td data-label="Telefone">{client.phone}</td>
        <td data-label="Endereço">{client.address}</td>
        <td data-label="CPF">{client.cpf}</td>
        <td data-label="Actions">
          <a
            title="Editar"
            onClick={() => {
              handleEditClient(client);
            }}
          >
            <Icon icon="material-symbols:edit" width="24" height="24" />
          </a>
          <a title="Apagar" onClick={() => handleDeleteClient(client._id!)}>
            <Icon icon="mdi:trash-outline" width="24" height="24" />
          </a>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <table>
        <thead>{mappedThs}</thead>
        <tbody>{mappedTrs}</tbody>
      </table>
      {showDeleteModal && <Modal onClose={handleHideDeleteModal}></Modal>}
    </Container>
  );
};

export default Table;
