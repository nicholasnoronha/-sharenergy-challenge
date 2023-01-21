import styled from "styled-components";

const Container = styled.div`
  color: var(--dark-blue);
  background-color: var(--white);
  padding: 3rem 1rem;
  border-radius: 17px;
  min-height: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 80vw;

  .cat-select {
    border: 1px solid var(--dark-blue);
    border-radius: 5px;
    margin: 1rem 0;
    font-size: 1rem;
    background: var(--white);
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    min-height: 70vh;
  }
`;

export default Container;
