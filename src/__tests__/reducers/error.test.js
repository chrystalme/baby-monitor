import errorReducer from '../../reducers/errorReducer';
import { returnErrors /* clearErrors */ } from '../../actions/errorActions';
import * as data from '../helper';

const initialState = {
  msg: [],
  status: null,
  id: null,
};

describe('Get Error', () => {
  it('Should return default state of error', () => {
    const state = errorReducer(undefined, {});
    expect(state).toStrictEqual(initialState);
  });
  it('should return the state of error', () => {
    const action = returnErrors(data.error.msg);
    const state = errorReducer(undefined, action);
    expect(state.msg).toEqual(data.error.msg);
  });
});
