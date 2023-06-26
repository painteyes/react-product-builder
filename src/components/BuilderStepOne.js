import { useState, useEffect } from 'react';

function BuilderStepOne(props) {
    
    const { 
        cars, 
        selectedCar, 
        previousLoadedRef, 
        isCarSelected,
        handleSelectCar 
    } = props;

    const [loaded, setLoaded] = useState(previousLoadedRef.current);

    const createLoadedObj = (prevLoaded, id) => {
        const newLoaded = Object.keys(prevLoaded).reduce((obj, key) => {
            obj[key] = false;
            return obj;
        }, {});
        
        newLoaded[id] = true;
        return newLoaded;
    };

    useEffect(() => {

        if (!isCarSelected) {
            setLoaded({});
            return;
        }
    
        const currentCarId = selectedCar.id;
    
        const timer = setTimeout(() => {
            setLoaded(prevLoaded => {
                const newLoaded = createLoadedObj(prevLoaded, currentCarId);
                previousLoadedRef.current = newLoaded;
                return newLoaded;
            });
        }, 500);
    
        return () => clearTimeout(timer);
    }, [isCarSelected, previousLoadedRef, selectedCar]);
    
    return (
        <section class="step-content">
            
            <header>
                <h1>Select Model</h1>
                <span class="steps-indicator">Step 1 of 4</span>
            </header>

            <a href="https://codyhouse.co/gem/product-builder" class="nugget-info hide-on-desktop">
                Article & Download
            </a>

            <ul class="models-list options-list col-2">
            {cars.map((car) => {
                const classes = [];
                if (selectedCar.id === car.id) classes.push("selected");
                if (loaded[car.id]) classes.push("loaded");

                return (
                    <li 
                        key={car.id} 
                        className={classes.join(" ")} 
                        data-price={car.basePrice} 
                        data-model={car.model}>
                        <span class="name">{car.name}</span>
                        <img src={car.colors[0].imageUrl} alt="Description" />
                        <span class="price">from ${car.basePrice.toLocaleString()}</span>
                        <div class="radio" onClick={() => handleSelectCar(car)}></div>
                    </li>
                )
            })}
            </ul>
        </section>
    )
}

export default BuilderStepOne;
