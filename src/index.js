import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MainApp';
import { Provider } from "react-redux";
import store from "./sotre";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

