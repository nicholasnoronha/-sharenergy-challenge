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

  .image-container {
    max-height: 400px;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    min-height: 70vh;
  }
`;

export default Container;
