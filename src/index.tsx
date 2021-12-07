import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./index.style";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from 'react-redux';
import store from "./store/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from "./store/store"




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
    <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
          />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
