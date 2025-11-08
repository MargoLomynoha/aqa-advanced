function handleNum(number, handEvenCb, handOddCb) {
    if (number % 2 === 0) {
        handEvenCb();
    } else {
        handOddCb();
    }
}

function handEven() {
    console.log('Number is even');
}
function handOdd() {
    console.log('Number is odd');
}

handleNum(5, handEven, handOdd);
handleNum(8, handEven, handOdd);
