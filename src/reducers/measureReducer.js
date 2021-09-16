import * as actionType from '../actions/actionTypes';

export const measureReducer = (state = { measures: [], isActive: false }, action) => {
  switch (action.type) {
    case actionType.GET_MEASURE:
      return { ...state, measures: action.payload };
    default:
      return state;
  }
};

export const measurementReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_MEASUREMENT:
      return ({ ...state, measurements: action.payload });
    default:
      return state;
  }
};
