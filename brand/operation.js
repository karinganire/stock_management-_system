const { product } = require("../options/descr");

const addProduct = (newProduct) => {
    newProduct.id = product.length + 1;
    newProduct.totalPrice =(newProduct.amount*newProduct.pricePerUnit)
    product.push(newProduct);
    console.log("----add new product-----");
    console.log(product);
}


const display = () => {
    console.log("-----display all product----");
    console.log(product);
}


module.exports = {
    addProduct,
    display
}
