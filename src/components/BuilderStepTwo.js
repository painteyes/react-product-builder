import React from 'react';

function BuilderStepTwo(props) {

    const { colors, selectedColor, setSelectedColor } = props;
    
    return (
        <section className="step-content">
            <header>
                <h1>Select Color</h1>
                <span class="steps-indicator">Step 2 of 4</span>
            </header>

            <ul class="product-previews">                 
                <li className="selected">  
                    <img className="product-preview" src={selectedColor.imageUrl} alt="Product Preview" />
                </li>
                 
            </ul>

            <ul class="product-customizer">  
                {colors?.map((color, index) => (
                <li 
                    className={(selectedColor && selectedColor.id === color.id) || (!selectedColor && index === 0) ? "selected" : ""}
                    key={index} 
                    data-content={`${color.name} - $${color.price.toLocaleString()}`}  
                >
                    <a data-color={color.name} href={`#${color.id}`} onClick={() => setSelectedColor(color)}>
                        {`${ color.name } - $${ color.price }`}
                    </a>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default BuilderStepTwo;
