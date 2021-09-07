import { combineReducers } from 'redux';
import authReducer from './auth';
// import filterReducer from './filter';

const rootReducer = combineReducers({
  auth: authReducer,

});

export default rootReducer;
