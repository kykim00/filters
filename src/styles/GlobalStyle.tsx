import { css } from "@emotion/react";

const GlobalStyle = css`
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  button {
    border: none;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
    font-size: 20px;
  }
`;

export default GlobalStyle;
