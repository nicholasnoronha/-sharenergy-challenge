import React, { useState } from "react";
import { Button, Input } from "../../components";
import { redirect } from "react-router-dom";
import InputCheckbox from "../../components/InputCheckbox";
import { useAuth } from "../../contexts/auth.context";

const Login: React.FC = (props) => {
  const { login } = useAuth();

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleUserChange} placeholder="Usuário" />
        <Input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Senha"
        />
        <InputCheckbox
          id="remember-me"
          label="Lembrar-me"
          onChange={handleIsRememberingChange}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
