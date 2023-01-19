import styled from "styled-components";

const Container = styled.div`
  display: flex;

  .form-container {
    display: flex;
    min-height: 100vh;
    padding: 0 11.8rem;
    flex-direction: column;
    justify-content: center;
    background: var(--white);
  }

  .form-content {
    width: 350px;
  }

  .slogan-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .slogan-title {
    color: var(--white);
    font-size: 3.1rem;
    max-width: 53.1rem;
    line-height: 1.5;
    font-weight: 400;
  }

  .slogan-subtitle {
    color: var(--greenish);
    font-size: 2.1rem;
    text-align: center;
  }
`;

export default Container;
