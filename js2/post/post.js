var api ="https://jsonplaceholder.typicode.com/posts";

fetch(api)
    .then(res => res.json())
    .then((data) => {
        displayUsersGrid(data)
    })
    .catch((err) => console.log(err))

    function displayUsersGrid(api){
        let usersE1 = document.getElementById("api");
        let output = "";
        for (user of api){
        output += `<div class="user">
        <div>${user.userId}</div>
        <div>${user.id}</div>
        <div>${user.title}</div>
        <div>${user.body}</div>
        </div>`
        
        }
        usersE1.innerHTML=output;
    }
