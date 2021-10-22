import measurementReducer from '../../reducers/measurementReducer';
import { setMeasurement, getMeasurement } from '../../actions/measurement';
import * as data from '../helper';

const initialState = { measurement: {} };
describe('Get Measurement', () => {
  it('Should return default state of measurement', () => {
    const state = measurementReducer(undefined, {});
    expect(state).toStrictEqual(initialState.measurement);
  });
  it('should return the state of measurement', () => {
    const action = setMeasurement(data.measurement);
    const state = measurementReducer(undefined, action);
    expect(state.measurement).toEqual(undefined);
  });
  it('should not return the state of measurement', () => {
    const state = data.measurement;
    expect(state).toEqual({ ...data.measurement });
  });
  it('should return the new state of measurement', () => {
    const action = getMeasurement(data.measurement);
    const state = measurementReducer(undefined, action);
    expect(state.measurement).toEqual(undefined);
  });
});
