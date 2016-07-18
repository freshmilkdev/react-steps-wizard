import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function activeStepReducer(state = initialState.activeStep, action) {
    switch (action.type) {
        case types.SET_ACTIVE_STEP:
            return action.stepIndex;
        default:
            return state;
    }
}
