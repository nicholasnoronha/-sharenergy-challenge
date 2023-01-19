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
  justify-content: space-between;

  .card-title {
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid var(--dark-blue);
    width: fit-content;
    margin: 1rem 0;
  }

  .user-age {
    font-size: 12px;
    color: var(--blue);
  }

  .user-data {
    font-size: 12px;
    color: var(--blue);
    font-weight: bold;
  }

  .label {
    color: var(--greenish);
    font-size: 12px;
    font-weight: normal;
  }

  .user-pic {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .align-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
