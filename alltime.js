const stockManagemnt = require("./brand/operation")
// const { product } = require("./options/descr")

const{addProduct,display}=stockManagemnt
// add new student
let newProduct={

        name:"salt",
        amount:2,
        pricePerUnit:500
}
addProduct(newProduct)

//display
display()
//total price
