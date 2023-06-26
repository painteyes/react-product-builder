import React, { useMemo } from 'react';

function Header(props) {
    
    const { 
        stepsByNumber, 
        currentStep, 
        handleCurrentStep, 
        isCarSelected
    } = props;
  
  const keys = useMemo(() => Object.keys(stepsByNumber).map(Number), [stepsByNumber]);
  
    return (
        <header className='main-header'>
            <h1>Product Builder</h1>
            <nav className={`builder-main-nav ${isCarSelected ? "" : "disabled"}`}>
                <ul>
                {keys.map((step, index) => (
                    <li key={index} className={currentStep === step ? "active" : ""} onClick={() => handleCurrentStep(step)}>
                        <a href={`#${stepsByNumber[step]}`}>{stepsByNumber[step]}</a>
                    </li>
                ))}
                </ul>
            </nav>
            <a href="https://codyhouse.co/gem/product-builder" className={'nugget-info hide-on-mobile'}>
                Article & Download
            </a>
        </header>
    )
}

export default Header;