// script.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Error fetching data:", error));
});

function displayData(data) {
    const tableBody = document.querySelector("table tbody");

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${item.userId}</td>
      <td>${item.title}</td>
      <td>${item.completed ? "Completed" : "Incomplete"}</td>
    `;
        tableBody.appendChild(row);
    });
}
