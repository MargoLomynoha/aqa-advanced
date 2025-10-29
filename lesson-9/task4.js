const person = {
    firstName: 'Petro',
    lastName: 'Petrov',
    age: 40,
};
person.email = 'petrov@gmail.com';
delete person.age;

console.log(person);
