import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import Container from "./styles";

interface MenuProps {
  showMenu: boolean;
  onClose: any;
}

const MenuMobile: React.FC<MenuProps> = ({ showMenu, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container isVisible={showMenu}>
      <Icon
        onClick={onClose}
        icon="material-symbols:close-rounded"
        className="close-icon"
        width="32"
        height="32"
      />
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                onClose();
                navigate("/dashboard");
              }}
              className="nav-item"
            >
              Lista de usuários aleatórios
            </a>
          </li>
          <li
            onClick={() => {
              onClose();
              navigate("/http-status");
            }}
          >
            <a className="nav-item"> Seleção de status code</a>
          </li>
          <li>
            <a
              onClick={() => {
                onClose();
                navigate("/dog");
              }}
              className="nav-item"
            >
              Botão gerador de imagem
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                onClose();
                navigate("/clients");
              }}
              className="nav-item"
            >
              Lista de clientes
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
      </nav>
    </Container>
  );
};

export default MenuMobile;
