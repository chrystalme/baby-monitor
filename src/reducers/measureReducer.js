import * as actionType from '../actions/actionTypes';

export const measureReducer = (state = { measures: [] }, action) => {
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
      return [
        ...state, { measureId: action.measureId, value: action.value },
      ];
    case actionType.SET_MEASUREMENT:
      return { items: [...state.items, action.payload] };
    default:
      return state;
  }
};
