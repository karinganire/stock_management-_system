const { product } = require("../options/descr");

const addProduct = (newProduct) => {
    newProduct.id = product.length + 1;
    product.push(newProduct);
    console.log("----add new product-----");
    console.log(product);
}

const calculateTotalPrice = () => {
    let totalAmount = 0;
    product.forEach(item => {
        totalAmount += item.price;
    });
    console.log(`Total Price of all products: $${totalAmount}`);
}

const display = () => {
    console.log("-----display all product----");
    console.log(product);
}

module.exports = {
    addProduct,
    calculateTotalPrice,
    display
}
