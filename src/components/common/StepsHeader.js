import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as stepsActions from '../../actions/stepsActions';

import StepBulletsWrapper from './StepBulletsWrapper';

export class StepsHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.setActiveStep = this.setActiveStep.bind(this);
    }
    setActiveStep(index){
        this.props.actions.setActiveStep(index);
    }
    render() {
        return (
            <div className="container-fluid">
                <StepBulletsWrapper
                    steps={this.props.steps}
                    onClick={this.setActiveStep}
                    activeStep={this.props.activeStep}
                />
            </div>
        );
    }

}

StepsHeader.propTypes = {
    actions: PropTypes.object.isRequired,
    steps:PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        steps: state.steps,
        activeStep: state.activeStep
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(stepsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StepsHeader);
