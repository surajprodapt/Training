// function welcome(){
//     alert("event occur")
// }
// var btn =document.getElementById("btn");
// // btn.onclick=welcome;

// //event delegation
// //element.addEventListener(eventname,event handler)

// btn.addEventListener("click", welcome);


function taskOne(eve){
    console.log("task 1")
    eve.preventDefault()
    // if(true){
    //     eve.stopImmediatePropagation()
    // }
}
function taskTwo(eve){
    console.log("task 2")
}

function parHandler(ev){
    console.log("this is parent");
    //console.log(ev.target)
    console.log(ev.currentTarget)
}
function cHandler(ev){
    console.log("this is child");
    ev.stopPropagation()}
var anc=document.getElementById("anc");
anc.addEventListener("click",taskOne)

var p1=document.getElementById("par");
var c1=document.getElementById("c");
var p2=document.getElementById("par12");
var c2=document.getElementById("c12");
p1.addEventListener("click", parHandler)
c1.addEventListener("click", cHandler)
p2.addEventListener("click", taskOne)
c2.addEventListener("click", taskTwo)