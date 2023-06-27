import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import BuilderSteps from './BuilderSteps.js';
import "../styles/style.css"

function ProductBuilder() {

  // Constants
  const stepsByNumber = useMemo(() => ({
    1: "models",
    2: "colors",
    3: "accessories",
    4: "summary"
  }), []);

  // State
  const [currentStep, setCurrentStep] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [colorOptions, setColorOptions] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});
  const [availableAccessories, setAvailableAccessories] = useState([]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Refs
  const previousSelectedCarRef = useRef(selectedCar);

  const isCarChangedRef = useRef(false);

  // Memo
  const isCarSelected = useMemo(() => Object.keys(selectedCar).length > 0, [selectedCar]);

  const hasSelectedAccessories = useMemo(() => selectedAccessories.length > 0, [selectedAccessories]);

  const shouldShowAlert = useMemo(() => {
    return currentStep === 1 && !isCarSelected;
  }, [currentStep, isCarSelected]);

  const getTotalPrice = useMemo(() => {
    if (!isCarSelected) {
      return 0;
    }

    let total = selectedCar.basePrice + selectedColor.price;
    
    if (hasSelectedAccessories) {
      total += selectedAccessories.reduce((acc, accessory) => acc + (accessory.price || 0), 0);
    }

    return total;
  }, [isCarSelected, selectedCar.basePrice, selectedColor.price, hasSelectedAccessories, selectedAccessories]);

  // Functions
  const handleCurrentStep = (step) => {
    if (shouldShowAlert) {
      setShowAlert(true);
    } else {
      setCurrentStep(step);
    }
  };

  // Callbacks
  const resetSelectedColor = useCallback((colors) => {
    if (isCarSelected && colors.length > 0) {
      setSelectedColor(colors[0]);
    } else {
      setSelectedColor({});
    }
  }, [isCarSelected]);

  const resetSelectedAccessories = useCallback(() => {
    if (hasSelectedAccessories) {
      setSelectedAccessories([]);
    }
  }, [hasSelectedAccessories]);

  // Effects
  useEffect(() => {
    if (showAlert && isCarSelected) {
      setShowAlert(false);
    }
  }, [isCarSelected, showAlert]);

  useEffect(() => {
    const isCarChanged = previousSelectedCarRef.current.id !== selectedCar.id;
    isCarChangedRef.current = isCarChanged;
    if (isCarChanged) {
      previousSelectedCarRef.current = selectedCar;
    }
  }, [selectedCar]);

  useEffect(() => {    
    if (isCarChangedRef.current) {
      let newColors = [];
      let newAccessories = [];
      
      if (isCarSelected) {
        newColors = selectedCar.colors;
        newAccessories = selectedCar.accessories;
      }
      
      setColorOptions(newColors);
      setAvailableAccessories(newAccessories);
      
      resetSelectedColor(newColors);
      resetSelectedAccessories();
  
      // Reset isCarChanged to false after updating everything
      isCarChangedRef.current = false;
    }
  }, [isCarSelected, selectedCar, resetSelectedColor, resetSelectedAccessories]);

  useEffect(() => {
    setTotalPrice(getTotalPrice);
  }, [getTotalPrice]);


  return (
    <div className="product-builder">
      
      <Header 
        {...{
          stepsByNumber,
          currentStep,
          handleCurrentStep,
          isCarSelected
        }} 
      />

      <BuilderSteps 
        {...{ 
          currentStep,
          selectedCar,
          setSelectedCar,
          isCarSelected,
          previousSelectedCarRef,
          selectedColor,
          setSelectedColor,
          selectedAccessories,
          setSelectedAccessories 
        }} 
        colors={colorOptions} 
        accessories={availableAccessories} 
      />

      <Footer 
        {...{
          stepsByNumber,
          currentStep,
          handleCurrentStep,
          showAlert,
          selectedCar,
          isCarSelected,
          totalPrice
        }} 
      />
    </div>
  );
}

export default ProductBuilder;