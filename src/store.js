import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = ({ getState }) => next => action => {
  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);
  console.log('state after dispatch', getState(), action.type);
  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};
const middleWares = [thunk, logger];
const configureStore = initialState => createStore(combineReducers(reducers), (initialState = {}), applyMiddleware(...middleWares));

const store = configureStore();

export default store;
