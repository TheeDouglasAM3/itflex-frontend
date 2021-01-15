import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #2e2e2e;
    background: #ffe8bf;
    width: 100%;
  }
  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
  a { 
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
