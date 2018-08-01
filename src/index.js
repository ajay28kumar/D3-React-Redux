import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import App from "./app";
import store from './store'
import "./styles.css";

store.subscribe(() => {
  console.log('store : ', {...store.getState()}, {...store});
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App {...store}/>
  </Provider>,
  rootElement);
