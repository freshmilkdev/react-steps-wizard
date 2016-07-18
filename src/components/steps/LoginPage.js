import React, {PropTypes} from 'react';

class LoginStep extends React.Component {
    render() {
        return (<div className="text-center">
            <button className="btn btn-primary">Login</button>
        </div>);
    }
}

LoginStep.propTypes = {
    //myProp: PropTypes.string.isRequred
};

export default LoginStep;