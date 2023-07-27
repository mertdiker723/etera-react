import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.scss";
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./core/redux/store/index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
