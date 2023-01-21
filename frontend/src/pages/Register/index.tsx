import React, { useState } from "react";
import {
  Title,
  Subtitle,
  Input,
  Column,
  Button,
  InputCheckbox,
} from "../../components";
import Container from "./styles";
import { useAuth } from "../../contexts/auth.context";
import { redirect, useNavigate } from "react-router-dom";

const Register: React.FC = (props) => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUser(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handlePasswordConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setPasswordConfirmation(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password != passwordConfirmation) {
      alert("As senhas precisam ser iguais.");
      return;
    }

    await register(user, password);
    alert("Usuário registrado com sucesso.");

    navigate("/login");
  };

  const handleSwitchToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-content">
          <div style={{ marginBottom: 30 }}>
            <Title>Registre-se</Title>
            <Subtitle>Crie seu usuário e senha.</Subtitle>
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
            <Input
              onChange={handlePasswordConfirmationChange}
              placeholder="Cinfirmar senha"
              type="password"
            />
          </Column>
        </div>
        <Button onClick={handleSwitchToLogin} style={{ marginLeft: 20 }}>
          Já é registrado? Realize o Login.
        </Button>
        <Button type="submit" style={{ marginTop: 20 }}>
          Confirmar
        </Button>
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

export default Register;
