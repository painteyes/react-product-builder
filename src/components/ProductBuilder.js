import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BuilderSteps from './BuilderSteps.js';

function ProductBuilder() {

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="product-builder">
      <Header setCurrentStep={setCurrentStep} />
      <BuilderSteps currentStep={currentStep} />
      <Footer />
    </div>
  );
}

export default ProductBuilder;