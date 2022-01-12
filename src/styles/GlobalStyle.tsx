import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  html, body {
    background: #f0f3f8;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
