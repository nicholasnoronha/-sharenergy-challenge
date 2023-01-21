import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--dark-blue);
  background: none;
  padding: 0.5rem 0;
  margin: 10px 0;
  &::placeholder {
    font-family: Poppins, sans-serif;
    font-size: 15px;
    color: var(--greenish);
  }
`;

export default Input;
