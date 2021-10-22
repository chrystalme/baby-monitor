import { combineReducers } from 'redux';
import authReducer from './authReducer';
import measureReducer from './measureReducer';
import measurementReducer from './measurementReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  measures: measureReducer,
  measurements: measurementReducer,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;
