

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    

    localStorage.setItem('users', JSON.stringify(users));

    

    const tbody = document.querySelector('#userTable tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
});



function deleteUser(userId) {
const users = JSON.parse(localStorage.getItem('users'));



const updatedUsers = users.filter(user => user.id !== userId);



localStorage.setItem('users', JSON.stringify(updatedUsers));



const row = document.querySelector(`#userTable tbody tr:nth-child(${userId})`);
row.parentNode.removeChild(row);
}