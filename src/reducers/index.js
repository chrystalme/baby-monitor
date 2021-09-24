import { combineReducers } from 'redux';
import authReducer from './authReducer';
import measureReducer from './measureReducer';
import measurementReducer from './measurementReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  measures: measureReducer,
  measurements: measurementReducer,
  user: userReducer,
});

export default rootReducer;
