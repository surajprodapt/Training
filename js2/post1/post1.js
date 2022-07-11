var api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
    .then(res => res.json())
    .then((data) => {
        displayUsersGrid(data)
    })
    .catch((err) => console.log(err))

function displayUsersGrid(api) {
    let usersE1 = document.getElementById("api");
    let output = "";
    for (user of api) {
        let statusClass = user.completed ? "success" : "error"
      if(statusClass==success){
      }
        output +=  `<div class="user ${statusClass}">
            <div>${user.userId}</div>
            <div>${user.id}</div>
            <div>${user.title}</div>
            <div>${user.completed}</div>
        </div>`
    }
    usersE1.innerHTML = output;
}
