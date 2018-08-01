import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = initialState =>
  createStore(
    combineReducers(reducers),
    (initialState = {}),
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f),
    // composeWithDevTools(applyMiddleware(thunk))
  );

const store = configureStore();

store.subscribe(() => {
  /**
   * store.getState() is my state data ;
   */
  console.log('store : ', store);
});

export default store;

/*
export const configure = (initialState={}) => {
	const reducer= combineReducers(reducers)

	const store = redux.createStore(reducer, initialState, redux.compose(

			redux.applyMiddleware(thunk),

			window.devToolsExtension ? window.devToolsExtension() : f => f
		));


	return store;
};
 */
