async function toDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.log('Fetch to do error: ', error.message);
    }
}

async function user() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.log('Fetch user error: ', error.message);
    }
}

const toDoResponse = await toDo();
const userResponse = await user();

console.log(toDoResponse, userResponse);
