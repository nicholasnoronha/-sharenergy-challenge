import styled from "styled-components";
interface Props {
  isVisible: boolean;
}
const Container = styled.div<Props>`
  position: absolute;
  transition: 0.1 all;
  //   background: var(--white);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  color: var(--white);
  opacity: ${(props) => (props.isVisible ? "100%" : "0%")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};

  //   background: linear-gradient(34deg, var(--dark-blue) 0%, var(--greenish) 95%);

  nav {
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--dark-blue);
    width: 100%;
  }

  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  ul {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    height: 70%;
  }

  .nav-item {
    color: var(--white);
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Container;
