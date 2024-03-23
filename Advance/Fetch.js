// Fetch Method 1
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

// Fetch Method 2
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// Fetch Method 3
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data[0]))

// Fetch Method 4
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data[0].id))

// Fetch Method 5
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((user) => {
//             console.log(user.id);
//         });
//     });