import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
// import filterReducer from './filter';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,

});

export default rootReducer;
