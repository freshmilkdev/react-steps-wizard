import * as types from './actionTypes';

//test
export function loadSteps() {
  return { type: types.LOAD_STEPS};
}

export function setActiveStep(stepIndex) {
  return { type: types.SET_ACTIVE_STEP, stepIndex };
}
