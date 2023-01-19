import React from "react";
import Container from "./styles";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      Olá, username
      <ul>
        <li>
          <a onClick={() => navigate("/dashboard")} className="nav-item">
            1. Lista de usuários aleatórios
          </a>
        </li>
        <li onClick={() => navigate("/http-status")}>
          <a className="nav-item">2. Seleção de status code</a>
        </li>
        <li>
          <a onClick={() => navigate("/dog")} className="nav-item">
            3. Botão gerador de imagem
          </a>
        </li>
        <li>
          <a onClick={() => navigate("")} className="nav-item">
            4. Lista de clientes
          </a>
        </li>
      </ul>
      Logout
    </Container>
  );
};

export default Menu;
