import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins' ;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap') format('woff2');
    font-weight: normal;
    font-stretch: normal;
  }

  html {
    --max-width: 1180px;
    --dark: #1B1245;
    --primary-dark: #312A7E;
    --primary-100: #E7E6FD;
    font-size: 16px;
  }
  
  body {
    overflow-x: hidden;
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: var(--color-background);
    color: var(--color-text);
  }

  *, *::before, *after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: var(--color-secondary);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h2 {
      color: var(--primary-dark);
      line-height: 115%;
  }

  .section.right::before {
    content: url('dots.svg');
    position: absolute;
    right: -5rem;
    top: 10rem;

    @media (max-width: 656px) {
      transform: scale(0.8);
    }
  }
`

export default GlobalStyles
