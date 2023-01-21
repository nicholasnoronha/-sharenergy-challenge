import styled from "styled-components";

const Container = styled.div`
  background: var(--dark-blue);
  table {
    width: 100%;
  }
  th {
    background: var(--white);
    padding: 8px;
    font-size: 14px;
  }
  td {
    background: var(--white);
    padding: 8px;
    text-align: center;
  }
  @media (max-width: 870px) {
    thead {
      display: none;
    }
    td {
      display: block;
      text-align: center;
    }
    td:first-child {
      font-weight: bold;
      border-bottom: 1px solid var(--dark-blue);
    }
    // td::before {
    //   text-align: left;
    //   font-weight: bold;
    //   content: attr(data-label);
    // }
  }
`;

export default Container;
