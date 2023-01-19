import React from "react";
import Container from "./styles";

const UserCard: React.FC<any> = (props) => {
  return (
    <Container>
      <div className="align-center">
        <img className="user-pic" src={props.user.picture.large} />
        <p className="card-title">
          {props.user.name.first} {props.user.name.last},{" "}
          <span className="user-age">{props.user.dob.age} anos</span>
        </p>
      </div>
      <div>
        <p className="user-data">
          <span className="label">Email:</span> {props.user.email}
        </p>
        <p className="user-data">
          <span className="label">Cellphone:</span> {props.user.cell}
        </p>
        <p className="user-data">
          <span className="label">Location:</span> {props.user.location.city},{" "}
          {props.user.location.state}
        </p>
        <p className="user-data">
          <span className="label">Address:</span>{" "}
          {props.user.location.street.name}, {props.user.location.street.number}
        </p>
      </div>
    </Container>
  );
};

export default UserCard;
