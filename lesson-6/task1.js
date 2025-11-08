// Function declaration

function rectangleArea1(width, height) {
    return width * height;
}

const result1 = rectangleArea1(5, 10);
console.log(`First rectangle area is ${result1}`);

// Function expression

const rectangleArea2 = function (width, height) {
    return width * height;
};
console.log(`Second rectangle area is ${rectangleArea2(5, 10)}`);

// Arrow function

const rectangleArea3 = (width, height) => width * height;
console.log(`Third rectangle area is ${rectangleArea3(5, 10)}`);
