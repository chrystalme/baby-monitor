import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actionCreator from '../../actions/measurement';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('Measurement actions', () => {
  test('should show loginUser action generator', () => {
    store.dispatch(actionCreator.setMeasurement());
  });

  test('should show registerUser action generator', () => {
    const store = mockStore([]);
    store.dispatch(actionCreator.getMeasurement());
  });
});
