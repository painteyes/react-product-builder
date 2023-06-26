import React, { useState, useEffect, useMemo, useRef } from 'react';



function Footer(props) {

    const { 
        stepsByNumber,
        currentStep,
        showAlert,
        handleCurrentStep,
        selectedCar,
        // baseColor,
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


    // const baseColorRef = useRef();

    // useEffect(() => {
    //     if (isCarSelected) {
    //         setBaseColor(selectedCar[0]);
    //         baseColorRef.current = selectedCar[0];
    //     } 
    // }, [baseColor, selectedCar]);



    // useEffect(() => {
    //     if (selectedCar) {
    //         baseColorRef.current = baseColor;
    //     }
    // }, [baseColor, selectedCar]);

    // const [baseColorState, setBaseColorState] = useState();
    const [baseColorImage, setBaseColorImage] = useState();
    // const baseColorRef = useRef();
    
    useEffect(() => {
        if (isCarSelected) {
            const imageUrl = selectedCar.colors[0].imageUrl;
            // baseColorRef.current = imageUrl;
            setBaseColorImage(imageUrl);
        }
    }, [isCarSelected, selectedCar]);
    



    
    let buttonText = currentStep !== lastStep ? stepsByNumber[currentStep + 1] : 'Buy Now';
  
    return (
        <footer className={`builder-footer ${isCarSelected ? "" : 'disabled'} ${currentStep === 1 ? "step-1" : ''} ${showAlert ? "show-alert" : ''}`}>

            <div class="selected-product">

            <img src={baseColorImage} alt="Product preview" /> 
            {/* {baseColor 
                ? <img src={baseColor} alt="Product preview" /> 
                : <img src={baseColorRef.current} alt="Product preview" /> 
            } */}


      
                



                <div class="tot-price">
                    <span>Total</span>
                    <span class="total">${totalPrice}</span>
                </div>
            </div>
            <nav class="builder-secondary-nav">
                <ul>
                    <li class="next nav-item">
                        <ul>
                            {/* <li class="visible visited"><a href="#0">Colors</a></li> */}
                            <li class="visible">
                                <a href="#0" onClick={() => handleNextStep()}>{buttonText}</a>
                            </li>
                            {/* <li class=""><a href="#0">Summary</a></li>
                            <li class="buy"><a href="#0">Buy Now</a></li> */}
                        </ul>
                    </li>
                    <li class="prev nav-item">
                        <ul>
                            <li class="visible">
                                <a href="#0" onClick={() => handlePrevStep()}>{buttonText}</a>
                            </li>
                            {/* <li class=""><a href="#0">Models</a></li>
                            <li class=""><a href="#0">Colors</a></li>
                            <li class=""><a href="#0">Accessories</a></li> */}
                        </ul>
                    </li>
                </ul>
            </nav>
            <span class="alert">Please, select a model first!</span>
        </footer>
    );
}

export default Footer;
