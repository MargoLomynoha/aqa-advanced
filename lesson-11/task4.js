class ToDoRequest {
    async toDo() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            );
            return await response.json();
        } catch (error) {
            console.log('Fetch to do error: ', error.message);
        }
    }
}

class UserRequest {
    async user() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users/1'
            );
            return await response.json();
        } catch (error) {
            console.log('Fetch user error: ', error.message);
        }
    }
}

const toDoRequest = new ToDoRequest();
const userRequest = new UserRequest();

console.log(await toDoRequest.toDo(), await userRequest.user());
