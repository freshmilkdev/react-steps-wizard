import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const StepBullet = ({index, step, onClick, activeStep, isLast}) => {
    let complete = activeStep > index ? 'complete' : '';
    let disabled = isLast ? ' disabled' : '';
    let className = `col-xs-2 bs-wizard-step ${complete} ${disabled}`;
    const _onClick = () => {onClick(index);};

    return (
        <Link onClick={_onClick} to={"/step/" + index} activeClassName="active" className={className}>
            <div className="text-center bs-wizard-stepnum">{step.stepName}</div>
            {isLast ? <span className="bs-wizard-dot"></span> : null}
            <div className="progress">
                <div className="progress-bar"></div>
            </div>
            <span className="bs-wizard-dot"></span>
        </Link>
    );
};

StepBullet.propTypes = {
    index: PropTypes.number.isRequired,
    step: PropTypes.object.isRequired,
    activeStep: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isLast: PropTypes.bool.isRequired
};

export default StepBullet;
