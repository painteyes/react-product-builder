import React, { useCallback, useRef } from 'react';
import BuilderStepOne from './BuilderStepOne';
import BuilderStepTwo from './BuilderStepTwo';
import BuilderStepThree from './BuilderStepThree';
import BuilderStepFour from './BuilderStepFour';
import cars from '../data/cars';

function BuilderSteps(props) {

  const { 
    currentStep,
    selectedCar,
    setSelectedCar,
    isCarSelected,
    isCarChanged,
    colors,
    selectedColor,
    setSelectedColor,
    accessories,
    selectedAccessories,
    setSelectedAccessories,
  } = props;

  const previousLoadedRef = useRef({});

  const checkSelectedCarChange = (newSelectedCar, prevSelectedCar) => {
    return newSelectedCar.id !== prevSelectedCar.id;
  }

  const handleSelectCar = useCallback((newSelectedCar) => {
    setSelectedCar((prevSelectedCar) => {
      if (!isCarSelected || checkSelectedCarChange(newSelectedCar, prevSelectedCar)) {
        return newSelectedCar;
      }
      return {};
    });
  }, [isCarSelected, setSelectedCar]);

  let mainContent, mainContentProps;
  switch (currentStep) {
    case 1:
      mainContentProps = {
        cars: cars,
        selectedCar: selectedCar,
        isCarSelected:isCarSelected,
        previousLoadedRef: previousLoadedRef,
        handleSelectCar: handleSelectCar
      };
      mainContent = <BuilderStepOne {...mainContentProps} />;
      break;
    case 2:
      mainContentProps = {
        colors: colors,
        selectedColor: selectedColor,
        setSelectedColor: setSelectedColor,
      };
      mainContent = <BuilderStepTwo {...mainContentProps} />;
      break;
    case 3:
      mainContentProps = {
        accessories: accessories,
        selectedAccessories: selectedAccessories,
        setSelectedAccessories: setSelectedAccessories,
      };
      mainContent = <BuilderStepThree {...mainContentProps} />;
      break;
    case 4:
      mainContentProps = {
        selectedCar: selectedCar,
        selectedColor: selectedColor,
        selectedAccessories: selectedAccessories,
      };
      mainContent = <BuilderStepFour {...mainContentProps} />;
      break;
    default:
      mainContent = null;
  }

  return (
    <div className="builder-steps">
        <ul>
          <li className="builder-step active">
            {mainContent}
          </li>
        </ul>
    </div>      
  );
}

export default BuilderSteps;
