import React, { useEffect, useState } from "react";
import { randomUserGeneratorService } from "../../services/randomUserGeneratorService";
import { useAuth } from "../../contexts/auth.context";

const Dashboard: React.FC = (props) => {
  const { token } = useAuth();
  const [randomUsers, setRandomUsers] = useState<any>();

  const fetchRandomUsers = async () => {
    const users = await randomUserGeneratorService.getRandomUsers(token!);
    setRandomUsers(users!.data.users.results);
  };

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  return (
    <div>
      {randomUsers?.map((user: any) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <p style={{ fontWeight: "bold" }}>
              {user.name.first} {user.name.last}, {user.dob.age} anos
            </p>
            <p>Email: {user.email}</p>
            <p>Cellphone: {user.cell}</p>
            <p>
              Location: {user.location.city}, {user.location.state}
            </p>
            <p>
              Address: {user.location.street.name},{" "}
              {user.location.street.number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
