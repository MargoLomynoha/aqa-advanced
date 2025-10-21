function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Один із параметрів не є числом');
    }
    if (denominator === 0) {
        throw new Error('Ділення на нуль');
    }
    return numerator / denominator;
}

function checkDivider(numerator, denominator) {
    console.log(`Ділення ${numerator} на ${denominator}.`);
    try {
        console.log(`Result ${divide(numerator, denominator)}`);
    } catch (error) {
        console.error('Сталася помилка:', error.message);
    } finally {
        console.log('Робота завершена.\n');
    }
}

checkDivider(6, 3);
checkDivider(6, 0);
checkDivider(6, 'dog');
checkDivider('hot', 3);
checkDivider('hot', 'dog');
