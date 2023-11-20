import { createGlobalStyle } from 'styled-components'
import { Theme } from './Themes'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
    color: ${Theme.gray80};
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.4rem;
    background: ${Theme.green};
    font-family: 'Ubuntu', sans-serif;
  }
  
  h1 {
    font-size: 6.4rem;
  }

  h2 {
    font-size: 5rem;
    font-family: 'Antonio', sans-serif;
    font-weight: 300;
    line-height: 130%;
  }

  h3 {
    font-size: 3.6rem;
  }

  h4 {
    font-size: 2.4rem;
    font-weight: 400;
  }

  p {
    font-family: 'Ubuntu', sans-serif;
    line-height: 2.66rem;
    font-size: 2rem;
    font-weight: 400;
  }

  span {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;

    &:focus {
      border: none;
      outline: 2px solid ${Theme.green};
      outline-offset: 1px; 
    }
  }

  input {
    border: none;
    font-family: 'Ubuntu', sans-serif;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    
    &[type=number] {
      -moz-appearance: textfield;
    }

    &:focus {
      border: none;
      outline: 2px solid ${Theme.green};
      outline-offset: 1px; 
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${Theme.white};
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      font-size: 2.3rem;
    }

    td {
      align-self: center;
    }

    thead {
      position: sticky;
      top: 0;
    }

    tbody {
      overflow-y: auto;
      max-height: 520px;
    }

    tbody::-webkit-scrollbar {
      width: 8px;
    }

    tbody::-webkit-scrollbar-track {
      background-color: #F5F5F5;
    }

    tbody::-webkit-scrollbar-thumb {
      background-color: #888888;
      border-radius: 4px;
    }
  }
`
