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
    --off-white: #F8F9FA;
    --primary-dark: #312A7E;
    --primary-100: #E7E6FD;
    --secondary: #FF5D73;
    --secondary-dark: #AB495A;
    --secondary-100: #FFDFE3;
    font-size: 16px;
  }
  
  body {
    overflow-x: hidden;
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1rem;
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


  .container {
    margin: 0 1.5rem;
  }
`

export default GlobalStyles
