import Client from "../../../interfaces/Client";

interface TableProps {
  clients: Client[];
}

const Table: React.FC<TableProps> = (props) => {
  const { clients } = props;
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

  const mappedTrs = clients.map((client) => {
    return (
      <tr key={client._id}>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{client.address}</td>
        <td>{client.cpf}</td>
        {/* <RowActions
          addClientToEdit={addClientToEdit}
          setClients={setClients}
          client={{ ...client, data_nascimento: date }}
        /> */}
      </tr>
    );
  });

  return (
    <table>
      <thead>{mappedThs}</thead>
      <tbody>{mappedTrs}</tbody>
    </table>
  );
};

export default Table;
