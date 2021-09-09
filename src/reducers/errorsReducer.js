import * as actionTypes from '../actions/actionTypes';

const initialState = {
  msg: {},
  status: null,
  id: null,
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERROR:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default errorsReducer;
