import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { newTheme } from './theme';

ReactDOM.render(
  <ChakraProvider theme={newTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

