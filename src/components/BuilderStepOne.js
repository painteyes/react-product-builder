function BuilderStepOne(props) {
    
    const { cars, selectedCar, handleSelectCar } = props;
      
    return (
        <section>
            <ul>
                {cars.map((car) => (
                    <li key={car.id} className={selectedCar?.id === car.id ? "selected" : ""}>
                        <span>{car.name}</span>
                        <img src={car.colors[0].imageUrl} alt="Description" />
                        <span>from ${car.basePrice.toLocaleString()}</span>
                        <div onClick={() => handleSelectCar(car)}></div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default BuilderStepOne;
