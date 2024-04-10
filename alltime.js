const stockManagemnt = require("./brand/operation")
const { product } = require("./options/descr")

const{addProduct,display,calculateTotalPrice}=stockManagemnt
// add new student
let newProduct={
        id:1,
        name:"salt",
        amount:1,
        pricePerUnit:500
}
addProduct(newProduct)

//display
display()
//total price
calculateTotalPrice()
