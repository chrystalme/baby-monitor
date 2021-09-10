import * as actionTypes from '../actions/actionTypes';

const user = JSON.parse(localStorage.getItem('user_token'));
const initialState = user
  ? { isAuthenticated: true, user }
  : { isAuthenticated: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        isAuthenticated: false,
        user: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
