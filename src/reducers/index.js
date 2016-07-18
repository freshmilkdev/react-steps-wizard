import {combineReducers} from 'redux';
import steps from './stepsReducer';
import activeStep from './activeStepReducer';

const rootReducer = combineReducers({
  steps,
  activeStep
});

export default rootReducer;
