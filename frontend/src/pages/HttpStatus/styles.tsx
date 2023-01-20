import styled from "styled-components";

const Container = styled.div`
  color: var(--dark-blue);
  background-color: var(--white);
  padding: 3rem 1rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  max-width: 80vw;
  .cat-select {
    border: 1px solid var(--dark-blue);
    border-radius: 5px;
    margin: 1rem 0;
    font-size: 1rem;
    background: var(--white);
    font-family: "Poppins", sans-serif;
  }
`;

export default Container;
