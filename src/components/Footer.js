import React, { useState, useEffect, useMemo, useRef } from 'react';

function Footer(props) {

    const { 
        stepsByNumber,
        currentStep,
        showAlert,
        handleCurrentStep,
        selectedCar,
        isCarSelected,
        totalPrice
    } = props;

    const lastStep = useMemo(() => Object.keys(stepsByNumber).length, [stepsByNumber]);
    
    const handleNextStep = () => {
        if (currentStep !== lastStep) {
            handleCurrentStep(currentStep + 1);
        }
    };
    
    const handlePrevStep = () => {
        if (currentStep !== 1) {
            handleCurrentStep(currentStep - 1);
        }
    };

    const [baseColorImage, setBaseColorImage] = useState();
    
    useEffect(() => {
        if (isCarSelected) {
            const imageUrl = selectedCar.colors[0].imageUrl;
            setBaseColorImage(imageUrl);
        }
    }, [isCarSelected, selectedCar]);
    
    let buttonText = currentStep !== lastStep ? stepsByNumber[currentStep + 1] : 'Buy Now';
  
    return (
        <footer className={`builder-footer ${isCarSelected ? "" : 'disabled'} ${currentStep === 1 ? "step-1" : ''} ${showAlert ? "show-alert" : ''}`}>
            <div class="selected-product">
                <img src={baseColorImage} alt="Product preview" /> 
                <div class="tot-price">
                    <span>Total</span>
                    <span class="total">${totalPrice}</span>
                </div>
            </div>
            <nav class="builder-secondary-nav">
                <ul>
                    <li class="next nav-item">
                        <ul>
                            <li class="visible">
                                <a href={`#${buttonText}`} onClick={() => handleNextStep()}>{buttonText}</a>
                            </li>
                        </ul>
                    </li>
                    <li class="prev nav-item">
                        <ul>
                            <li class="visible">
                                <a href={`#${buttonText}`} onClick={() => handlePrevStep()}>{buttonText}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <span class="alert">Please, select a model first!</span>
        </footer>
    );
}

export default Footer;
