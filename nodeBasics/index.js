import chalk from 'chalk';

// const log = console.log;

// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(error('Error!'));
console.log(warning('Warning!'));
