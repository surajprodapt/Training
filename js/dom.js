//document object
//create div element and store in a variable
var divE1 = document.createElement("div");

//add div to body
document.body.appendChild(divE1);

//create text node
var textE1 = document.createTextNode("some text");

//add text node to div element
divE1.appendChild(textE1);

//add attribute
divE1.setAttribute("id", "test");

//read or get element by id or class
var getById = document.getElementById("test");

//remove elements
//getById.remove()

//console.log(getById.innerText)
console.log(getById.innerHTML);

getById.innerHTML = "new data";

var name = "Suraj";
getById.innerHTML="<p>welcome to "+name +"</p>";

