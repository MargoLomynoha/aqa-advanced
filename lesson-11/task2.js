function fetchToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .catch((error1) => {
            console.log('Fetch to do error: ', error1.message);
        })
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .catch((error2) => {
            console.log('Fetch user error: ', error2.message);
        })
}

Promise.all([fetchToDo(), fetchUser()])
    .then((data) => {
        const resultsAll = data;
        console.log('Promise all results: ', resultsAll);
    })
    .catch((error1) => {
        console.error('Promise all error: ', error1.message);
    });

Promise.race([fetchToDo(), fetchUser()])
    .then((firstResponse) => {
        const resultRace = firstResponse;
        console.log('Promise race result: ', resultRace);
    })
    .catch((error) => {
        console.error('Promise race error:', error.message);
    });

