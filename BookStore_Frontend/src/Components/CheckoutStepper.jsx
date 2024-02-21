import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css';
import { emptyCart } from './Redux/storeSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutStepper = ({ stepper_config = [] , customerInfoSubmitted, handleSubmit }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    });
    const navigate = useNavigate();
    const stepRef = useRef([]);
    const dispatch = useDispatch();
    const totalPrice = useSelector((state) => state.storeSlice.totalPrice);
    //const emptyCart = useSelector((state)=>state.storeSlice.emptyCart);

    const ActiveComponent = stepper_config[currentStep - 1]?.Component;

    const calcProgressBar = () => {
        return (
            ((currentStep - 1) / (stepper_config.length - 1)) * 100
        );
    }

    const handleNext = () => {
        setCurrentStep(prevStep => {
            if (prevStep === stepper_config.length) {
                setIsComplete(true);
                dispatch(emptyCart());
                return prevStep;
            } else {
                return prevStep + 1;
            }
        });
    }

    if (!stepper_config.length) {
        return <></>;
    }
    const handleClick = () => {
        navigate('/home')
    }
    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepper_config.length - 1].offsetWidth / 2,
        });
    }, [stepRef]);

    return (
        <>
            <div className='stepper'>
                {
                    stepper_config.map((step, index) => {
                        return (
                            <div key={step.name}
                                ref={(el) => (stepRef.current[index] = el)}
                                className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""}
                                ${currentStep === index + 1 ? "active" : ""}
                                `}>
                                <div className='step-number'>
                                    {
                                        currentStep > index + 1 || isComplete ? (<span>&#10003;</span>) : (
                                            index + 1
                                        )
                                    }
                                </div>
                                <div className='step-name'>{step.name}</div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='progress-bar' style={{
                marginLeft: margins.marginLeft,
                marginRight: margins.marginRight
            }}>
                <div className='progress' style={{ width: `${calcProgressBar()}%` }}></div>
            </div>
            <ActiveComponent />
            {
                <div className='d-flex justify-content-center align-items-center'>
                {!isComplete && customerInfoSubmitted &&(
                    <button className='btn btn-primary form-control w-25' onClick={handleNext}>
                        {currentStep === stepper_config.length ? "Finish" : "Next"}
                    </button>
                )}
            </div>
            
            }
            {isComplete && <div className='h5 text-center'>
                Thanks for ordering you can buy more by visiting home <button className='btn' onClick={handleClick}>order more</button>
                </div>}
        </>
    );
}

export default CheckoutStepper;
