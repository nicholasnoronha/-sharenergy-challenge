import React from "react";
import Container from "./styles";
type Props = {
  id?: string;
  label?: string;
  type?: string;
};

const InputLabel: React.FC<Props> = (props) => {
  return (
    <Container className="input-group">
      <input type={props.type || "text"} id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </Container>
  );
};

export default InputLabel;
