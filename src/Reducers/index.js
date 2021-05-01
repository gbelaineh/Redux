import { combineReducers } from 'redux';
import counetrReducer from './counter';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
  counetrReducer,
  loggedReducer,
});

export default allReducers;
