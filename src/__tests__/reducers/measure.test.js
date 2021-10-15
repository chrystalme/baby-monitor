import measureReducer from '../../reducers/measureReducer';
import { getMeasures } from '../../actions/actionTypes';
import * as data from '../helper';

const initialState = { measure: [] };
describe('Get Measure', () => {
  it('Should return default state of measures', () => {
    const state = measureReducer(undefined, {});
    expect(state.measures).toStrictEqual(initialState.measure);
  });
  it('should return the state of measures', () => {
    const action = getMeasures(data.measure);
    const state = measureReducer(undefined, action);
    expect(state.measures).toEqual(data.measure);
  });
});
