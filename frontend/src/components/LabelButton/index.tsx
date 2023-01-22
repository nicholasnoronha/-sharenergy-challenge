import React from "react";
import DefaultProps from "../../interfaces/DefaultProps";
import Container from "./styles";

interface Props extends DefaultProps {
  onClick: any;
}

const LabelButton: React.FC<Props> = (props) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};

export default LabelButton;
