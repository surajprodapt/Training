//alert ("welcome to Javavscript");
/*mutli line comments
alert ("welcome to Javavscript");
alert ("welcome to Javavscript");*/

//Primitive data types
//String "Java Script"
//Number 12000.98
//Boolean true/false
undefined
null

// var name="Java Script";
// var price=90;
//alert(name);
//varianle naming conventions
// //var 8name=""; //not correct
// var _name="";


// console.log(name);
var brand, price, category, ram, rear_camera, front_camera, processor, color, display;
brand = "POCO";
price = 27999;
category = "mobile";
ram = "6_GB";
rear_camera = "64_MP";
front_camera = "8_MP";
processor = "snapdragon";
color = "black";
display = "6.67_inches";
//display="8_inches";    //  overwrite
var firstName = "Suraj";
var lastName = "Agrawal";
//var fullName=firstName + " " + lastName;

//template literals

var fullName = `Welcome ${firstName} ${lastName}`;

//Complex data types

//Arrays

var students = ["Suraj", 90, null, fullName, [1, 2, 4, [34, 67]]];
console.log(students[1].name);

//objects
var dog = {
    color: "goldenBrown",
    price: 20000,
    activities: ["play", "barks", "eats"],
    address: {
        city: "bangalore",
        met: function () { }
    },
    height: "2feet",
    runs: function () {
        console.log("Dog Runs")
    },
    eats: function () {
        console.log("Dog eat's")
    }

}
//objectname.propertyname
//dog.height;//
console.log(dog.color)

/*function fn(){
    var lang = "English"
    console.log(lang);
}
fn()*/

function flat(param1, param2, param3) {
    var result = `${param1} and ${param2} and ${param3} makes a flat`;
    return result;
}
console.log(flat);
function sum(a, b) {
    return a + b;
}
sum(20, 30);





