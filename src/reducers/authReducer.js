import * as actionTypes from '../actions/actionTypes';

// const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  idToken: localStorage.getItem('id_token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.actionTypes) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    // case actionTypes.USER_LOADED:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     isLoading: false,
    //     user: action.payload,
    //   };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case actionTypes.AUTH_ERROR:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        idToken: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
