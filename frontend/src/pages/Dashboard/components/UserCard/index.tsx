import React from "react";
import RandomUser from "../../../../interfaces/RandomUser";
import Container from "./styles";

interface UserCardProps {
  user: RandomUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Container>
      <div className="align-center">
        <img className="user-pic" src={user.picture.large} />
        <p className="card-title">
          {user.name.first} {user.name.last},{" "}
          <span className="user-age">{user.dob.age} anos</span>
        </p>
      </div>
      <div>
        <p className="user-data">
          <span className="label">Email:</span> {user.email}
        </p>
        <p className="user-data">
          <span className="label">Cellphone:</span> {user.cell}
        </p>
        <p className="user-data">
          <span className="label">Location:</span> {user.location.city},{" "}
          {user.location.state}
        </p>
        <p className="user-data">
          <span className="label">Address:</span> {user.location.street.name},{" "}
          {user.location.street.number}
        </p>
      </div>
    </Container>
  );
};

export default UserCard;
