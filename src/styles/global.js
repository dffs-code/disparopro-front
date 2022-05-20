import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset};

  :root {
    /* Typography */
    --text-font: 'Montserrat', sans-serif;

    /* Colors */
    --black: #111;
    --dark-gray: #333;
    --medium-gray: #4f4f4f;
    --gray: #828282;
    --light-gray: #bdbdbd;
    --lighter-gray: #f2f2f2;
    --dark-white: #f5f7fb;
    --white: #fff;

    /* Units */
    --gutter: .9375rem; // 15px
    --container-xxl: 94.875rem; // 1518px
    --container-xl: 71.25rem; // 1140px
    --container-lg: 60rem; // 960px
    --container-md: 45rem; // 720px
    --container-sm: 33.75rem; // 540px
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: var(--black);
    font-family: var(--text-font);
    overflow-x: hidden;

  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  button, 
  input, 
  textarea {
    border: none;

    

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyles;
