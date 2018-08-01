import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const listener = ({ getState }) => next => action => {
  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);
  const payload = { actionType: action.type, state: getState() };
  console.log('state after dispatch', payload);
  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

const middleWares = [thunk, listener];
const configureStore = initialState =>
  createStore(combineReducers(reducers), (initialState = {}), composeWithDevTools(applyMiddleware(...middleWares)));

const store = configureStore();

/**
 * Handle Array case (with UNDO feature);
 * Create localstate for D3 DataBase
 */

export default store;
