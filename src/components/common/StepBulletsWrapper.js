import React, {PropTypes} from 'react';
import StepBullet from './StepBullet';

const StepBulletsWrapper = ({steps, onClick, activeStep}) => {

    let lastIndex = steps.length - 1;

    return (<div className="row bs-wizard">
        {

            steps.map((step, index) =>{
                return (<StepBullet
                    onClick={onClick}
                    activeStep={activeStep}
                    step={step}
                    index={index+1}
                    key={index}
                    isLast={index == lastIndex}
                />);
            })
        }
    </div>);
};

StepBulletsWrapper.propTypes = {
    steps:PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default StepBulletsWrapper;