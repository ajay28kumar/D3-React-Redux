import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import store from './store';

import './styles.css';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App {...store} />
  </Provider>,
  rootElement,
);
