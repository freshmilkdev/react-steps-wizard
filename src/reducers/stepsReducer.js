import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stepsReducer(state = initialState.steps, action) {
  switch (action.type) {
    case types.LOAD_STEPS:
      return state;
    default:
      return state;
  }
}
