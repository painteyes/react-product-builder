const colors = [
    { id: 1, name: 'White', price: 0, imageUrl: 'https://codyhouse.co/demo/product-builder/img/product01_col01.jpg' },
    { id: 2, name: 'Mineral Gray', price: 550, imageUrl: 'https://codyhouse.co/demo/product-builder/img/product01_col02.jpg' },
    { id: 3, name: 'Orange Metallic', price: 550, imageUrl: 'https://codyhouse.co/demo/product-builder/img/product01_col03.jpg' },
    { id: 4, name: 'Gray Metallic', price: 0, imageUrl: 'https://codyhouse.co/demo/product-builder/img/product02_col01.jpg' },
    { id: 5, name: 'White Perl Metallic', price: 1800, imageUrl: 'https://codyhouse.co/demo/product-builder/img/product02_col02.jpg' }
]

const accessories = [
    { id: 1, name: '1 Year BMW Maintenance Program Upgrade', price: 975 },
    { id: 2, name: 'BMW Maintenance Program Upgrade', price: 1895 },
    { id: 3, name: 'BMW Charging Station', price: 1080 },
    { id: 4, name: 'BMW Laserlight', price: 6300 }
]

const getColorsById = (ids) => {
    return colors.filter(colors => ids.includes(colors.id));
}

const getAccessoriesById = (ids) => {
    return accessories.filter(accessory => ids.includes(accessory.id));
}

function assignNames() {
    for (let car of cars) {
        car.name = `${car.brand} ${car.model}`;
    }
}

const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'i3',
        basePrice: 42400,
        colors: getColorsById([1, 2, 3]),
        accessories: getAccessoriesById([1, 2, 3]),  
    },
    {
        id: 2,
        brand: 'BMW',
        model: 'i8',
        basePrice: 140700,
        colors: getColorsById([4, 5]),
        accessories: getAccessoriesById([1, 2, 3, 4]), 
    }
];

assignNames();

export default cars;
