import React, { useState } from "react";
import {
  Title,
  Subtitle,
  Input,
  Column,
  Button,
  InputCheckbox,
  LabelButton,
} from "../../components";
import Container from "./styles";
import { useAuth } from "../../contexts/auth.context";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemembering, setIsRemembering] = useState<boolean>(false);

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUser(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleIsRememberingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setIsRemembering(event.target.checked);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(user, password, isRemembering);

    redirect("/dashboard");
  };

  const handleSwitchToRegister = () => {
    navigate("/register");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-content">
          <div style={{ marginBottom: 30 }}>
            <Title>Entrar</Title>
            <Subtitle>
              Realize o login com as credenciais informadas no desafio.
            </Subtitle>
          </div>
          <Column>
            <Input
              onChange={handleUserChange}
              placeholder="Usuário"
              type="text"
            />
            <Input
              onChange={handlePasswordChange}
              placeholder="Senha"
              type="password"
            />
            <InputCheckbox
              onChange={handleIsRememberingChange}
              label="Lembrar-me"
            />
          </Column>
        </div>
        <Button type="submit" style={{ marginTop: 20 }}>
          Logar
        </Button>
        <LabelButton onClick={handleSwitchToRegister}>
          Novo por aqui? Registre-se
        </LabelButton>
      </form>
      <div className="slogan-container">
        <div>
          <h2 className="slogan-title">
            Aplicação criada com intuito de resolver o desafio da Sharenergy.
          </h2>
          <p className="slogan-subtitle">Janeiro, 2023</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
