import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;

  .hamburger-icon {
    position: absolute;
    right: 1px;
    top: 0.5rem;
    display: none;
    cursor: pointer;
  }

  .row {
    height: 100%;
  }

  @media (max-width: 1000px) {
    .hamburger-icon {
      display: block;
    }
  }
`;

export default Container;
