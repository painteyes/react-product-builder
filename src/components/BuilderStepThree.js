import React, { useState, useEffect } from 'react';

function BuilderStepThree(props) {

    const { 
        accessories, 
        selectedAccessories, 
        setSelectedAccessories 
    } = props;

    const handleSelectedAccessories = (accessory) => {
        let updatedSelectedAccessories;
    
        if (selectedAccessories.length > 0) {
            const index = selectedAccessories.findIndex(a => a.id === accessory.id);
            
            if (index > -1) {
                // The accessory is already selected, so it is removed
                updatedSelectedAccessories = selectedAccessories.filter((_, i) => i !== index);
            } else {
                // The accessory is not yet selected, so it is added
                updatedSelectedAccessories = [...selectedAccessories, accessory];
            }
        } else {
            // selectedAccessories is null, so it is initialized with the first accessory
            updatedSelectedAccessories = [accessory];
        }
        setSelectedAccessories(updatedSelectedAccessories);

        console.log(selectedAccessories)
    }

    return (
        <section class="step-content">
            <header>
                <h1>Accessories</h1>
                <span class="steps-indicator">Step 3 of 4</span>
            </header>

            <ul class="accessories-list options-list">
            {accessories?.map((accessory, index) => {
                
                const isSelected = selectedAccessories.some(selectedAccessory => selectedAccessory.id === accessory.id);

                return (
                    <li key={accessory.id} className={isSelected ? "selected" : ""}>
                        <p>{accessory.name}</p>
                        <span class="price">{`$${accessory.price.toLocaleString()}`}</span>
                        <div class="check" onClick={() => handleSelectedAccessories(accessory)}></div>
                    </li>
                );
            })}
            </ul>
        </section>
    )
}

export default BuilderStepThree;