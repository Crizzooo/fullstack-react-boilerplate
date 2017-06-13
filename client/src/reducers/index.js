/* Dependencies */
import { combineReducers } from 'redux';

/* Import Other Reducers */
import dummyReducer from './dummy';
import userReducer from './user';


/* Combine & Export Reducers to Store */
export default combineReducers({
  dummyReducer,
  userReducer
});
