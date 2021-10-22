import userReducer from '../../reducers/userReducer';
import getUser from '../../actions/userAction';
import * as data from '../helper';

const initialState = {
  user: [],
};
describe('Get User', () => {
  it('Should return default state of user', () => {
    const state = userReducer(undefined, {});
    expect(state).toStrictEqual(initialState.user);
  });
  it('should return the state of user', () => {
    const action = getUser(data.user);
    const state = userReducer(undefined, action);
    expect(state.user).toEqual(data.user);
  });
});
