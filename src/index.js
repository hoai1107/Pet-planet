import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AccessTokenProvider } from './context/AccessTokenContext';
import App from './App';
import "./styles/style.css";
import theme from './styles/theme';

import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AccessTokenProvider>
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>
    </AccessTokenProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
