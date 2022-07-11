// var name = "Suraj";
// var name = "jjjj";

// let name = "javascript";
// //let lang="jjjj"
// const data = "english"

// const menu =[ "home","about" ]
// //menu.push("services")
// let welcome=()=>"welcome to arrow function"

// let sum=(a,b)=>a+b;

//rest operator
// function sum(...data) {
//     var total = 0;

//     for (price of data) {
//         total += price
//     }
//     return total;
// }

//spread operator
// Math.max(...nums)

//Destructing

var nums = [12, 45, 38, 923, 98]

let [a, ...b] = nums;

var person = {
    name: "suraj",
    email:"surajagarwal920@gmail.com"
}

var { name: fname, email } = person
console.log(fname)
console.log(email)
