// Task 1: Creating a product Class

class Product {
    constructor(name, id, price, stock) {
      this.name = name;  //Product name
      this.id =  id;     //Product ID
      this.price = price;   //Product Price
      this.stock = stock;   //Product Stock
    }
getDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
};   //Display Product Details

updateStock(quantity){     //Decrease stock amount based on quantity ordered
    this.stock -= quantity;
};   
restock(quantity) {        //Increase Sotkc by restock Quantity
    this.stock += quantity;
}
};

const prod1 = new Product("Laptop", 101, 1200, 10);  //Declare new product
console.log(prod1.getDetails());
prod1.updateStock(3);             //Decrease amount of stock by 3
console.log(prod1.getDetails()); 