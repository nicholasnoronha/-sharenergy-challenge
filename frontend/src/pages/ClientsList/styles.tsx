import styled from "styled-components";

const Container = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 25px;
  min-width: 75vw;
  min-height: 100vh;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  @media (max-width: 1000px) {
    width: 100vw;
    min-height: 70vh;
  }
`;

export default Container;
