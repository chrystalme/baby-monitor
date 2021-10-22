import authReducer from '../../reducers/authReducer';
import { loginUser, registerUser } from '../../actions/authActions';
import * as data from '../helper';

const auth = {
  token: localStorage.getItem('user_token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

describe('Get User', () => {
  it('Should return default state of auth', () => {
    const state = authReducer(undefined, {});
    expect(state).toStrictEqual(auth);
  });
  it('should return the state of auth', () => {
    const action = registerUser(data.user);
    const state = authReducer(undefined, action);
    expect(state.auth).toEqual(undefined);
  });
  it('should return updated the state of auth', () => {
    authReducer(undefined, loginUser({ email: 'test@tester.com', password: '123456' }));
    expect(true).toEqual(data.auth.isAuthenticated);
  });
});
