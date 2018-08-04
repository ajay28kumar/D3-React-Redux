import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import eventListener from './listener';

const listener = ({ getState }) => next => action => {
  const returnValue = next(action);
  const payload = { actionType: action.type, state: getState() };
  eventListener(payload);
  return returnValue;
};

const middleWares = [thunk, listener];

const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(...middleWares)));

/**
 * Handle Array case (with UNDO feature);
 * Create localstate for D3 DataBase
 */

export default store;
