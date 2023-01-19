import styled from "styled-components";

const Container = styled.div`
  background: var(--white);
  padding: 3rem;
  border-radius: 25px;
  min-width: 75vw;

  .users-grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default Container;
