import { combineReducers } from 'redux';
import authReducer from './authReducer';
import measureReducer from './measureReducer';
import measurementReducer from './measurementReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  measures: measureReducer,
  measurements: measurementReducer,
});

export default rootReducer;
