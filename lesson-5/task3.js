const firstValue = 3;
console.log(`\nТабличка множення на ${firstValue}\n`);

for (let i = 1; i <= 10; i++) {
    console.log(firstValue + ' * ' + i + ' = ' + (firstValue * i));
}

const secondValue = 7;

console.log(`\nТабличка множення на ${secondValue}\n`);

let multiplier = 1
while (multiplier <= 10) {
    console.log(`${secondValue} * ${multiplier} = ${secondValue * multiplier}`);
    multiplier++;
}