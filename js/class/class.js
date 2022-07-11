class Laptop{
    constructor(brand, ram){
        this.brand=brand
        this.ram=ram;
    }
    // getBrand(){
    //     return this.brand
    setBrand(dell){
        this.brand=dell
    }
    }


let laptop1=new Laptop("hp","32gb")
console.log(laptop1.brand)

class Electronics extends Product{
    constructor(name,brand,ram){
        super(name,brand)
        this.ram
    }
}