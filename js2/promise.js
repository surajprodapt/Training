// var users = [{ name: "suraj" }, { email: "surajagarwal920@gmail.com" }]
// var promise = new Promise(function (resolve, reject) {
//     try {
//         resolve(users)
//     } catch (error) {
//         reject(error)
//     }

// });

// // promise
// //     .then((res) => console.log(res))
// //     .then((err) => console.log(err))

// // promise
// //     .then((res) => {
// //         displayUsersGrid(res)
// //     .then((err) => console.log(err))

// function displayUserGrid(users) {
//     //dom operations
//     let usersE1 = document.getElementById("users");
//     let output = "";
//     for (user of users) {
//         output += <div>
//             <div>$(user.name)</div>
//             <div>$(user.email)</div>
//         </div>
//     }
//     usersE1.innerHTML = output;
// }

var users = [{
    name: "suraj",
    email: "surajagarwal920@gmail.com"
},
{
    name: "s",
    email: "suraj@gmail.com"
}]

var promise = new Promise(function (resolve, reject) {
    try {
        resolve(users)
    } catch (error) {
        reject(users)
    }
});

// promise
//     .then((res) => {
//         displayUserGrid(res)
//     })
//     .catch((err) => console.log(err))

function displayUserGrid(users) {
    let userEl = document.getElementById("users");
    let output = "";
    for (user of users) {
        output += `<div>
        <div> ${user.name} </div>
        <div> ${user.email} </div>
        </div>`
        
    }
    userEl.innerHTML = output;
}
