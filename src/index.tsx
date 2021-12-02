import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./index.style";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/store"




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
