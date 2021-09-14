import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import { measurementReducer, measureReducer } from './measureReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  measures: measureReducer,
  measurements: measurementReducer,
});

export default rootReducer;
