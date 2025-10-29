const car1 = {
    brand: 'Honda',
    model: 'CR-V',
    year: 2011,
};
const car2 = {
    brand: 'BMW',
    model: 'M3',
    owner: 'Ivan Ivanov',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
