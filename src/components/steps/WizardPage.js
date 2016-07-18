import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StepWrapperForm from './StepWrapperForm';
import Step1 from './Step1';

export class WizardPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        if (this.props.step) {
            switch (this.props.step) {
                case '1':
                    return <Step1 />;
                case '2':
                    return <Step1 />;
                case '3':
                    return <Step1 />;
                case '4':
                    return <Step1 />;
                case '5':
                    return <Step1 />;
                default:
                    return <div>Loading...</div>
            }
        } else {
            return <div>Loading...</div>;
        }
    }

}

WizardPage.propTypes = {
    step: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    const step = ownProps.params.step;
    return {
        step: step
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardPage);
