const firstArray = [3, -5, 6, 10, 20];
const secondArray = [0, 21, -13, 35, 19, 27];

// First way

const concatenatedArray = firstArray.concat(secondArray);
console.log(concatenatedArray);

// Second way

const concatenatedArray2 = new Array(...firstArray, ...secondArray);
console.log(concatenatedArray2);
