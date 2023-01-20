import styled from "styled-components";

const Container = styled.div`
  background: black;
  .modal_backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal_container {
    display: flex;
    justify-content: center;
    top: 20vh;
    position: fixed;
    background-color: var(--ghost-white);
    padding: 3rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px var(--grey);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }
  .modal_content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .modal_title {
    display: flex;
    font-family: var(--oswald);
    font-size: 3rem;
    font-weight: 400;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .modal_label {
    font-size: 1.2rem;
    color: var(--grey);
    font-family: var(--poppins);
    margin-bottom: 1rem;
  }
  .modal_action-button {
    margin-top: 1.5rem;
  }
  .or_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
  }
  .or_line {
    background-color: var(--light-grey);
    width: 35%;
    height: 1px;
    border-radius: 2px;
  }
  .or_text {
    font-family: var(--raleway);
    font-weight: 500;
  }
  .custom_budget_input {
    border: 1px solid var(--light-grey);
    padding: 0.8rem 0.5rem;
  }
  @media (min-width: 768px) {
    .modal_container {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Container;
