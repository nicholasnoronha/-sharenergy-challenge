import React, { useState, useEffect } from "react";
import { Title } from "../../components";
import { useAuth } from "../../contexts/auth.context";
import Container from "./styles";
import { randomUserGeneratorService } from "../../services/randomUserGeneratorService";
import UserCard from "./components/UserCard";
import RandomUser from "../../interfaces/RandomUser";

const Dashboard: React.FC = (props) => {
  const { token } = useAuth();
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>();
  const [page, setPage] = useState();

  const fetchRandomUsers = async () => {
    const users = await randomUserGeneratorService.getRandomUsers(token!);

    setRandomUsers(users!.data.users.results);
  };

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  return (
    <Container>
      <div className="content">
        <Title style={{ marginBottom: 30 }}>Lista de usuários aleatórios</Title>
        <div className="users-grid">
          {randomUsers?.map((user: RandomUser) => {
            return (
              <div key={user.login.uuid}>
                <UserCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
