import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('user_token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGOUT_SUCCESS:
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.USER_LOADING:
      return {
        ...state, isLoading: true,
      };
    case actionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
