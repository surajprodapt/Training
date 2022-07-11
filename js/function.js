// function sum(a, b) {
//     var total = a + b;
//     return total;
// }
// function getCartTotal() {
//     var total = 0;
//     for (price of arguments) {
//         total += price
//     }
//     return total;
// }

// //hoisting
// welcome()
// function welcome(){
//     console.log("welcome function")
// }
// //declare fxn in literal way
// var greet = function(){
//     console.log("greet function")
// }
// greet()

var cart = [
    {
        productId: 1,
        brand: "apple",
        price: 89000,
        qty: 1
    },
    {
        productId: 2,
        brand: "oneplus",
        price: 59000,
        qty: 3
    },
    {
        productId: 3, 
        brand: "realme",
        price: 19000,
        qty: 10
    }
]
function cardTotal(data) {
    var total = 0;
    for (product of data) {
        var itotal = 0;
        itotal = product.price * product.qty;
        console.log("quantity=", product.qty, "total amount=", itotal);
        total += "quantity=", product.qty, "total amount=", itotal;
        return total;
    }
}
function (cardTotal);
