import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./index.style";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>
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
