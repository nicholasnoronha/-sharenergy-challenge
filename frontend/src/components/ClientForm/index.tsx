import React, { useState } from "react";
import Client from "../../interfaces/Client";
import Button from "../Button/styles";
import { useClient } from "../../contexts/client.context";
import Modal from "../Modal";

interface ClientFormProps {
  clientToEdit?: Client;
  onClose: () => void;
}

const ClientForm: React.FC<ClientFormProps> = (props) => {
  const { clientToEdit, onClose } = props;
  const { addClient, updateClient } = useClient();

  const [client, setClient] = useState({
    id: clientToEdit?._id || "",
    name: clientToEdit?.name || "",
    email: clientToEdit?.email || "",
    phone: clientToEdit?.phone || "",
    address: clientToEdit?.address || "",
    cpf: clientToEdit?.cpf || "",
  });

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    if (clientToEdit) {
      return await editClientHandler();
    }

    return await addClientHandler();
  };

  const addClientHandler = async () => {
    await addClient(client);
    onClose();
  };

  const editClientHandler = async () => {
    await updateClient(client);
    onClose();
  };

  const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setClient((prev) => {
      return { ...prev, name };
    });
  };

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setClient((prev) => {
      return { ...prev, email };
    });
  };

  const changePhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phone = event.target.value;
    setClient((prev) => {
      return { ...prev, phone };
    });
  };

  const changeAddressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    setClient((prev) => {
      return { ...prev, address };
    });
  };

  const changeCpfHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = event.target.value;
    setClient((prev) => {
      return { ...prev, cpf };
    });
  };

  const title = clientToEdit ? "Atualizar" : "Cadastrar";

  const handleSubmitButton = clientToEdit ? (
    <Button type="submit" className="">
      Atualizar
    </Button>
  ) : (
    <Button type="submit" className="">
      Cadastrar
    </Button>
  );

  return (
    <Modal onClose={onClose}>
      <form className="" onSubmit={handleFormSubmit}>
        <h2 className="title">{title} Cliente</h2>
        <input
          // label="Nome"
          name="nome"
          type="text"
          id="nome"
          onChange={changeNameHandler}
          value={client.name}
          placeholder="Exemplo"
        />
        <input
          // label="Email"
          name="email"
          type="email"
          id="email"
          onChange={changeEmailHandler}
          value={client.email}
          placeholder="exemplo@exemplo.com"
        />
        <input
          // label="phone"
          name="phone"
          type="phone"
          id="phone"
          onChange={changePhoneHandler}
          value={client.phone}
          placeholder="(00) 00000-0000"
        />
        <input
          // label="address"
          name="address"
          type="address"
          id="address"
          onChange={changeAddressHandler}
          value={client.address}
          placeholder="Rua 2"
        />
        <input
          // label="cpf"
          name="cpf"
          type="cpf"
          id="cpf"
          onChange={changeCpfHandler}
          value={client.cpf}
          placeholder="000.000.000-00"
        />
        <div>
          <Button onClick={onClose} className="cancel-button">
            Cancelar
          </Button>
          {handleSubmitButton}
        </div>
      </form>
    </Modal>
  );
};

export default ClientForm;
