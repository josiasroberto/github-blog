import { createGlobalStyle } from 'styled-components'
import firaCode from '@/assets/fonts/FiraCode-Regular.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }

  body{
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p{
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  
`
