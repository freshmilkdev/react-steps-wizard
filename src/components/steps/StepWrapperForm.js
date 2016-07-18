import React, {PropTypes} from 'react';

import { browserHistory } from 'react-router';

const StepWrapperForm = ({children}) => {

    const _onSubmit = (event) => {
        event.preventDefault();
        browserHistory.push('/step/4');
    };

    return (
        <div className="row" onSubmit={_onSubmit}>
            <div className="col-md-6 col-md-offset-3">
                <form className="step-wrapper-form">
                    {children}
                    <div className="text-center form-group">
                        <button className="btn btn-default" type="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>);
};

StepWrapperForm.propTypes = {
    children: PropTypes.object
};

export default StepWrapperForm;