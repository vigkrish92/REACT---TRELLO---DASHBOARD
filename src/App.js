import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components'
import {Board} from "./component/board";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4bcffa;
  }
`;

function App() {
  return (
    <div><Board />
      <GlobalStyle /></div>
  );
}

export default App;
