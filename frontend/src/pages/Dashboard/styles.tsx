import styled from "styled-components";

const Container = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 25px;
  min-width: 75vw;

  .users-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0.5rem;
    overflow-y: scroll;
    position: relative;
    height: calc(90vh - 130px);
    max-height: calc(90vh - 130px);
    place-items: center;
  }

  .actions-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
  }

  .actions-title {
    color: var(--dark-blue);
    font-weight: bold;
    font-size: 14px;
    text-align: right;
    margin-right: 5px;
  }

  .actions-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .actions-users {
    font-size: 10px;
    font-weight: bold;
    color: var(--dark-blue);
    margin-right: 5px;
  }

  .pagination-button {
    color: var(--blue);
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .pagination-button span {
    border-bottom: 1px solid var(--dark-blue);
    font-size: 12px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1500px) {
    min-width: 70vw;
    .users-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 1250px) {
    min-width: 70vw;
    .users-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 1000px) {
    width: 100vw;
    min-height: 70vh;
  }

  @media (max-width: 800px) {
    .users-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 715px) {
    .header {
      flex-direction: column;
    }
  }
`;

export default Container;
