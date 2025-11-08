const users = [
    { name: 'John', age: 30 },
    { email: 'ivanov@gmail.com' },
    {},
    { name: 'Maria' },
];
for (const { name, age, email } of users) {
    console.log(`${name ?? '_'}, ${age ?? '_'}, ${email ?? '_'}`);
}

// Другий варіант де окремо 2 і 3 пункт, цикл for ... of і декструктуризація цикла поокремо.

// const users1 = [
//     { name: 'John', age: 30 },
//     { email: 'ivanov@gmail.com' },
//     {},
//     { name: 'Maria' },
// ]
// for (const user of users1) {
//     console.log(`${user.name ?? '_'}, ${user.age ?? '_'}, ${user.email ?? '_'}`);
// };
// for (const { name, age, email } of users1) {
//     console.log(`${name ?? '_'}, ${age ?? '_'}, ${email ?? '_'}`);
// };
