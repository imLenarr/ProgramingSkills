window.onload = function () {
  fetchUserData();
};

async function fetchUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  displayUsers(data);
}

function displayUsers(users) {
  const userList = document.getElementById("user-list");
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
      `;
    userList.appendChild(userDiv);
  });
}
