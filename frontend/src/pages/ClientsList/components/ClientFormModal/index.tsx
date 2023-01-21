import React, { useState } from "react";
import Client from "../../../../interfaces/Client";
import {
  Button,
  InputGroup,
  Modal,
  CancelButton,
} from "../../../../components";
import { useClient } from "../../../../contexts/client.context";
import { validateCPF, validatePhone } from "../../../../helpers/validateInputs";

interface ClientFormProps {
  clientToEdit?: Client;
  onClose: () => void;
}

const ClientFormModal: React.FC<ClientFormProps> = (props) => {
  const { clientToEdit, onClose } = props;
  const { addClient, updateClient } = useClient();

  const [client, setClient] = useState<Client>({
    _id: clientToEdit?._id || "",
    name: clientToEdit?.name || "",
    email: clientToEdit?.email || "",
    phone: clientToEdit?.phone || "",
    address: clientToEdit?.address || "",
    cpf: clientToEdit?.cpf || "",
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clientPhone = validatePhone(client.phone);
    const clientCPF = validateCPF(client.cpf);

    if (typeof clientCPF !== "string") return alert(clientCPF.message);
    if (typeof clientPhone !== "string") return alert(clientPhone.message);

    const validatedClient = {
      ...client,
      phone: clientPhone,
      cpf: clientCPF,
    };

    if (clientToEdit) {
      await updateClient!(validatedClient);
    } else {
      await addClient!(validatedClient);
    }

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
      <form onSubmit={handleFormSubmit}>
        <h2 className="title">{title} Cliente</h2>
        <div className="input-group-container">
          <InputGroup
            label="Cliente"
            type="text"
            id="nome"
            onChange={changeNameHandler}
            value={client.name}
            placeholder="Exemplo"
          />
          <InputGroup
            label="E-mail"
            type="email"
            id="email"
            onChange={changeEmailHandler}
            value={client.email}
            placeholder="exemplo@exemplo.com"
          />
          <InputGroup
            label="Telefone"
            type="phone"
            id="phone"
            onChange={changePhoneHandler}
            value={client.phone}
            placeholder="(00) 00000-0000"
          />
          <InputGroup
            label="Endereço"
            type="address"
            id="address"
            onChange={changeAddressHandler}
            value={client.address}
            placeholder="Rua 2"
          />
          <InputGroup
            label="CPF"
            type="cpf"
            id="cpf"
            onChange={changeCpfHandler}
            value={client.cpf}
            placeholder="000.000.000-00"
          />
        </div>
        <div className="row">
          <CancelButton onClick={onClose} className="cancel-button">
            Cancelar
          </CancelButton>
          {handleSubmitButton}
        </div>
      </form>
    </Modal>
  );
};

export default ClientFormModal;
