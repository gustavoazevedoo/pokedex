import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;

    --gray-100: #F2F2F2;
    --gray-300: #919191;
    --gray-400: #616161;
    --gray-600: #313131;
    --gray-800: #212121;

    --blue-400: #30a7d7;
    --blue-500: #0c86b6;
    --blue-700: #562bf7;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: var(--white);
    color: var(--gray-600);
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea, button {
    font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
