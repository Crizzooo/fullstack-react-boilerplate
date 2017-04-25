import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(
    createLogger(),
    thunkMiddleware
  ))
);

module.exports = store;
