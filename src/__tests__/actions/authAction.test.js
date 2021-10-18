import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actionCreator from '../../actions/authActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('should show loginUser action generator', () => {
    store.dispatch(actionCreator.loginUser());
  });

  test('should show registerUser action generator', () => {
    const store = mockStore([]);
    store.dispatch(actionCreator.registerUser());
  });

  test('should show registerUser action generator', () => {
    store.dispatch(actionCreator.logout());
  });

  test('should show registerUser action generator', () => {
    store.dispatch(actionCreator.returningUser());
  });
});
