import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

store.subscribe(() => {
  // TODO: store.getState() is my state data ;
  console.log('store : ', store.dispatch);
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App {...store} />
  </Provider>,
  rootElement,
);
