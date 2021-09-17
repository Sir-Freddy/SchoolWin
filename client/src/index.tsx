import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Pages/Context';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index';
import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <Context>
        <App />
      </Context>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
