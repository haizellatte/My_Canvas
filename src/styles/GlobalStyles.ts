import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => {
    return css`
      body {
        background: #cbcbcb;
        color: ${theme.color.black};
        overflow: hidden;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }}


`;

export default GlobalStyle;