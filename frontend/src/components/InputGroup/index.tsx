import React from "react";
import Container from "./styles";

const InputGroup: React.FC<any> = (props) => {
  return (
    <Container>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </Container>
  );
};

export default InputGroup;
