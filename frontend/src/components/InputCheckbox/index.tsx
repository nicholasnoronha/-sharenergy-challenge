import React from "react";
import Container from "./styles";
type Props = {
  id?: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputCheckbox: React.FC<Props> = (props) => {
  return (
    <Container className="input-group">
      <input type="checkbox" id={props.id} onChange={props.onChange} />
      <label htmlFor={props.id}>{props.label}</label>
    </Container>
  );
};

export default InputCheckbox;
