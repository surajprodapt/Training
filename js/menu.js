// var btn = document.getElementById("btn");
// var navItems = ["home", "about", "services", "contact"]



// function generateMenu(data) {

//     var navE1 = document.getElementById("menu");

//     var output = "<ul>";

//     for (navItem of data) {
//         output += `<li><a href="${navItem}.html">${navItem}</a></li>`
//     }
//     output += "/<ul>"
//     // console.log(output)
//     navE1.innerHTML = output;
// }
// generateMenu(navItems)
// var promise = new Promise(function (resolve, reject) {
//     try {
//         resolve(navItems)
//     } catch (error) {
//         reject(navItems)
//     }
// });
// var url = "data.json";
var api= "https://jsonplaceholder.typicode.com/guide/"

fetch(api)
    .then(res => res.json())
    .then((data) =>  generateMenu(data)
    )
    .catch(err => console.log(err))


// function createMenu(){
//     generateMenu(navItems)
// }
// btn.addEventListener("click", createMenu);