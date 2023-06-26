import React, { useMemo } from 'react';

function BuilderStepFour(props) {

    const { 
        selectedCar, 
        selectedColor, 
        selectedAccessories 
    } = props;

    const sortedSelectedAccessories = useMemo(() => {
        const originalOrder = selectedCar.accessories.map(a => a.id);
        const sortedArray = [...selectedAccessories].sort((a, b) => {
          return originalOrder.indexOf(a.id) - originalOrder.indexOf(b.id);
        });
        return sortedArray;
    }, [selectedAccessories, selectedCar]);
      
    return (
        <section class="step-content">
            <header>
                <h1>Summary</h1>
                <span class="steps-indicator">Step 4 of 4</span>
            </header>
            <ul class="summary-list">
                <li>
                    <h2>Model</h2>
                    <img src= {selectedColor.imageUrl} alt={selectedCar.name} class="product-preview" />
                    <h3>{selectedCar.name}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Reprehenderit saepe facilis hic, unde, numquam vel. 
                        Blanditiis sed laboriosam ratione nulla atque molestias 
                        at explicabo aperiam reprehenderit culpa nihil, 
                        quis totam cupiditate dolores in quisquam magnam inventore nobis, 
                        rem adipisci eveniet illum.
                    </p>
                </li>
                <li>
                    <h2>Color</h2>
                    <div class="summary-color">
                        <span class="color-swatch" data-color={selectedColor.name}></span>
                        <span class="color-label">
                            {`${selectedColor.name} - $${selectedColor.price?.toLocaleString()}`}
                        </span>
                    </div>
                </li>
                <li>
                    <h2>Accessories</h2>
                    <ul> 
                    {   sortedSelectedAccessories && sortedSelectedAccessories.length > 0 
                        ? sortedSelectedAccessories.map((accessory, index) => (
                            <li key={index}>
                                <p>{accessory.name}</p>
                            </li>))
                        : <p>No Accessories selected;</p>
                    }
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default BuilderStepFour;