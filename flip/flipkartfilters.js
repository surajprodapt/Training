var products = [
    {
        name: "towel",
        brand: "levis",
        price: 1000,
        ratings: 4,
        category: "clothing"
    },
    {
        name: "cricket bat",
        brand: "reebok",
        price: 10000,
        ratings: 17,
        category: "sports"
    },
    {
        name: "super",
        brand: "denver",
        price: 5000,
        ratings: 3.5,
        category: "perfume"
    },
    {
        name: "jeans",
        brand: "levis",
        price: 2000,
        ratings: 4,
        category: "clothing"
    },
    {
        name: "shirt",
        brand: "raymonds",
        price: 20000,
        ratings: 4.5,
        category: "clothing"
    },
    {
        name: "diaper",
        brand: "huggies",
        price: 100,
        ratings: 2,
        category: "hygiene"
    },
    {
        name: "Gold chain",
        brand: "tanishq",
        price: 700000,
        ratings: 4.7,
        category: "Accessories"
    },
    {
        name: "Y15",
        brand: "oppo",
        price: 35000,
        ratings: 4.1,
        category: "mobile phones"
    },
    {
        name: "legion",
        brand: "lenovo",
        price: 10000,
        ratings: 4.9,
        category: "laptop"
    },
    {
        name: "beanie",
        brand: "dope",
        price: 500,
        ratings: 1,
        category: "caps"
    }
]

//forEach

// products.forEach(product => console.log(product))

//filter
// var Products =products.filter(product =>product.category === "clothing" &&product.price<20000 && product.brand==="levis" )
// console.log(Products)

// var Productsprice=products.filter(product=>product.price>500 && product.price<35000)
// console.log(Productsprice)

// map
// let productName =products.map(product=>product.name)
// console.log(productName)

// var upGrade = products.map(product => product.ratings + 1)
// console.log(upGrade)

// var sortProducts = products.sort((p1, p2) => (parseInt(p1.price) > parseInt(p2.price) ? 1 : -1))
// console.log(sortProducts)
// var sorProducts = products.sort((p1, p2) => (p1.ratings > p2.ratings ? 1 : -1))
// console.log(sortProducts)

//reduce
// let total = products.reduce(function (accumulator, curValue) {
//     return accumulator + curValue.price
// },0 )
// console.log(total)

const mergeFunc = products
    
    .filter(product => product.price > 500 && product.price < 20000)
    .sort((p1, p2) => (parseInt(p1.price) > parseInt(p2.price) ? 1 : -1))
    .map(product => product.price - (product.price * .1))

// const mergeFunc= discount
// .map( product.price=>price+"10%")
// .filter(price=>price>500 && price<20000)

console.log(mergeFunc)