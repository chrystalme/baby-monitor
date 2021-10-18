import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const composeEnhancer = composeWithDevTools({ trace: true });

const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(...middleware)));
export default store;
