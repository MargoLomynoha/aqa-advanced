// First way

const isAdult = (age) => (age >= 18 ? 'true' : 'false');
console.log(isAdult(25));
console.log(isAdult(15));

// Second way

function isAdultIf(age) {
    if (age >= 18) return true;
    else return false;
}
console.log(isAdultIf(25));
console.log(isAdultIf(15));

// декілька способів перевірки віку

// function isAdult1(age) {
//     const result = age >=18 ? 'true' : 'false';
//     return result;
// }
// console.log(isAdult1(25));

// function isAdult2(age) {
//     return age >=18
// }
// console.log(isAdult2(25));

// function isAdult3(age) {
//     return age >=18 ? true : false;
// }
// console.log(isAdult3(25));
