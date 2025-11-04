function saySmth(phrase) {
    console.log(`${phrase}.`);
}
setTimeout(saySmth, 1000, 'This is my text');

const message = 'Second text.';
setTimeout(() => {
    console.log(message);
}, 1000);
