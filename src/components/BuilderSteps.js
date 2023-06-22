import React, { useState, useEffect, useCallback } from 'react';
import BuilderStepOne from './BuilderStepOne';
import BuilderStepTwo from './BuilderStepTwo';
import BuilderStepThree from './BuilderStepThree';
import BuilderStepFour from './BuilderStepFour';
import cars from '../data/cars';

function BuilderSteps(props) {

  const { currentStep } = props;

  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedAccessories, setSelectedAccessories] = useState(null);

  const checkSelectedCarChange = useCallback((newSelectedCar, prevSelectedCar = selectedCar) => {
    if (!prevSelectedCar) {
      return true;
    } 
    return newSelectedCar.id !== prevSelectedCar.id;
  }, [selectedCar]);
  
  const handleSelectCar = useCallback((newSelectedCar) => {
    setSelectedCar((prevSelectedCar) => {
      if (checkSelectedCarChange(newSelectedCar, prevSelectedCar)) {
        return newSelectedCar;
      }
      return null;
    });
  }, [checkSelectedCarChange]);

  const sortedSelectedAccessories = useCallback(() => { 
    if (selectedCar) {
      const originalOrder = selectedCar.accessories.map(a => a.id);
      const sortedArray = [...selectedAccessories].sort((a, b) => {
        return originalOrder.indexOf(a.id) - originalOrder.indexOf(b.id);
      });
      return sortedArray;
    }
  }, [selectedAccessories, selectedCar])

  useEffect(() => {
    const resetSelectedColor = () => selectedCar ? setSelectedColor(selectedCar.colors[0]) : setSelectedColor(null) 
    const resetSelectedAccessories = () => setSelectedAccessories(null) 
    resetSelectedColor();
    resetSelectedAccessories()
  }, [selectedCar]);

  useEffect(() => {
    console.log("Car Selected: ", selectedCar);
  }, [selectedCar]);

  useEffect(() => {
    console.log("Color Selected: ", selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    if (selectedAccessories) console.log("Accessories Selected: ",  selectedAccessories) ;
  }, [selectedAccessories]);

  let mainContent, mainContentProps;
  switch (currentStep) {
    case 1:
      mainContentProps = {
        cars: cars,
        selectedCar: selectedCar,
        handleSelectCar: handleSelectCar
      };
      mainContent = <BuilderStepOne {...mainContentProps} />;
      break;
    case 2:
      mainContentProps = {
        availableColors: selectedCar?.colors,
        selectedColor: selectedColor,
        setSelectedColor: setSelectedColor,
      };
      mainContent = <BuilderStepTwo {...mainContentProps} />;
      break;
    case 3:
      mainContentProps = {
        availableAccessories: selectedCar.accessories,
        selectedAccessories: selectedAccessories,
        setSelectedAccessories: setSelectedAccessories,
      };
      mainContent = <BuilderStepThree {...mainContentProps} />;
      break;
    case 4:
      mainContentProps = {
        selectedCar: selectedCar,
        selectedColor: selectedColor,
        selectedAccessories: sortedSelectedAccessories(),
      };
      mainContent = <BuilderStepFour {...mainContentProps} />;
      break;
    default:
      mainContent = null;
  }

  return (
    <div>
      {mainContent}
    </div>  
  );
}

export default BuilderSteps;
