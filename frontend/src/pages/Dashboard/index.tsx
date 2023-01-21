import React, { useState, useEffect } from "react";
import { Title, InputSearch } from "../../components";
import { useAuth } from "../../contexts/auth.context";
import { randomUserGeneratorService } from "../../services/randomUserGeneratorService";
import Container from "./styles";
import UserCard from "./components/UserCard";
import { Icon } from "@iconify/react";

const totalUsers = 100;
const maxPageUsers = 8;

const Dashboard: React.FC = () => {
  const { token } = useAuth();

  const [randomUsers, setRandomUsers] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [searchUser, setSearchUser] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const currentPageUsers = currentPage * maxPageUsers;
  const totalPageUsers =
    currentPageUsers === 1
      ? currentPageUsers - maxPageUsers
      : currentPageUsers + maxPageUsers;

  const fetchRandomUsers = async () => {
    const response = await randomUserGeneratorService.getRandomUsers(token!);
    const results = response!.data.map((result: any) => ({
      ...result,
      name: `${result.name.first} ${result.name.last}`,
    }));

    setRandomUsers(results);
  };

  const handleSearchUserChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchUser(event.target.value);
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  useEffect(() => {
    if (!searchUser?.length) {
      setUsers(
        randomUsers.slice(currentPageUsers, currentPageUsers + maxPageUsers)
      );
      return;
    }

    setUsers(
      randomUsers.filter((obj: any) =>
        obj.name.toLowerCase().includes(searchUser.toLowerCase())
      )
    );
  }, [searchUser, randomUsers]);

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  useEffect(() => {
    setUsers(randomUsers.slice(currentPageUsers, totalPageUsers));
  }, [currentPage]);

  return (
    <Container>
      <div className="header">
        <Title style={{ marginBottom: 30 }}>Lista de usuários</Title>
        <InputSearch
          onChange={handleSearchUserChange}
          value={searchUser}
          placeholder={"Buscar usuários..."}
        />
      </div>
      <div className="actions-container">
        <p className="actions-title">Página {currentPage + 1}</p>
        <div className="actions-buttons">
          {currentPage > 0 && (
            <a className="pagination-button" onClick={handlePrevPage}>
              <Icon icon="ic:round-navigate-next" rotate={2} />
              <span>Voltar</span>
            </a>
          )}
          {totalUsers > totalPageUsers && (
            <a className="pagination-button" onClick={handleNextPage}>
              <span>Avançar</span>
              <Icon icon="ic:round-navigate-next" />
            </a>
          )}
        </div>
        <p className="actions-users">Usuários: {users.length}</p>
      </div>
      <div className="users-grid">
        {users?.map((user: any) => {
          return <UserCard user={user} />;
        })}
      </div>
    </Container>
  );
};

export default Dashboard;
