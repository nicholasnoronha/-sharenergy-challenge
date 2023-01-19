import styled from "styled-components";

const Container = styled.div`
  background: var(--white);
  height: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--dark-blue);
  width: 10vw;
  border-radius: 25px;

  ul {
    padding: 1rem 0;
    list-style: none;
  }

  li {
    width: fit-content;
    border-bottom: px solid var(--blue);
    margin: 20px 0;
  }

  .nav-item {
    font-weight: bold;
    cursor: pointer;
    color: var(--blue);
    border-bottom: 1px solid var(--dark-blue);
  }
`;

export default Container;
