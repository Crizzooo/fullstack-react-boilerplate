/* Dependencies */
const {combineReducers} = require('redux');

/* Import Other Reducers */
import dummyReducer from './dummyReducer.js';


/* Combine & Export Reducers to Store */
const mainReducer = combineReducers({
  dummyReducer
});

module.exports = mainReducer;
