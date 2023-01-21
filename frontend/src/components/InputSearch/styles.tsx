import styled from "styled-components";

const Container = styled.input`
  padding: 8px 16px;
  height: fit-content;
  border: 1px solid var(--dark-blue);
  background: var(--white);
  border-radius: 4px;
  max-width: 200px;
  &::placeholder {
    // color: var(--greenish);
    font-family: "Poppins", sans-serif;
  }
`;

export default Container;
