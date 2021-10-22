import * as actionType from '../actions/actionTypes';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
