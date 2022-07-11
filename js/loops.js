// while
// do while
// for
// for Of
// for in 

//var i=0;
// while(i<=10){
//     console.log("i value is :",i);
//     i++;
// }


// do {
//     console.log("i value is :", i);
//     i++;
// }// while (i <= 10);
// while (i > 10);


// for(var i=0; i<=10; i++ ){
//     console.log("i value is :", i);
// }


// console.time("students")
// var students = ["Suraj", "Roop", "Rohan", "Bhatti", "Yogesh", "Ravi"];
// var studentsLength = students.length;
// for (var i = 0; i < studentsLength; i++) {
//     console.log("name of students:", students[i])
// } 
// console.timeEnd("students")


// var students = ["Suraj", "Roop", "Rohan", "Bhatti", "Yogesh", "Ravi"];
// for (student of students) {
//     console.log(student)
// }

// var students = ["Suraj", "Roop", "Rohan", "Bhatti", "Yogesh", "Ravi"];
// for(student in students){
//     console.log(students[student])
// }

// var person = {
//     name: "Suraj",
//     age: 22,
//     mobileNumber: 9997092030
// }
// for (prop in person) {
//     console.log(prop, person[prop]);
// }



var persons = [{
    name: "Suraj",
    age: 22,
    mobileNumber: 9997092030
}, {
    name: "Saurabh",
    age: 29,
    mobileNumber: 9717661088
}]
for (person of persons) {
    for (key in person) {
        console.log(key, person[key])
    }
}
for(person of persons){
    console.log0
}