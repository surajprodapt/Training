// var a = 10    //global variable

// function sumTen(){
//     var b = 20; //private variable
//     return a + b
// }
// sumTen()
// console.log(b)

//lexical function

function parent(){
    var x = 20;

    function child(){
        return x + 20;
    }
    return child()
}