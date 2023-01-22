import React from "react";
import Container from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

const Menu: React.FC = (props) => {
  const { logout, username } = useAuth();
  const navigate = useNavigate();
  return (
    <Container>
      Olá, {username}
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
          <a onClick={() => navigate("/clients")} className="nav-item">
            4. Lista de clientes
          </a>
        </li>
      </ul>
      <a
        style={{
          marginBottom: "2vh",
          maxWidth: "55px",
        }}
        onClick={() => logout()}
        className="nav-item"
      >
        Logout
      </a>
    </Container>
  );
};

export default Menu;
